"use client";

import Image from "next/image";
import React, { useRef } from "react";
import ThankyouImage from "@/public/images/thankyou.jpg";
import { motion, useInView } from "motion/react";

export default function Thankyou() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="w-full h-[400px] relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full absolute inset-0 z-0"
      >
        <Image
          src={ThankyouImage}
          alt="Thankyou"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute top-0 left-0 w-full bg-linear-to-b from-black/80 to-transparent h-[50%] z-1" />

      <div className="text-white z-10 absolute text-center flex flex-col items-center h-full px-6 w-full pt-4">
        <motion.div
          className="text-4xl font-pinyon-script mb-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Thank You!
        </motion.div>
        <div className="w-full text-base leading-relaxed max-w-2xl">
          {"Cảm ơn bạn đã đến chung vui cùng chúng mình. Sự hiện diện của bạn là món quà ý nghĩa nhất trong ngày trọng đại này."
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.05,
                  delay: 1.2 + index * 0.04,
                }}
              >
                {char}
              </motion.span>
            ))}
        </div>
      </div>
    </div>
  );
}
