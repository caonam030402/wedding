"use client";

import React, { useState } from "react";
import Image from "next/image";
import IntroPhoto from "@/public/photo_intro.jpg";
import Background from "@/public/images/bg_intro.png";
import DecorLeft from "@/public/images/decoLeft1.png";
import DecorRight from "@/public/images/decoRight1.png";
import { motion } from "motion/react";
import "../../../styles/envelope.css";

interface IntroProps {
  onComplete?: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      onComplete?.();
    }, 7500);
  };

  const handleKeyOpen = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="intro-container relative flex h-dvh flex-col items-center justify-center pb-14 pt-16 w-full"
    >
      <div className="intro-ambient" aria-hidden />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <motion.div
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-xl">Trân trọng kính mời</p>
          <p className="text-4xl font-pinyon-script">Bạn Nam</p>
        </motion.div>

        <div
          className={`envelope-wrapper ${isOpen ? "flap" : "animate-bounce"}`}
          onClick={handleOpen}
          onKeyDown={handleKeyOpen}
          role="button"
          tabIndex={0}
          aria-label="Open invitation"
        >
          <div className="envelope">
            <div className="letter">
              <Image
                src={IntroPhoto}
                alt="Intro Photo"
                width={100}
                height={100}
                className="w-full h-full"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              {isOpen && (
                <>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className={`heart-fly-out heart-${index + 1}`}
                    >
                      ❤️
                    </div>
                  ))}
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className={`heart-fly-out heart-${index + 1}`}
                    >
                      ❤️
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="envelope__seal-mark " />
        </div>
        <motion.p
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          Nhấn để mở thiệp
        </motion.p>
      </div>
      <Image
        src={DecorLeft}
        alt="Decor Left"
        width={150}
        height={150}
        className="absolute left-0 bottom-0"
      />
      <Image
        src={DecorRight}
        alt="Decor Right"
        width={150}
        height={150}
        className="absolute right-0 top-0"
      />
    </div>
  );
}
