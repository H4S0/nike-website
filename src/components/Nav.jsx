import { React, useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-grey"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            className="cursor-pointer"
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={toggleMenu}
          />
        </div>
      </nav>
      {isActive === true ? (
        <ul className="bg-slate-300 flex flex-col items-center gap-4 mt-4 max-lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-grey"
                onClick={() => setIsActive(!isActive)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        isActive === false
      )}
    </header>
  );
};

export default Nav;
