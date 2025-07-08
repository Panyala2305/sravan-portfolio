import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "CNN-Feature Engineering Predictive Modelling - Hybrid Approach",
    description:
      "To address the global challenge of tuberculosis diagnosis, I developed a scalable ML pipeline for automated tuberculosis detection from chest X-rays using pretrained ResNet50 and classical classifiers with hyperparameter tuning, achieving 99% validation and 95% test accuracy. SHAP-based explainability ensures transparency and trust in model predictions. Deployed via a scalable API, the solution boosts screening speed, reduces costs, and improves patient outcomes.",
    imageUrl: "/project2.png",
    link: "https://github.com/sravansai-10/cnn-feature-engineering-predictive-modelling",
  },
  {
    id: 2,
    title: "Breast-Cancer-Prediction",
    description:
      "Built an end-to-end pipeline on the Breast Cancer Wisconsin dataset, cleaning and scaling features, then benchmarking classifiers (Logistic Regression, SVM, RF, XGBoost, MLP), achieving ~98% accuracy and 0.99 ROC-AUC. SHAP analysis highlighted radius-mean and texture-SE as key malignancy indicators. Deployed via a Streamlit app to enable instant, clinician-friendly predictions and reduce unnecessary biopsies.",
    imageUrl: "/project1.png",
    link: "https://github.com/sravansai-10/Breast-Cancer-Prediction",
  },
  {
    id: 3,
    title:
      "Audio Feature Extraction & Rhythm Classification using Python + Librosa",
    description:
      "Developed an audio analysis system using Librosa to extract rhythm features (tempo, beats, pitch, spectrograms) from MP3 files for tasks like music classification and emotion detection. Automates audio processing to reduce manual effort while being cost-effective and scalable. Built with Python and open-source tools, showcasing my ability to convert raw audio into actionable insights for real-world AI applications.",
    imageUrl: "/project3.png",
    link: "https://github.com/sravansai-10/Audio-Feature-Extraction",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center mb-12 gap-4"
      >
        <FaLaptopCode className="text-white text-3xl" />
        <h2 className="text-4xl font-bold text-white">Projects</h2>
      </motion.div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-black rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.2 }} >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            >
              Know More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
