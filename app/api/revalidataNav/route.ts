import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { contentfulClient } from "@/services/get-or-update";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("secret");
  const document = await request.json();

    revalidateTag("NavHeader");
  return new Response(`Revalidating ${document}`, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

