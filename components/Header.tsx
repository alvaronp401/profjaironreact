"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedPhrase } from "./AnimatedPhrase";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-[#004aad] to-[#0076f7] text-white py-5 px-4 text-center shadow-lg relative">
      {/* QR Code no canto superior direito */}
      <div className="desktop-only absolute top-4 right-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/api/qr"
            alt="QR Code do site"
            width={160}
            height={160}
            className="rounded-xl shadow-lg transition-all hover:shadow-[0_0_20px_rgba(0,122,255,0.6)]"
          />
        </motion.div>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-8 relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-[#004aad] rounded-2xl p-4 flex items-center justify-center shadow-lg relative overflow-hidden max-w-[300px] aspect-square"
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-[25deg] w-1/2 shine-animation" 
          />
          <Image
            src="/img/logo.png"
            alt="Logo Prof. Jairon Pinheiro"
            width={360}
            height={360}
            className="w-[115%] max-w-[360px] object-contain relative z-10"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center p-2.5 text-center md:text-left w-full md:w-auto"
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl m-0 drop-shadow-md">
            Prof. Jairon Pinheiro
          </h1>
          <AnimatedPhrase />
        </motion.div>
      </div>
    </header>
  );
}

