"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const titles = ["Full Stack Developer", "AI Developer"]

export default function AnimatedTitles() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative h-5 flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute font-semibold text-violet-600 dark:text-violet-400 text-xl lg:text-2xl"
        >
          {titles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
