import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { GuideLookup } from "@/components/GuideLookup";
export const metadata: Metadata = { title: "Método do Guia · semáforo, concorrentes, tendência · ChartVision AI" };
export default function Page() { return <div className="min-h-screen bg-[#070b12] text-slate-100"><SiteNav active="guia" /><main className="mx-auto max-w-7xl px-4 py-8 sm:px-6"><GuideLookup /></main></div>; }
