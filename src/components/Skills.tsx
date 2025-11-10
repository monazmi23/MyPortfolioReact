"use client";

import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 92 },
  { name: "React", level: 90 },
  { name: "Responsive UI Design", level: 90 },
  // Backend
  { name: "Next.js", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "PHP", level: 85 },
  { name: "Laravel", level: 80 },
  // Databases
  { name: "MySQL", level: 88 },
  { name: "NoSQL", level: 85 },
  { name: "MongoDB", level: 83 },
  // APIs & Services
  { name: "RESTful APIs", level: 90 },
  // Additional
  { name: "AI Integration", level: 80 },
  { name: "OCR Systems", level: 75 },
  { name: "Automation Systems", level: 75 },
  { name: "AI Chatbots", level: 90 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 sm:px-12 bg-white dark:bg-black"
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
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A few technologies I&apos;ve been working with recently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-black dark:text-white font-medium">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                  className="h-full bg-black dark:bg-white"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
