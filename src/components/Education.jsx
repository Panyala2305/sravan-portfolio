import { motion } from 'framer-motion'

const educationData = [
  {
    degree: "Master of Science, Applied Computer Science",
    university: "Southeast Missouri State University",
    duration: "May 2025",
    location: "MO, USA",
    logo: "/southeast.png"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-8 px-4">
      {/* Heading with icon */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="flex items-center justify-center mb-10 gap-3"
      >
        <span className="text-3xl">🎓</span>
        <h2 className="text-4xl font-bold text-white">Education</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }} 
            className="p-6 bg-[#131518] flex justify-between items-center flex-col md:flex-row border border-white/10 rounded-lg"
          >
            {/* Left: Degree + Duration */}
            <div className="text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-200">{edu.degree}</h3>
              <p className="text-md text-gray-400">{edu.duration}</p>
            </div>

            {/* Right: University Name + Logo + Location */}
            <div className="text-right flex flex-col items-end">
             
              <img 
                src={edu.logo} 
                alt={`${edu.university} logo`} 
                className="w-28 h-28 object-contain mt-2 mb-1"
              />
               <p className="text-xl font-medium text-gray-200">{edu.university}</p>
              <p className="text-md text-gray-400">{edu.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
