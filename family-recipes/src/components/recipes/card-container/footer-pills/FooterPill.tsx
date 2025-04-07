import { ReactNode } from "react";

interface FooterPillProps {
  children?: ReactNode;

  value: string;
}

const FooterPill = (props: FooterPillProps) => {
  const { value, children } = props;

  return (
    <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-amber-950 sm:text-sm">
      {children}:
      <span className="pl-[5px] font-normal text-gray-950">{value}</span>
    </span>
  );
};

export default FooterPill;
