export function Marquee() {
  const items = [
    'AI TRANSFORMATION',
    'DATA WAREHOUSE',
    'MACHINE LEARNING',
    'POWER BI',
    'AUTOMATION',
    'ANALYTICS',
    'LLM AGENTS',
    'ETL / ELT',
  ];
  const text = items.join(' \u2022 ');

  return (
    <div className="py-6 border-y border-white/[0.04] overflow-hidden select-none">
      <div className="flex animate-marquee">
        <span className="text-2xl md:text-3xl font-display font-bold text-white/[0.05] whitespace-nowrap pr-12">
          {text} &bull;&nbsp;
        </span>
        <span className="text-2xl md:text-3xl font-display font-bold text-white/[0.05] whitespace-nowrap pr-12">
          {text} &bull;&nbsp;
        </span>
      </div>
    </div>
  );
}
