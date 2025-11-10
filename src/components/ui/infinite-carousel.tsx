"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteCarouselProps {
  images: string[];
  className?: string;
  rows?: number;
}

export default function InfiniteCarousel({
  images,
  className,
  rows = 3,
}: InfiniteCarouselProps) {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  // Different speeds for each row to create parallax effect
  const speeds = [40, 50, 60, 45, 55];
  const directions = ["left", "right", "left", "right", "left"];

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Multiple rows scrolling at different speeds */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="flex gap-4"
          style={{
            height: `${100 / rows}%`,
          }}
          animate={{
            x: directions[rowIndex] === "left" 
              ? ["0%", "-33.33%"] 
              : ["-33.33%", "0%"],
          }}
          transition={{
            duration: speeds[rowIndex] || 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image}-${rowIndex}-${index}`}
              className="flex-shrink-0 w-48 sm:w-64 h-full opacity-30 dark:opacity-20"
            >
              <img
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
