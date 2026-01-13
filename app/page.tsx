"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Home from "@/components/pages/home";
import Intro2 from "@/components/pages/intro2/Intro2";

export default function Page() {
  const [showHome, setShowHome] = useState(false);

  const handleIntroComplete = () => {
    setShowHome(true);
  };

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AnimatePresence mode="wait">
        {!showHome && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Intro2 onComplete={handleIntroComplete} />
          </motion.div>
        )}

        {showHome && (
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
