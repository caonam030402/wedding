import Image from "next/image";
import React, { useRef } from "react";
import RomanticHeroImage from "@/public/images/image2.jpg";
import { motion, useInView } from "motion/react";

export default function RomanticHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="relative" ref={ref}>
      <motion.div
        className="text-4xl font-pinyon-script text-white absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        All of me loves <br /> all of you
      </motion.div>
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={RomanticHeroImage}
          alt="Romantic Hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-[-13%] right-1/2 translate-x-1/2 w-24 z-20"
      >
        <Image
          src="https://w.ladicdn.com/s450x500/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0002_32-20251010170122-ijn7k.png"
          alt="Romantic Hero"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
