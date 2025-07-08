import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="py-32 flex items-center justify-center text-center px-4">
      <div>
        
        <div className="flex justify-center mb-6">
          <img
            src="/profile.png" 
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-700 shadow-lg"
          />
        </div>

        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Hi, I'm Sravan Sai Methuku</h1>
        <p className="text-lg md:text-xl text-gray-300">Data Scientist/ML Engineer</p>

        
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          
          <a
            href="/Akashreddy-Resume.pdf"
            download
            className="bg-white text-darkBlueGray font-semibold px-6 py-2 rounded-lg transition hover:bg-black hover:text-white"
          >
            Resume
          </a>

          
          <a
            href="https://www.linkedin.com/in/sravan77/"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            Contact Me
          </a>
        </div>

        
        <div className="mt-8 flex justify-center gap-6 text-4xl text-gray-400">
          <a
            href="https://www.linkedin.com/in/sravan77/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sravansai-10" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sravansaimethuku45@gmail.com" 
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
