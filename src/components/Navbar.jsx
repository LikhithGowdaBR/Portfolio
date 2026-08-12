import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  if (hidden) return null;

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 py-5 px-4 sm:px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
        active ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold text-white">LG</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10">
        <li>
          <a href="#home" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">
            Project
          </a>
        </li>
        <li>
          <a href="#experience" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="w-10 h-10 rounded-md flex items-center justify-center bg-zinc-900/30 border border-zinc-700 text-white"
          type="button"
        >
          <span className={`hamburger transition-transform ${open ? "rotate-90" : ""}`}>
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        >
          <ul
            className="flex flex-col items-center gap-6 text-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <li>
              <a href="#home" onClick={() => setOpen(false)} className="text-white hover:text-cyan-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setOpen(false)} className="text-white hover:text-cyan-400">
                About
              </a>
            </li>
            <li>
              <a href="#project" onClick={() => setOpen(false)} className="text-white hover:text-cyan-400">
                Project
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setOpen(false)} className="text-white hover:text-cyan-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="text-white hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
