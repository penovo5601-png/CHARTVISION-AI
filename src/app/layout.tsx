import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChartVision AI | Analisador de Fotos de Gráficos de Ações (Sobe ou Desce)",
  description: "Envia a foto do gráfico de qualquer ação e a Inteligência Artificial diz-te se vai subir ou descer com alvos de trade e stop loss.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" className="dark">
      <body className="bg-[#070b12] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
