type DataSignalGraphicProps = {
  className?: string;
};

export function DataSignalGraphic({ className }: DataSignalGraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1600 360"
      preserveAspectRatio="none"
    >
      <path className="signal-ghost" d="M0 268C220 268 252 190 420 190s220 58 350 18c136-42 176-144 324-126 158 18 190 146 506 32" />
      <path className="signal-path" pathLength="1" d="M0 268C220 268 252 190 420 190s220 58 350 18c136-42 176-144 324-126 158 18 190 146 506 32" />
      <g className="signal-nodes">
        <circle cx="104" cy="256" r="5" />
        <circle cx="420" cy="190" r="5" />
        <circle cx="770" cy="208" r="5" />
        <circle cx="1094" cy="82" r="8" />
        <circle cx="1440" cy="139" r="5" />
      </g>
    </svg>
  );
}
