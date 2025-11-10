"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MyHealthPal: Personalized Health Tracking System",
    description: "A web application that allows users to track their health and fitness goals. It includes a dashboard, a calendar, a food diary, and a workout tracker. It also has a reminder system to help users stay on track through email notifications.",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    github: "https://github.com/monazmi23/myhealthpal",
    live: "https://example.com",
  },
  {
    title: "OCR System: Automated Document Processing",
    description: "An OCR system that allows users to upload documents and extract text automatically. It includes a document scanner, a text extractor, and a document storage system.",
    tech: ["Python", "Flask", "OpenCV", "Google OCR", "MySQL"],
    github: "https://github.com/monazmi23",
    live: "https://example.com",
  },
  {
    title: "My Lucky Mall: E-commerce Website",
    description: "An e-commerce website that allows users to buy and sell products. It includes a shopping cart, a checkout process, and a payment gateway.",
    tech: ["Flutter", "Dart", "Firebase", "MySQL", "Figma"],
    github: "https://github.com/monazmi23",
    live: "https://example.com",
  },
  {
    title: "AI Chatbot for property management",
    description: "An AI chatbot that allows users to manage their property. It includes a chat interface, a knowledge base, and a chatbot engine.",
    tech: ["Html, CSS, JavaScript, OpenAI API"],
    github: "https://github.com/monazmi23",
    live: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Some things I&apos;ve built. More on{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              GitHub
            </a>
            .
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-l-4 border-black dark:border-white pl-6 py-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-600 dark:text-gray-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
