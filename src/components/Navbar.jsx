import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      
      scroll.scrollToTop({
        duration: 500,
        smooth: true,
      });
    } else {
      
      navigate('/');
    }
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
            </>
          )}

          <a
            href="https://www.linkedin.com/in/sravan77/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-indigo-500 transition"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}
