import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa' 

const experienceData = [
  {
    role: "Data Scientist/ML Engineer",
    company: "Anheuser-Busch InBev",
    duration: "Aug 2024 - Present",
    location: "Hyderabad, India",
    logo: "/abinbev.svg",
    description: "Developed and maintained user-facing features using React.js and TailwindCSS. Collaborated with designers to create responsive web apps."
  },
  {
    role: "Data Scientist",
    company: "Centene Corporation",
    duration: "Dec 2023 - May 2024",
    location: "Bangalore, India",
    logo: "/centene.svg",
    description: "Built internal tools and dashboards. Improved web performance and accessibility across multiple products."
  },
  {
    role: "Data Scientist",
    company: "Glenmark Pharmaceuticals",
    duration: "Sep 2022 - Aug 2023",
    location: "Bangalore, India",
    logo: "/glenmark.svg",
    description: "Built internal tools and dashboards. Improved web performance and accessibility across multiple products."
  },
  {
    role: "Data Scientist",
    company: "American Express",
    duration: "Mar 2021 - Aug 2022",
    location: "Bangalore, India",
    logo: "/americax.svg",
    description: "Built internal tools and dashboards. Improved web performance and accessibility across multiple products."
  }
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-8 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="flex items-center justify-center mb-10 gap-4"
      >
        <FaBriefcase className="text-white text-3xl" />
        <h2 className="text-4xl font-bold text-white">Work Experience</h2>
      </motion.div>
      
      <div className="max-w-4xl mx-auto space-y-4">
        {experienceData.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }} 
            className="p-6 bg-[#242424] flex justify-between items-center flex-col md:flex-row border border-white/10 rounded-lg"
          >
            {/* Left: Role + Duration */}
            <div className="text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-100">{exp.role}</h3>
              <p className="text-md text-gray-400">{exp.duration}</p>
            </div>

            {/* Right: Company + Logo + Location */}
            <div className="text-right flex flex-col items-end">
              
              <img 
                src={exp.logo} 
                alt={`${exp.company} logo`} 
                className="w-20 h-20 object-contain mt-2 mb-1"
              />
              <p className="text-xl font-medium text-gray-200">{exp.company}</p>
              <p className="text-md text-gray-400">{exp.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
