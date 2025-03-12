"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
        "/image.png",
        "/pexels-fauxels-3184416.jpg",
        "/close-up-businessman-with-digital-tablet_1098-549.avif",
        "/pexels-rdne-7947657.jpg",
        "/man-working-night.jpg",
        "/man-working-night.jpg"
];

export default function AutoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  h-[1000px] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Slide"
          className="absolute  z-[-1] top-0 left-0  w-full h-full object-cover"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
}