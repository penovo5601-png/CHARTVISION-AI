import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { PortfolioBuilder } from "@/components/PortfolioBuilder";
export const metadata: Metadata = { title: "Carteira Tática +6% em 2 meses · só ações · ChartVision AI" };
export default function Page() { return <div className="min-h-screen bg-[#070b12] text-slate-100"><SiteNav active="carteiras" /><main className="mx-auto max-w-7xl px-4 py-8 sm:px-6"><PortfolioBuilder /></main></div>; }
