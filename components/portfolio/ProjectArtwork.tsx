import type { ProjectArtVariant } from "@/data/projects";

type ProjectArtworkProps = {
  variant: ProjectArtVariant;
  id: string;
  className?: string;
};

export function ProjectArtwork({ variant, id, className }: ProjectArtworkProps) {
  const label = `Arte abstrata temporária do ${id}`;

  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
    >
      {variant === "pulse" && (
        <>
          <rect width="1200" height="800" fill="#111019" />
          <path d="M-80 670 310 35h370L295 800H-80Z" fill="#C8FF3D" />
          <path d="m430 800 385-800h465L895 800Z" fill="#171B22" />
          <path d="M-40 650C210 650 235 450 425 450s215 120 375 60c170-64 195-260 450-280" fill="none" stroke="#2D58FF" strokeWidth="8" />
          <g fill="#080010">
            <circle cx="175" cy="594" r="12" />
            <circle cx="425" cy="450" r="12" />
          </g>
          <g fill="#F5F7FA">
            <circle cx="800" cy="510" r="10" />
            <circle cx="1085" cy="285" r="10" />
          </g>
        </>
      )}

      {variant === "orbit" && (
        <>
          <rect width="1200" height="800" fill="#2D58FF" />
          <path d="M0 800V330L450 0h750v800Z" fill="#080010" />
          <g fill="none" stroke="#2D58FF" strokeWidth="4">
            {[90, 150, 215, 290, 375, 470].map((radius) => (
              <circle key={radius} cx="835" cy="405" r={radius} />
            ))}
          </g>
          <path d="M0 618 1200 260" stroke="#C8FF3D" strokeWidth="5" />
          <circle cx="755" cy="393" r="14" fill="#C8FF3D" />
        </>
      )}

      {variant === "field" && (
        <>
          <rect width="1200" height="800" fill="#C8FF3D" />
          <rect x="785" width="415" height="800" fill="#080010" />
          <g fill="#080010">
            {Array.from({ length: 12 }).map((_, index) => (
              <rect key={index} x={index * 58 - 160} y="-160" width="18" height="1120" transform="rotate(28 600 400)" />
            ))}
          </g>
          <path d="M-80 585C180 480 365 640 595 490s330-100 685-340" fill="none" stroke="#2D58FF" strokeWidth="9" />
          <circle cx="585" cy="496" r="28" fill="#2D58FF" stroke="#080010" strokeWidth="8" />
        </>
      )}

      {variant === "lattice" && (
        <>
          <rect width="1200" height="800" fill="#1A1F26" />
          <rect x="0" y="0" width="310" height="800" fill="#2D58FF" />
          <g fill="none" stroke="#F5F7FA" strokeOpacity="0.26" strokeWidth="2">
            {Array.from({ length: 17 }).map((_, index) => (
              <path key={`down-${index}`} d={`M${index * 100 - 400} 0 ${index * 100 + 100} 800`} />
            ))}
            {Array.from({ length: 17 }).map((_, index) => (
              <path key={`up-${index}`} d={`M${index * 100 + 100} 0 ${index * 100 - 400} 800`} />
            ))}
          </g>
          <rect x="365" y="170" width="560" height="390" fill="#080010" stroke="#F5F7FA" strokeOpacity="0.45" strokeWidth="2" />
          <path d="M365 515 535 390l125 64 265-205" fill="none" stroke="#C8FF3D" strokeWidth="7" />
          <circle cx="660" cy="454" r="16" fill="#C8FF3D" />
        </>
      )}
    </svg>
  );
}
