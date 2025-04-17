import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed w-full top-0 left-0 z-50 px-4 md:px-10 py-4 backdrop-blur-md bg-white/60 dark:bg-[#1e1e1e]/60 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-[var(--primary)] cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          GigFloww
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-[var(--fg)] dark:text-white font-medium">
          <li
            className="hover:text-[var(--accent)] transition cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li className="hover:text-[var(--accent)] transition relative group cursor-pointer">
            Services
            <ul className="absolute top-8 left-0 bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded shadow-md p-2 hidden group-hover:block">
              <li
                className="px-4 py-2 hover:text-[var(--primary)] cursor-pointer"
                onClick={() => scrollToSection("design")}
              >
                Design
              </li>
              <li
                className="px-4 py-2 hover:text-[var(--primary)] cursor-pointer"
                onClick={() => scrollToSection("development")}
              >
                Development
              </li>
            </ul>
          </li>
          <li
            className="hover:text-[var(--accent)] transition cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="hover:text-[var(--accent)] transition cursor-pointer"
            onClick={() => scrollToSection("signup")}
          >
            Contact
          </li>
        </ul>

        <div className="md:hidden z-50">
          {menuOpen ? (
            <HiX
              className="text-3xl text-[var(--fg)] dark:text-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HiMenu
              className="text-3xl text-[var(--fg)] dark:text-white cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-[#1e1e1e] rounded-md shadow-lg p-4 space-y-4 text-[var(--fg)] dark:text-white font-medium">
          <p className="cursor-pointer" onClick={() => scrollToSection("home")}>
            Home
          </p>
          <div>
            <p className="cursor-pointer">Services</p>
            <ul className="pl-4 space-y-2">
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("design")}
              >
                Design
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("development")}
              >
                Development
              </li>
            </ul>
          </div>
          <p
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About
          </p>
          <p
            className="cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </p>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
