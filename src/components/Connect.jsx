// LetsConnect.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const LetsConnect = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 ">
      <h2 className="text-4xl font-bold text-white mb-10">Let's Connect</h2>
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/sravan77/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-4xl transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sravansai-10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-black text-4xl transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:mailto:sravansaimethuku45@gmail.com"
          className="text-red-600 hover:text-red-800 text-4xl transition-transform transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </div>
      <div className="max-w-3xl py-6 text-md text-center sm:text-lg leading-relaxed">
        <p className="mb-2 font-semibold">Let's Build Something Amazing Together!</p>
        <p>
          I'm always excited to collaborate on innovative projects in AI, Machine Learning, and Software Engineering. Whether you're looking to brainstorm ideas, solve complex problems, or create impactful solutions, feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default LetsConnect;
