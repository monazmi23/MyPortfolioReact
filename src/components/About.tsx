"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 sm:px-12 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black dark:text-white">
            About
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a Full Stack Programmer with expertise in cloud-based integrated systems 
              and website development. I design, develop, and maintain scalable web applications 
              that integrate seamlessly with APIs, databases, and third-party services.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My experience includes developing both frontend and backend components with clean, 
              efficient, and scalable code. I also have experience with AI integration and automation systems.
              I also have experience in OCR Systems and Automation Systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I collaborate in agile environments, participate in code reviews, and focus on 
              system testing, debugging, and troubleshooting to ensure robust and reliable 
              applications that meet business requirements.
            </p>
          </motion.div>

          {/* Right Column - Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Technologies I work with:
              </h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {["React", "HTML/CSS", "JavaScript", "Next.js"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "PHP", "Python", "Java", "RESTful APIs"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "NoSQL", "MongoDB", "Firebase"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["GitHub", "CI/CD", "Git", "AI Integration"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["OCR Systems", "Automation Systems", "Laravel"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
