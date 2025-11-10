"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 sm:px-12 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Mohd. Nazmi. Built with Next.js.
          </p>

          <div className="flex items-center gap-6">
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
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
