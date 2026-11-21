export function Footer() {
  return (
    <footer className="sticky bottom-0 z-0 grid min-h-[100svh] grid-rows-[auto_1fr_auto] bg-paper px-[var(--margin)] pt-12 pb-5 text-paper-ink">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 leading-snug md:grid-cols-4 [&_a]:inline-flex [&_a]:min-h-10 [&_a]:items-center">
        <ul className="col-span-2 md:col-span-1">
          <li className="font-extrabold">NEXSHIELD Technologies</li>
          <li className="text-paper-muted">Cybersecurity, audit and managed security for regulated businesses.</li>
        </ul>
        <ul>
          <li className="font-extrabold">Explore</li>
          {[["Practices", "#services"], ["Engage", "#engage"], ["Sectors", "#sectors"], ["Frameworks", "#frameworks"], ["Readiness check", "#readiness"], ["Field notes", "#notes"]].map(([l, h]) => (
            <li key={h}><a href={h} className="hover:opacity-60">{l}</a></li>
          ))}
        </ul>
        <ul>
          <li className="font-extrabold">Frameworks</li>
          <li>DPDPA and DPDP Rules</li>
          <li>CERT-In Directions</li>
          <li>ISO 27001, ISO 27701, SOC 2, PCI DSS</li>
          <li>GDPR, NIST CSF 2.0, NCIIPC</li>
        </ul>
        <ul className="col-span-2 md:col-span-1">
          <li className="font-extrabold">Contact</li>
          <li className="[overflow-wrap:anywhere]">hello@nexshield.example</li>
          <li><a href="#contact" className="hover:opacity-60">Book an assessment</a></li>
        </ul>
      </div>
      <div />
      <div>
        <svg viewBox="0 0 900 128" className="block w-full" role="img" aria-label="NEXSHIELD" preserveAspectRatio="xMidYMax meet">
          <text x="0" y="124" textLength="900" lengthAdjust="spacingAndGlyphs" fontSize="170" fill="currentColor" style={{ fontFamily: "var(--font-sans)", fontWeight: 800 }}>NEXSHIELD</text>
        </svg>
        <p className="mt-4 text-[0.8125rem] text-paper-muted">
          © 2026 NEXSHIELD Technologies. Demo concept: figures in product screens are sample data, and nothing here is legal advice. Check regulatory dates against the primary source.
        </p>
      </div>
    </footer>
  );
}
