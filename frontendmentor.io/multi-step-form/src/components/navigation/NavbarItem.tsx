import { useState } from "react";

import { NavbarItemProps } from "@app/types";

const NavbarItem: React.FC<NavbarItemProps> = ({
  step,
  disabled = false,
  name,
  description,
  isActive,
  handleClick,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <li>
      <div
        id={"NavbarItem" + step}
        className={
          "flex flex-row cursor-pointer caret-transparent" +
          (disabled || isActive ? " pointer-events-none cursor-default" : "")
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onPointerUp={handleClick}
      >
        <div
          className={
            "flex items-center justify-center w-8 h-8 font-regular rounded-full " +
            (isActive
              ? " bg-primary-lightblue "
              : " border-neutral-white border text-neutral-white ") +
            (!isActive && hover ? " bg-primary-marineblue " : "")
          }
        >
          {step}
        </div>
        <div
          className={
            "flex flex-col ml-4 text-xs  mobile:hidden desktop:block " +
            (!isActive && hover ? " text-primary-marineblue " : "")
          }
        >
          <div className="font-medium active:text-neutral-white text-neutral-coolgray">
            {name}
          </div>
          <div className="font-bold text-neutral-white active:text-neutral-coolgray">
            {description}
          </div>
        </div>
      </div>
    </li>
  );
};

export default NavbarItem;
