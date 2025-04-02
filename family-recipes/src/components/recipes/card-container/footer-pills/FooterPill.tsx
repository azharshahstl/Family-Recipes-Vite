interface FooterPillProps {
  descriptor: string;
  value: string;
}

const FooterPill = (props: FooterPillProps) => {
  const { descriptor, value } = props;

  return (
    <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-amber-950 sm:text-sm">
      {descriptor}: <span className="font-normal text-gray-950">{value}</span>
    </span>
  );
};

export default FooterPill;
