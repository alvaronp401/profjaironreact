"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function QRCodePage() {
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    setShowQR(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center p-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full text-center"
        >
          <h1 className="text-3xl font-heading text-[#004aad] mb-4">
            QR Code Seguro 🔒
          </h1>
          <p className="text-gray-700 mb-6">
            Geração automática com assinatura HMAC-SHA256
          </p>

          <Button
            onClick={handleGenerateQR}
            variant="default"
            size="lg"
            className="mb-6"
          >
            Gerar QR Code
          </Button>

          {showQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-5"
            >
              <Image
                src={`/api/qr?t=${Date.now()}`}
                alt="QR Code"
                width={400}
                height={400}
                className="mx-auto rounded-xl border-2 border-[#1E8A42] shadow-lg"
              />
            </motion.div>
          )}
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

