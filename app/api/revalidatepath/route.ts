import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { contentfulClient } from "@/services/get-or-update";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("secret");
  const document = await request.json();
  const url_en = "/en-US/" + document.slug;
  const url_de = "/de-DE/" + document.slug;



    revalidateTag("NavHeader");

  console.log(`Revalidating`, document);
  document?.entityId &&  revalidatePath(document?.entityId?.includes('home') ? "/home": `/${document?.entityId}`);
  
  
  return new Response(`Revalidating ${document}`, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

