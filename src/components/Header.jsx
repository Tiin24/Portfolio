import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Social from "./Social";

function Header() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      {/* logo */}
      <div className="container mx-auto h-full flex items-center justify-between">
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/lo-mio-1fc99.appspot.com/o/logo_large.png?alt=media&token=f409ee24-d0d0-46ab-becd-4d8405bfb2df"  alt="logo" className="w-12"  />
        </div>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Social */}
        <div className="hidden lg:block">
          <Social />
        </div>
        {/* nav mobile */}
        <div className="lg:hidden"></div>
      </div>
    </header>
  );
}

export default Header;
