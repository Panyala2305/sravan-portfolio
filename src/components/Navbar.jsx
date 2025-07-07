import { FaHome } from "react-icons/fa"; // Make sure to install react-icons if not already

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 left-0 bg-[#1e2a38] shadow z-50">
      <div className="container mx-auto flex justify-between items-center p-4 px-4">
        {/* Home Icon + Text */}
        <a href="#" className="flex items-center space-x-2 text-white ">
          <FaHome className="text-white text-xl" />
          <span className="text-xl font-bold">Home</span>
        </a>

        {/* Navigation Links */}
        <nav className="space-x-4 hidden md:block">
          <a href="#about" className="text-white hover:underline">About</a>
          <a href="#education" className="text-white hover:underline">Education</a>
          <a href="#projects" className="text-white hover:underline">Projects</a>
          <a href="#experience" className="text-white hover:underline">Experience</a>
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
  )
}
