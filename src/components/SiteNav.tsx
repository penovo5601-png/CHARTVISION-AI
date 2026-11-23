import Link from "next/link";
import { Camera, Briefcase, BookOpen } from "lucide-react";
export function SiteNav({ active }: { active: "foto" | "carteiras" | "guia" }) {
  const cls = (k: string) => `flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition ${active === k ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30" : "text-slate-300 hover:bg-slate-800/60 hover:text-white"}`;
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white"><Camera className="h-5 w-5" /></div><div><div className="text-lg font-black text-white">CHART<span className="text-purple-400">VISION</span> AI</div><div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">SÓ AÇÕES · FOTO · GUIA · CARTEIRA TÁTICA</div></div></Link>
        <nav className="flex flex-wrap gap-1.5">
          <Link href="/" className={cls("foto")}><Camera className="h-4 w-4" /> Foto do gráfico</Link>
          <Link href="/guia" className={cls("guia")}><BookOpen className="h-4 w-4" /> Método do Guia</Link>
          <Link href="/carteiras" className={cls("carteiras")}><Briefcase className="h-4 w-4" /> Carteira Tática +6%</Link>
        </nav>
      </div>
    </header>
  );
}
