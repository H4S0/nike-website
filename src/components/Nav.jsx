import React, { useState } from "react";
import { hamburger } from "../assets/icons"; // Make sure you have a close icon imported
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <button onClick={handleMenuToggle}>
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center lg:hidden">
          <button onClick={handleMenuToggle} className="absolute top-4 right-4">
            <img src={hamburger} alt="close icon" width={25} height={25} />
          </button>
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 text-lg leading-normal font-medium font-montserrat mt-8">
            <a href="/">Sign in</a>
            <a href="/">Explore now</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
