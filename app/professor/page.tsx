"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";

export default function ProfessorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Botão Voltar - Desktop: entre header e conteúdo, Mobile: antes do conteúdo */}
      <nav className="flex justify-center items-center gap-3 mt-8 md:mt-12 mb-2 md:mb-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#004aad] text-white font-semibold py-3 px-6 rounded-lg no-underline transition-all hover:bg-[#003380] hover:-translate-y-0.5 gap-2 shadow-md"
        >
          <FaArrowLeft /> Voltar ao início
        </Link>
      </nav>

      <main className="flex flex-col gap-9 p-6 md:p-10 lg:p-20 max-w-7xl mx-auto w-full">
        {/* PERFIL */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Image
              src="/img/professor-foto.jpg"
              alt="Foto do Professor Jairon Pinheiro"
              width={200}
              height={200}
              className="rounded-2xl shadow-md w-[180px] md:w-[200px] mx-auto md:mx-0 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="mb-4 text-gray-700">
                O <strong>Professor <span className="text-[#004aad]">Jairon Pinheiro da Silva</span></strong> é um
                <strong> educador</strong> e <strong>neuropsicopedagogo clínico</strong> especialista cuja trajetória
                inspira respeito, sensibilidade e compromisso social.
              </p>
              <p className="mb-4 text-gray-700">
                Maranhense de nascimento e brasiliense de coração há mais de 20 anos, construiu uma
                carreira marcada pela <strong>dedicação à educação pública</strong>, à
                <strong> formação docente</strong> e ao <strong>acolhimento de crianças e famílias</strong> em vulnerabilidade social.
              </p>
              <p className="mb-4 text-gray-700">
                Formado em <strong>Letras</strong> e <strong>Pedagogia</strong>, com especialização em
                <strong> Educação Especial</strong> e <strong>Análise do Comportamento</strong>, é
                <strong> mestre em Ética</strong> e <strong>doutorando em Ciências da Reabilitação</strong>.
              </p>
              <p className="text-gray-700">
                Atua há <strong>25 anos na docência</strong>, sendo professor da <strong>Secretaria de Educação do Distrito Federal</strong>,
                gestor educacional e professor de pós-graduação no <strong>Instituto IFI</strong>, onde também coordena cursos e projetos
                voltados à <strong>neurociência</strong> e à <strong>educação inclusiva</strong>.
              </p>
            </div>
          </div>
        </motion.section>

        {/* VÍDEO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-md text-center max-w-[1800px] mx-auto"
        >
          <h3 className="m-0 mb-4 font-heading text-xl text-[#0b4aa9]">
            Assista ao vídeo:
          </h3>
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/56un5KoP8J4?rel=0&modestbranding=1&playsinline=1"
              title="Professor Jairon Pinheiro — Educar com propósito e afeto"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full border-0 block"
            />
          </div>
        </motion.section>

        {/* TRAJETÓRIA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <h2 className="text-[#004aad] font-heading text-2xl md:text-3xl mb-4">
            Educar com propósito e afeto
          </h2>
          <p className="mb-4 text-gray-700">
            Mais do que um especialista, Jairon é um <strong>educador por vocação</strong> e um
            <strong> terapeuta por empatia</strong>. Ele acredita que a <strong>educação</strong> é a maior
            ferramenta de transformação humana e social, capaz de romper ciclos de exclusão e abrir caminhos
            para o desenvolvimento integral.
          </p>
          <p className="text-gray-700">
            Seu trabalho une <strong>ciência</strong>, <strong>emoção</strong> e <strong>humanidade</strong>,
            refletindo o compromisso de formar professores, orientar famílias e acolher crianças
            <strong> neurodivergentes</strong>, com destaque para casos de <strong>TEA</strong>,
            <strong> TDAH</strong> e <strong>dificuldades de aprendizagem</strong>.
          </p>
        </motion.section>

        {/* AÇÕES E PROJETOS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <h2 className="text-[#004aad] font-heading text-2xl md:text-3xl mb-6">
            Ações e projetos que transformam realidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center items-start mt-6 mb-4">
            <figure className="flex flex-col items-center text-center w-full max-w-[340px]">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/img/palestra1.jpg"
                  alt="Foto de palestra 1"
                  width={340}
                  height={255}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-base text-gray-800 leading-relaxed max-w-[300px]">
                <strong>Bolsas Sociais de Pós-Graduação</strong> – Mais de <strong>80 profissionais</strong> beneficiados com formação em <strong>neuropsicopedagogia</strong> e <strong>práticas inclusivas</strong>.
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center text-center w-full max-w-[340px]">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/img/palestra2.jpg"
                  alt="Foto de palestra 2"
                  width={340}
                  height={255}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-base text-gray-800 leading-relaxed max-w-[300px]">
                <strong>Palestras Gratuitas e Formações</strong> – Capacitação de educadores e famílias em escolas públicas e creches do DF.
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center text-center w-full max-w-[340px]">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/img/palestra3.jpg"
                  alt="Foto de palestra 3"
                  width={340}
                  height={255}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-base text-gray-800 leading-relaxed max-w-[300px]">
                <strong>Atendimento Psicopedagógico Social</strong> – Acolhimento de crianças e famílias com valores acessíveis ou gratuitos, priorizando o cuidado humano e o fortalecimento emocional.
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* COMPROMISSO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <h2 className="text-[#004aad] font-heading text-2xl md:text-3xl mb-6">
            Compromisso e causa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center items-start mt-6 mb-4">
            <figure className="flex flex-col items-center text-center w-full max-w-[340px]">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/img/atendimento1.jpg"
                  alt="Atendimento clínico 1"
                  width={340}
                  height={255}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-base text-gray-800 leading-relaxed max-w-[300px]">
                Com uma visão humanizada e baseada em evidências, o Professor Jairon luta por <strong>políticas públicas sustentáveis e inclusivas</strong>, que garantam o atendimento multidisciplinar dentro das escolas e o apoio real aos professores e famílias.
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center text-center w-full max-w-[340px]">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/img/atendimento2.jpg"
                  alt="Atendimento clínico 2"
                  width={340}
                  height={255}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-base text-gray-800 leading-relaxed max-w-[300px]">
                Ele reconhece os desafios enfrentados diariamente pelos docentes e propõe <strong>modelos de acolhimento pedagógico</strong> fundamentados na ciência, beneficiando tanto <strong>crianças neurodivergentes</strong> quanto <strong>típicas</strong>, fortalecendo o aprendizado e a convivência escolar.
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center text-center w-full max-w-[340px]">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src="/img/atendimento3.jpg"
                  alt="Atendimento clínico 3"
                  width={340}
                  height={255}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-base text-gray-800 leading-relaxed max-w-[300px]">
                Ações que fortalecem o vínculo entre escolas, famílias e comunidades, promovendo inclusão real e empatia.
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* MENSAGEM FINAL */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <h3 className="text-[#004aad] font-heading text-xl md:text-2xl mb-4">
            🌱 Mensagem de acolhimento
          </h3>
          <blockquote className="italic text-[#004aad] bg-[#e8f0ff] py-4 px-5 border-l-4 border-[#004aad] rounded-lg text-lg shadow-sm">
            "Acredito na força da educação que acolhe, ensina e transforma.
            Cada criança tem um potencial único, e nosso papel é ajudá-la a florescer."
          </blockquote>
        </motion.section>

        {/* BOTÃO SEJA UM APOIADOR */}
        <div className="text-center my-4">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfJgek950oOc52IQ71p3GBTO3AhSnCfjxjdb12J-WqmmnGdig/viewform?usp=dialog"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center bg-[#25d366] text-white py-3.5 px-7 font-semibold text-lg rounded-xl no-underline transition-all hover:bg-[#1ebe5b] hover:scale-105 shadow-md hover:shadow-lg gap-2.5"
          >
            <FaWhatsapp /> Seja um apoiador!
          </Link>
        </div>

        {/* NAV INFERIOR */}
        <nav className="flex justify-center items-center gap-3 my-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#004aad] text-white font-semibold py-3 px-6 rounded-lg no-underline transition-all hover:bg-[#003380] hover:-translate-y-0.5 gap-2 shadow-md"
          >
            <FaArrowLeft /> Voltar ao início
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}

