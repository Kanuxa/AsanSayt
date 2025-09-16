import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // const activeClass =
  //   "text-white bg-primary px-3 py-2 rounded-md transition-all";
  // const inactiveClass =
  //   "text-gray-700 hover:text-primary hover:bg-primary-light px-3 py-2 rounded-md transition-all";

  const activeClassScrolled =
    "text-white bg-primary px-3 py-2 rounded-md transition-all";
  const inactiveClassScrolled =
    "text-gray-700 hover:text-primary hover:bg-primary-light px-3 py-2 rounded-md transition-all";

  const activeClassTransparent =
    "text-primary-light font-semibold bg-primary px-3 py-2 rounded-md transition-all";
  const inactiveClassTransparent =
    "text-white hover:text-primary hover:bg-primary-light px-3 py-2 rounded-md transition-all";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // switch after scrolling down 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-[95%] md:w-[90%] mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <span
              className={`font-bold text-xl transition-colors duration-300 ${
                scrolled ? "text-[var(--color-primary)]" : "text-white"
              }`}
            >
              AsanSayt
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  scrolled
                    ? isActive
                      ? activeClassScrolled
                      : inactiveClassScrolled
                    : isActive
                    ? activeClassTransparent
                    : inactiveClassTransparent
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-max-height duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`px-2 pt-2 pb-3 flex flex-col gap-2 shadow-md transition-colors duration-300 ${
            scrolled ? "bg-white" : "bg-dark/70 backdrop-blur-md"
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                scrolled
                  ? isActive
                    ? activeClassScrolled
                    : inactiveClassScrolled
                  : isActive
                  ? activeClassTransparent
                  : inactiveClassTransparent
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
