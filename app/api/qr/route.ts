import { NextResponse } from "next/server";
import QRCode from "qrcode";
import { createHmac } from "crypto";

export async function GET() {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const secretKey = process.env.SECRET_KEY || "ChaveSuperSecreta123!@#";

    // Gera assinatura HMAC-SHA256
    const hmac = createHmac("sha256", secretKey);
    hmac.update(siteUrl);
    const signature = hmac.digest("base64url");

    // Monta o link assinado
    const secureLink = `${siteUrl}?sig=${signature}`;

    // Gera o QR Code como buffer PNG
    const qrCodeBuffer = await QRCode.toBuffer(secureLink, {
      width: 400,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    return new Response(new Uint8Array(qrCodeBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar QR Code:", error);
    return new NextResponse("Erro ao gerar QR Code", { status: 500 });
  }
}

