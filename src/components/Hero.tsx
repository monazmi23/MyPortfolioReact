"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import InfiniteCarousel from "@/components/ui/infinite-carousel";

// Images from public folder - Next.js serves them from root
const heroImages = [
  "/images/photo1.png",
  "/images/photo2.png",
  "/images/photo3.png",
  "/images/photo4.png",
  "/images/photo5.png",
  "/images/photo6.png",
  "/images/photo7.png",
  "/images/photo8.png",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 sm:px-12 bg-white dark:bg-transparent overflow-hidden"
    >
      {/* Infinite Carousel Background */}
      <InfiniteCarousel
        images={heroImages}
        rows={3}
        className="z-0"
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/0 dark:from-black/0 dark:via-black/0 dark:to-black/0 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full py-20">
        <div className="space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono text-gray-600 dark:text-gray-400"
          >
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-black dark:text-white">Hello, I&apos;m</span>
            <br />
            <span className="text-blue-400 dark:text-blue-400">Mohd. Nazmi</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-light max-w-2xl"
          >
            Full Stack Programmer specializing in Web-Based Systems & Website Development.
            <br />
            <span className="text-gray-500 dark:text-gray-500">
              Building scalable web applications with modern web technologies.
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          >
          Designing, developing, and maintaining web-based integrated systems.<br />
          Expert in full stack development, API integration, and web deployment.
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              Get in Touch
            </a>
            <div className="flex gap-4 ml-4">
              {[
                { icon: Github, href: "https://github.com/monazmi23", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mohd-nazmi-norman-32ab41190/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:mohdnazmi081@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
