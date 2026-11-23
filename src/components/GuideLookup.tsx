"use client";
import React, { useState } from "react";
import { GuidePanel } from "./GuidePanel";
import type { GuideAnalysis } from "@/lib/guide";
export function GuideLookup() {
  const [q, setQ] = useState("GALP.LS"); const [data, setData] = useState<{ symbol: string; name: string; price: number; currency: string; candles: number; candleSource: string; guide: GuideAnalysis } | null>(null);
  const [busy, setBusy] = useState(false); const [err, setErr] = useState<string | null>(null);
  const run = async (s = q) => { setBusy(true); setErr(null); try { const r = await fetch(`/api/guide/${encodeURIComponent(s.trim().toUpperCase())}`); const j = await r.json(); if (!r.ok) throw new Error(j.error); setData(j); } catch (e: any) { setErr(e.message); } finally { setBusy(false); } };
  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
        <h1 className="text-2xl font-black text-white">📘 Método do Guia Prático — qualquer ação</h1>
        <p className="mt-1 text-xs text-slate-400">PER/PBV/ROE/DY vs concorrentes reais · tendência 6 meses (pontos de contacto) · suporte/resistência · velas · MM20/MM50 · ADX → MACD ou RSI · padrões · tabela-semáforo · stop/objetivo · justificação escrita.</p>
        <form onSubmit={e => { e.preventDefault(); run(); }} className="mt-4 flex gap-2"><input value={q} onChange={e => setQ(e.target.value)} placeholder="Ticker (EDP.LS, GALP.LS, BCP.LS, ITX.MC, SGO.PA, AAPL…)" className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 font-mono text-sm text-white focus:border-purple-500 focus:outline-none" /><button disabled={busy} className="rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-purple-500 disabled:opacity-50">{busy ? "A analisar…" : "Analisar"}</button></form>
        <div className="mt-2 flex flex-wrap gap-1.5">{["GALP.LS", "EDP.LS", "BCP.LS", "JMT.LS", "NOS.LS", "ITX.MC", "SGO.PA", "REP.MC", "SAP.DE", "ASML.AS"].map(s => <button key={s} onClick={() => { setQ(s); run(s); }} className="rounded-lg border border-slate-800 bg-slate-950 px-2 py-1 font-mono text-[11px] text-slate-300 hover:bg-slate-800">{s}</button>)}</div>
        {err && <div className="mt-3 rounded-xl border border-rose-800 bg-rose-950/40 p-3 text-xs text-rose-200">{err}</div>}
      </div>
      {data && <><div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-200"><strong className="text-white">{data.name}</strong> ({data.symbol}) · {data.price} {data.currency} · {data.candles} velas ({data.candleSource})</div><GuidePanel g={data.guide} symbol={data.symbol} currency={data.currency} /></>}
    </div>
  );
}
