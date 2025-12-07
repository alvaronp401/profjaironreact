"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FaHandPointRight, FaInstagram, FaWhatsapp, FaHandHoldingHeart } from "react-icons/fa";

export default function Home() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Prof. Jairon Pinheiro",
          text: "Conheça o projeto Educação que Transforma!",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Erro ao compartilhar:", err);
      }
    } else {
      alert("Seu navegador não suporta compartilhamento direto.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_1fr] gap-6 p-6 md:p-9 lg:p-12 flex-1 max-w-7xl mx-auto w-full">
        {/* COLUNA 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <h2 className="text-[#004aad] font-heading text-xl md:text-2xl mb-4">
            Saiba mais!
          </h2>
          <p className="text-gray-700 mb-5">
            Educador comprometido com a inclusão, o desenvolvimento humano e a
            conscientização, atuando com foco em práticas inovadoras de ensino e
            políticas públicas de acessibilidade.
          </p>

          <div className="flex flex-col md:block mt-5">
            {/* Mobile: mão apontando para baixo (sozinha) */}
            <div className="block md:hidden flex justify-center mb-2">
              <motion.div
                animate={{ 
                  y: [0, 6, 0],
                  rotate: 90
                }}
                initial={{ rotate: 90 }}
                className="text-[#e22626] text-3xl drop-shadow-md"
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHandPointRight />
              </motion.div>
            </div>
            
            {/* Mobile: botão centralizado */}
            <div className="block md:hidden flex justify-center">
              <Link href="/professor">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-gradient-to-r from-[#007bff] to-[#0056d2] text-white font-bold rounded-lg py-3 px-7 shadow-lg hover:shadow-xl"
                  >
                    Conheça o Professor
                  </Button>
                </motion.div>
              </Link>
            </div>
            
            {/* Desktop: container com mão e botão lado a lado, centralizado */}
            <div className="hidden md:flex justify-center items-center gap-2.5">
              {/* Desktop: mão apontando para direita, à esquerda do botão */}
              <motion.div
                animate={{ 
                  x: [0, 6, 0]
                }}
                className="text-[#e22626] text-3xl drop-shadow-md flex-shrink-0"
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHandPointRight />
              </motion.div>
              
              {/* Botão */}
              <Link href="/professor">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-gradient-to-r from-[#007bff] to-[#0056d2] text-white font-bold rounded-lg py-3 px-7 shadow-lg hover:shadow-xl"
                  >
                    Conheça o Professor
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* COLUNA 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center"
        >
          <h2 className="text-[#004aad] font-heading text-xl md:text-2xl mb-4">
            Mini Vlog
          </h2>
          <p className="text-gray-700 mb-5">
            Acompanhe reflexões sobre inclusão, cidadania e educação transformadora.
          </p>
          <Link
            href="https://instagram.com/profjaironpinheiro"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#e1306c] via-[#fd1d1d] to-[#f56040] text-white font-semibold rounded-lg py-3 px-6 mt-5 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <FaInstagram /> Ver no Instagram
          </Link>
        </motion.section>

        {/* COLUNA 3 */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col"
        >
          <Link href="#" className="block my-2.5 px-3 py-3 bg-[#004aad] text-white rounded-lg no-underline font-medium text-center transition-all hover:bg-[#e22626] hover:scale-105">
            Agenda <span className="text-xs opacity-90">– Em breve</span>
          </Link>
          <Link href="#" className="block my-2.5 px-3 py-3 bg-[#004aad] text-white rounded-lg no-underline font-medium text-center transition-all hover:bg-[#e22626] hover:scale-105">
            Palestras e Eventos <span className="text-xs opacity-90">– Em breve</span>
          </Link>
          <Link href="#" className="block my-2.5 px-3 py-3 bg-[#004aad] text-white rounded-lg no-underline font-medium text-center transition-all hover:bg-[#e22626] hover:scale-105">
            Sou Mãe Atípica <span className="text-xs opacity-90">– Em breve</span>
          </Link>
          <Link href="#" className="block my-2.5 px-3 py-3 bg-[#004aad] text-white rounded-lg no-underline font-medium text-center transition-all hover:bg-[#e22626] hover:scale-105">
            Espaço Professor <span className="text-xs opacity-90">– Em breve</span>
          </Link>

          <Link
            href="https://instagram.com/institutoifi"
            target="_blank"
            rel="noopener"
            className="block my-2.5 px-3 py-3 bg-[#e22626] text-white rounded-lg no-underline font-medium text-center transition-all hover:bg-[#b91c1c] hover:scale-105"
          >
            <FaHandHoldingHeart className="inline mr-2" /> Instituto IFI
          </Link>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfJgek950oOc52IQ71p3GBTO3AhSnCfjxjdb12J-WqmmnGdig/viewform?usp=dialog"
            target="_blank"
            rel="noopener"
            className="block my-2.5 px-3 py-3 bg-[#25d366] text-white rounded-lg no-underline font-semibold text-center transition-all hover:bg-[#1ebe5a] hover:scale-105 shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="inline mr-2" /> Seja um apoiador!
          </Link>

          <Button
            onClick={handleShare}
            variant="outline"
            className="desktop-only mt-2.5 bg-[#222] text-white border-none hover:bg-[#333] hover:scale-105 shadow-md"
          >
            📲 Compartilhar este site
          </Button>
        </motion.aside>
      </main>

      {/* QR CODE + BOTÃO MOBILE */}
      <div className="mobile-only">
        <div className="flex justify-center my-6">
          <Image
            src="/api/qr"
            alt="QR Code do site"
            width={180}
            height={180}
            className="rounded-xl"
          />
        </div>
        <div className="flex justify-center mb-8">
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-[90%] max-w-[340px] bg-[#222] text-white border-none hover:bg-[#333]"
          >
            📲 Compartilhar este site
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

