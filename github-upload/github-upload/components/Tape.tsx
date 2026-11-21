import { frameworkTape } from "@/lib/data";

function Run() {
  return (
    <>
      {frameworkTape.map((w) => (
        <span key={w} className="flex items-center">
          <span>{w}</span>
          <span className="mx-[0.5em] inline-block h-[0.16em] w-[0.16em] shrink-0 bg-signal" />
        </span>
      ))}
    </>
  );
}

/** The one loud move: the frameworks we work against, travelling edge to edge. */
export function Tape() {
  return (
    <div className="marquee overflow-hidden bg-signal py-[clamp(28px,4vw,56px)] text-signal-ink">
      <p className="sr-only">Frameworks: {frameworkTape.join(", ")}</p>
      <div aria-hidden className="marquee-track flex w-max whitespace-nowrap text-[clamp(56px,9vw,140px)] font-extrabold leading-none tracking-[-0.045em]">
        <div className="flex shrink-0 items-center"><Run /></div>
        <div className="flex shrink-0 items-center"><Run /></div>
      </div>
    </div>
  );
}
