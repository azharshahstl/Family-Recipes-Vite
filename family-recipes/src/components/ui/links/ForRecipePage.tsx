import { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";

interface RecipePageLinkProps {
  handleOnClick: MouseEventHandler<HTMLAnchorElement> | undefined | void;
  content: string;
  goTo: string;
  mobile?: boolean;
}

const RecipePageLink = (props: RecipePageLinkProps) => {
  const { handleOnClick = () => null, content, goTo, mobile = true } = props;

  return (
    <NavLink
      onClick={handleOnClick}
      to={goTo}
      className={({ isActive }) =>
        [
          "group",
          "rounded-full",
          "border-none",
          "text-center",
          "self-center",
          "p-2",
          mobile ? "text-md" : "text-xs",
          mobile ? "uppercase" : "",
          "focus-visible:outline-amber-500",
          "sm:text-base",
          isActive ? "bg-amber-400" : "",
        ].join(" ")
      }
    >
      {content}
      <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
    </NavLink>
  );
};
export default RecipePageLink;
