"use client";

import { Github, Linkedin, Mail, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // First, always fetch the current count to display it
        const getCountResponse = await fetch('/api/visitors');
        if (getCountResponse.ok) {
          const countData = await getCountResponse.json();
          setVisitorCount(countData.count || 0);
        }

        // Check if this is a new visitor (not visited in this session)
        const hasVisited = sessionStorage.getItem('hasVisited');
        const isNewVisitor = !hasVisited;

        if (isNewVisitor) {
          // Mark as visited for this session
          sessionStorage.setItem('hasVisited', 'true');
          
          // Increment visitor count
          const response = await fetch('/api/visitors', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isNewVisitor: true }),
          });
          
          if (response.ok) {
            const data = await response.json();
            setVisitorCount(data.count || 0);
          }
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
        // Try to get count even if tracking fails
        try {
          const response = await fetch('/api/visitors');
          if (response.ok) {
            const data = await response.json();
            setVisitorCount(data.count || 0);
          } else {
            // If API fails, set to 0 so it still displays
            setVisitorCount(0);
          }
        } catch (e) {
          console.error('Error fetching visitor count:', e);
          // Set to 0 so it still displays even on error
          setVisitorCount(0);
        }
      }
    };

    trackVisitor();
  }, []);

  return (
    <footer className="relative py-12 px-6 sm:px-12 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Mohd. Nazmi. Built with Next.js.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Eye className="w-4 h-4" />
              <span>
                {visitorCount !== null 
                  ? `${visitorCount.toLocaleString()} ${visitorCount === 1 ? 'visitor' : 'visitors'}`
                  : 'Loading...'}
              </span>
            </div>
          </div>

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
