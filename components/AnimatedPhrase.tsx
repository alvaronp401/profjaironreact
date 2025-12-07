"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const frases = [
  "Inclusão que abraça. Educação que transforma.",
  "Educação que transforma. Inclusão que abraça.",
];

export function AnimatedPhrase() {
  const [currentFrase, setCurrentFrase] = useState("");
  const [fraseIndex, setFraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const textoAtual = frases[fraseIndex];

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isDeleting) {
      if (currentFrase.length < textoAtual.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentFrase(textoAtual.substring(0, currentFrase.length + 1));
        }, 80);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentFrase.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setCurrentFrase(textoAtual.substring(0, currentFrase.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setFraseIndex((prev) => (prev + 1) % frases.length);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentFrase, fraseIndex, isDeleting]);

  // Encontra a frase mais longa para manter espaço fixo
  const fraseMaisLonga = frases.reduce((a, b) => a.length > b.length ? a : b);

  return (
    <div className="relative mt-2 w-full md:w-auto">
      {/* Texto invisível para manter o espaço e evitar balanço */}
      <span 
        className="invisible text-lg md:text-xl font-normal tracking-wide block text-center md:text-left"
        aria-hidden="true"
      >
        {fraseMaisLonga}
      </span>
      {/* Texto animado centralizado no mobile, alinhado à esquerda no desktop */}
      <motion.p
        id="frase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-0 left-0 right-0 text-lg md:text-xl font-normal text-gray-100 tracking-wide text-center md:text-left break-words overflow-hidden border-r-2 border-white/80 animate-pulse"
      >
        {currentFrase}
      </motion.p>
    </div>
  );
}

