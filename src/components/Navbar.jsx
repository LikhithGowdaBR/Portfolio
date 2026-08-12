import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 py-5 px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
      active ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
    }`}>
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold text-white">
          LG
        </h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex items-center gap-10">
        <li><a href="#home" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">Home</a></li>
        <li><a href="#about" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">About</a></li>
        <li><a href="#project" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">Project</a></li>
        <li><a href="#experience" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">Experience</a></li>
        <li><a href="#contact" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
