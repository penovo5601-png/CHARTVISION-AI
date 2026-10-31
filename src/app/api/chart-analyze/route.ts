import { NextRequest, NextResponse } from "next/server";
import { analyzeChartImage } from "@/lib/chartVision";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imageBase64, symbolHint, userApiKey } = body;

    if (!imageBase64) {
      return NextResponse.json({ error: "Foto do gráfico não fornecida" }, { status: 400 });
    }

    const analysis = await analyzeChartImage(imageBase64, symbolHint, userApiKey);

    return NextResponse.json({
      success: true,
      analysis,
    });
  } catch (error: any) {
    console.error("Chart analysis API error:", error);
    return NextResponse.json(
      { error: "Erro ao processar imagem do gráfico", details: error?.message },
      { status: 500 }
    );
  }
}
