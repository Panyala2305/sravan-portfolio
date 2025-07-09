import { useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = () => {
    setMenuOpen(false); 
    if (location.pathname === '/') {
      scroll.scrollToTop({ duration: 500, smooth: true });
    } else {
      navigate('/');
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-[#1e2a38] shadow z-50">
      <div className="container mx-auto flex justify-between items-center p-4 px-4">
        <div
          onClick={handleHomeClick}
          className="flex items-center space-x-2 text-white cursor-pointer hover:text-gray-300 transition"
        >
          <FaHome className="text-white text-xl" />
          <span className="text-xl font-bold">Home</span>
        </div>

        {/* Desktop Nav */}
        <nav className="space-x-4 hidden md:block">
          <RouterLink
            to="/about"
            className={`text-white hover:underline transition ${
              location.pathname === '/about' ? 'underline text-indigo-400' : ''
            }`}
          >
            About
          </RouterLink>

          {location.pathname === '/' && (
            <>
              <ScrollLink
                to="education"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:underline cursor-pointer"
              >
                Education
              </ScrollLink>

              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:underline cursor-pointer"
              >
                Experience
              </ScrollLink>
              
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:underline cursor-pointer"
              >
                Projects
              </ScrollLink>
            </>
          )}

          <a
            href="mailto:sravansaimethuku45@gmail.com"
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-indigo-500 transition"
          >
            Contact Me
          </a>
        </nav>

        {/* Hamburger Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1e2a38] shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 text-white">
          <RouterLink
            to="/about"
            onClick={handleCloseMenu}
            className={`hover:underline ${
              location.pathname === '/about' ? 'underline text-indigo-400' : ''
            }`}
          >
            About
          </RouterLink>

          {location.pathname === '/' && (
            <>
              <ScrollLink
                to="education"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleCloseMenu}
                className="hover:underline cursor-pointer"
              >
                Education
              </ScrollLink>

              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleCloseMenu}
                className="hover:underline cursor-pointer"
              >
                Experience
              </ScrollLink>

              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleCloseMenu}
                className="hover:underline cursor-pointer"
              >
                Projects
              </ScrollLink>
            </>
          )}

          <a
            href="mailto:sravansaimethuku45@gmail.com"
            onClick={handleCloseMenu}
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-indigo-500 transition text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Overlay for background click to close menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={handleCloseMenu}
        ></div>
      )}
    </header>
  );
}
