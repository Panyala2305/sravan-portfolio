import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-52 h-52 md:w-72 md:h-72 flex-shrink-0">
          <img
            src="/profile.png"
            alt="Sravan Sai Methuku"
            className="w-full h-full rounded-lg object-cover border-4 border-gray-700 shadow-lg"
          />
        </div>

        
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I’m a results-driven Data Scientist & Machine Learning Engineer with
            4+ years of experience building real-world AI solutions across
            healthcare, finance, retail, and pharma. I blend statistical
            modeling with cloud-native machine learning to solve complex
            problems that matter.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <span className="font-semibold text-white">
              What I Bring to the Table:
            </span>
            <br />I develop and scale predictive systems using Python, SQL,
            PySpark, TensorFlow, and Scikit-learn, powering them through Azure
            (Synapse, Databricks, ML Studio), AWS (SageMaker, Glue), and GCP
            (BigQuery, Vertex AI). Whether working with structured claims data
            or unstructured text via BERT and spaCy, I engineer robust pipelines
            that deliver both accuracy and agility.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <span className="font-semibold text-white">
              Business Impact, Backed by Metrics:
            </span>
            <br />
            From reducing chronic disease treatment lag by 15%, to identifying
            $400K+ in fraud risk via autoencoder pipelines, and optimizing
            pricing strategy to boost revenue by 22%—my work translates data
            science into clear business value. I’ve streamlined workflows that
            saved over $250K in operational cost and automated retraining
            pipelines that reduced manual touchpoints by 30%.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Beyond the Code:</span>
            <br />I thrive at the intersection of experimentation and
            execution—breaking down ambiguous problems, leading cross-functional
            teams, and communicating insights to drive strategic decisions. I’m
            also passionate about mentoring, technical storytelling, and
            building systems that scale across teams and time zones.
          </p>
        </div>
      </div>

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
      </div>
    </section>
  );
}
