"use client";

import React from "react";
import { StandaloneChartAnalyzer } from "@/components/StandaloneChartAnalyzer";
import { SiteNav } from "@/components/SiteNav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      <SiteNav active="foto" />

      {/* Main Content */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <StandaloneChartAnalyzer />
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-black text-slate-300">CHARTVISION AI</span> — Analisador Visual Independente de Gráficos de Ações.
          </div>
          <div className="text-[11px] text-slate-500">
            Deteção de padrões de candlesticks, suportes e cálculo de risco/retorno para investidores em ações.
          </div>
        </div>
      </footer>
    </div>
  );
}
