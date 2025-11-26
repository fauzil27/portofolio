import { getOrCreateVisitor } from "@/lib/service/visitor";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "0.0.0.0";
  const device = req.headers.get("user-agent") || "Unknown";

  const visitor = await getOrCreateVisitor(ip, device);

  return NextResponse.json({ success: true, visitor });
}
