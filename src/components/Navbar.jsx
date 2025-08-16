import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (nav) => {
    setActive(nav.title);
    setToggle(false);

    if (nav.title === "Resume") {
      navigate("/resume");
    } else if (nav.title === "Home") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(nav.id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(nav.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Rishi Gupta &nbsp;
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavClick(nav)}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Side Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-primary shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <img
                src={close}
                alt="close"
                className="w-[28px] h-[28px] cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </div>

            {/* Links */}
            <ul className="list-none flex flex-col gap-6 p-6">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium text-[18px] cursor-pointer ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white`}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
