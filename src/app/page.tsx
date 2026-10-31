"use client";

import React from "react";
import { StandaloneChartAnalyzer } from "@/components/StandaloneChartAnalyzer";
import { Camera, TrendingUp, Sparkles, ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-lg shadow-purple-500/20 text-white">
              <Camera className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-white">
                  CHART<span className="text-purple-400">VISION</span> AI
                </span>
                <span className="rounded bg-purple-500/20 px-1.5 py-0.5 text-[10px] font-black text-purple-300 border border-purple-500/30">
                  SITE 2
                </span>
              </div>
              <span className="block text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
                ANALISADOR DE FOTOS DE GRÁFICOS • SOBE OU DESCE
              </span>
            </div>
          </div>

          <a
            href="https://github.com/penovo5601-png/SITE-FINAN-AS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-700 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition"
          >
            <span>Ver Site 1 (TickerLab)</span>
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </div>
      </header>

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
