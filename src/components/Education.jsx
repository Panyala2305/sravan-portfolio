import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Science, Applied Computer Science",
    university: "Southeast Missouri State University",
    duration: "May 2025",
    location: "MO, USA",
    logo: "/southeast.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-8 px-4">
      
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
            className="p-6 bg-[#131518] border border-white/10 rounded-lg space-y-4"
          >
            {/* Top row: Left (degree) and Right (university) */}
            <div className="flex justify-between items-center flex-col md:flex-row gap-6">
              {/* Left: Degree + Duration */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-200">
                  {edu.degree}
                </h3>
                <p className="text-md text-gray-400">{edu.duration}</p>
              </div>

              {/* Right: University Name + Logo + Location */}
              <div className="text-right flex flex-col items-end">
                <img
                  src={edu.logo}
                  alt={`${edu.university} logo`}
                  className="w-28 h-28 object-contain mt-2 mb-1"
                />
                <p className="text-xl font-medium text-gray-200">
                  {edu.university}
                </p>
                <p className="text-md text-gray-400">{edu.location}</p>
              </div>
            </div>

            {/* Bottom row: GPA and Coursework */}
            <div className="text-left space-y-2">
              <p className="text-md text-gray-300">
                <span className="font-semibold text-white">GPA:</span> 3.7 / 4.0
              </p>
              <p className="text-md text-gray-400">
                <span className="font-semibold text-white">
                  Relevant Coursework:&nbsp;
                </span>{" "}
                 Artificial Intelligence & Machine Learning, Deep Learning &
                Computer Vision, Natural Language Processing (NLP), Advanced
                Database Management Systems (SQL, NoSQL), Cloud Computing (AWS,
                Azure, GCP), Cybersecurity & Information Security, Applied Data
                Science (Capstone Project), Data Mining & Feature Engineering,
                Statistical Analysis & Hypothesis Testing, MLOps & Model
                Deployment, Big Data Processing with Spark, Data Visualization &
                Reporting.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
