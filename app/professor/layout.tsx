import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prof. Jairon Pinheiro | Conheça o Professor - Educação Inclusiva",
  description: "Conheça o Professor Jairon Pinheiro da Silva - educador e neuropsicopedagogo clínico com 25 anos de experiência em educação inclusiva, formação docente e acolhimento de crianças neurodivergentes (TEA, TDAH) no Distrito Federal.",
  keywords: "Professor Jairon Pinheiro, biografia professor, neuropsicopedagogo clínico, educação inclusiva DF, formação de professores, TEA TDAH Brasília, Secretaria de Educação DF, Instituto IFI, psicopedagogia clínica",
  openGraph: {
    title: "Prof. Jairon Pinheiro | Conheça o Professor",
    description: "Educador e neuropsicopedagogo clínico com 25 anos de experiência em educação inclusiva e formação docente.",
    url: "https://profjairon.com.br/professor",
    type: "profile",
  },
  alternates: {
    canonical: "https://profjairon.com.br/professor",
  },
};

export default function ProfessorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

