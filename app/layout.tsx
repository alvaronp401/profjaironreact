import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Prof. Jairon Pinheiro | Educação Inclusiva, Neuropsicopedagogia e Formação Docente",
  description: "Professor Jairon Pinheiro — educador e neuropsicopedagogo clínico há 25 anos. Educação inclusiva, acolhimento de crianças neurodivergentes (TEA, TDAH), formação docente, palestras e projetos sociais no DF.",
  keywords: "Professor Jairon Pinheiro, neuropsicopedagogo, neuropsicopedagogia clínica, educação inclusiva, inclusão escolar, crianças neurodivergentes, TEA, TDAH, psicopedagogia DF, formação de professores, políticas públicas de educação, Secretaria de Educação do DF, Instituto IFI, palestras educação Brasília",
  openGraph: {
    title: "Prof. Jairon Pinheiro | Educação que transforma",
    description: "Educação inclusiva, neuropsicopedagogia e formação docente com acolhimento a crianças e famílias. Conheça o trabalho do Prof. Jairon Pinheiro.",
    url: "https://profjairon.com.br/",
    type: "website",
    siteName: "Prof. Jairon Pinheiro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Jairon Pinheiro | Educação que transforma",
    description: "Educação inclusiva, neuropsicopedagogia e formação docente no DF.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://profjairon.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Professor Jairon Pinheiro da Silva",
              alternateName: "Prof. Jairon Pinheiro",
              description: "Educador e neuropsicopedagogo clínico com 25 anos de atuação em educação inclusiva, formação docente e acolhimento de crianças neurodivergentes.",
              jobTitle: "Educador, Neuropsicopedagogo Clínico",
              affiliation: [
                { "@type": "Organization", name: "Secretaria de Educação do Distrito Federal" },
                { "@type": "Organization", name: "Instituto IFI" },
              ],
              knowsAbout: [
                "Educação inclusiva",
                "Neuropsicopedagogia",
                "Psicopedagogia",
                "TEA",
                "TDAH",
                "Formação de professores",
                "Políticas públicas de educação",
                "Análise do Comportamento",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brasília",
                addressRegion: "DF",
                addressCountry: "BR",
              },
              url: "https://profjairon.com.br/",
              sameAs: ["https://instagram.com/profjaironpinheiro"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

