type SectionLabelProps = {
  index: string;
  children: string;
  inverse?: boolean;
};

export function SectionLabel({ index, children, inverse = false }: SectionLabelProps) {
  return (
    <p className="section-label" data-inverse={inverse}>
      <span>[ {index} ]</span>
      <span>{children}</span>
    </p>
  );
}
