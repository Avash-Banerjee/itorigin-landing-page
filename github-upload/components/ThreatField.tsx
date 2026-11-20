"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };
type Threat = { x: number; y: number; vx: number; vy: number };
type Burst = { x: number; y: number; r: number };

/**
 * A live network under a hexagonal shield. Red threats fly in from the edges and burst into green
 * where they meet the perimeter. The pointer gently parts the network. Static under reduced motion.
 */
export function ThreatField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, cx = 0, cy = 0, R = 0, raf = 0, visible = true, spawn = 0, rot = 0;
    const mouse = { x: -999, y: -999 };
    let nodes: Node[] = [];
    const threats: Threat[] = [];
    const bursts: Burst[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w * (w > 900 ? 0.68 : 0.5);
      cy = h * (w > 900 ? 0.5 : 0.62);
      R = Math.min(w, h) * (w > 900 ? 0.34 : 0.3);
      const count = Math.round(Math.min(90, (w * h) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const hex = (r: number, a: number) => {
      ctx.beginPath();
      for (let k = 0; k < 6; k++) {
        const t = a + (k * Math.PI) / 3;
        const px = cx + Math.cos(t) * r;
        const py = cy + Math.sin(t) * r;
        if (k) ctx.lineTo(px, py);
        else ctx.moveTo(px, py);
      }
      ctx.closePath();
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      rot += reduce ? 0 : 0.0016;

      // network
      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 140) { n.x += (dx / d) * 1.2; n.y += (dy / d) * 1.2; }
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
          if (d < 130) {
            const inside = Math.hypot(nodes[a].x - cx, nodes[a].y - cy) < R && Math.hypot(nodes[b].x - cx, nodes[b].y - cy) < R;
            ctx.strokeStyle = inside ? `rgba(61,224,160,${0.35 * (1 - d / 130)})` : `rgba(158,171,191,${0.16 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const inside = Math.hypot(n.x - cx, n.y - cy) < R;
        ctx.fillStyle = inside ? "#3de0a0" : "rgba(158,171,191,0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, inside ? 2.2 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // shield perimeter
      ctx.strokeStyle = "rgba(61,224,160,0.9)";
      ctx.lineWidth = 2;
      hex(R, rot);
      ctx.stroke();
      ctx.strokeStyle = "rgba(61,224,160,0.28)";
      ctx.lineWidth = 1;
      hex(R * 1.12, -rot * 0.7);
      ctx.stroke();
      hex(R * 0.62, rot * 1.4);
      ctx.stroke();

      // threats
      if (!reduce) {
        spawn++;
        if (spawn % 55 === 0) {
          const ang = Math.random() * Math.PI * 2;
          const dist = Math.max(w, h) * 0.75;
          const x = cx + Math.cos(ang) * dist, y = cy + Math.sin(ang) * dist;
          const sp = 2.2 + Math.random() * 1.4;
          const dx = cx - x, dy = cy - y, l = Math.hypot(dx, dy);
          threats.push({ x, y, vx: (dx / l) * sp, vy: (dy / l) * sp });
        }
        for (let t = threats.length - 1; t >= 0; t--) {
          const th = threats[t];
          th.x += th.vx;
          th.y += th.vy;
          ctx.fillStyle = "#ff5f6d";
          ctx.beginPath();
          ctx.arc(th.x, th.y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "rgba(255,95,109,0.4)";
          ctx.beginPath();
          ctx.moveTo(th.x, th.y);
          ctx.lineTo(th.x - th.vx * 9, th.y - th.vy * 9);
          ctx.stroke();
          if (Math.hypot(th.x - cx, th.y - cy) < R * 1.02) {
            bursts.push({ x: th.x, y: th.y, r: 3 });
            threats.splice(t, 1);
          }
        }
        for (let b = bursts.length - 1; b >= 0; b--) {
          const bu = bursts[b];
          bu.r += 1.4;
          ctx.strokeStyle = `rgba(61,224,160,${Math.max(0, 1 - bu.r / 40)})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(bu.x, bu.y, bu.r, 0, Math.PI * 2);
          ctx.stroke();
          if (bu.r > 40) bursts.splice(b, 1);
        }
      }
      if (!reduce && visible) raf = requestAnimationFrame(frame);
    };

    resize();
    frame();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); }
    });
    io.observe(canvas);
    const move = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <canvas ref={ref} className={`block h-full w-full ${className}`} aria-hidden />;
}
