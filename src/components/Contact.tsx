"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
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
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, 
                or opportunities to be part of your visions. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:mohdnazmi081@gmail.com"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>mohdnazmi081@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/monazmi23", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mohd-nazmi-norman-32ab41190/", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-black dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-black dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
