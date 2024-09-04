import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("secret");
  const document = await request.json();
  const url_en = "/en-US/" + document.slug;
  const url_de = "/de-DE/" + document.slug;

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }
  console.log(`Revalidating ${url_en} and ${url_de}`, document);

  revalidatePath(url_en.includes('home') ? "/": url_en);
  revalidatePath(url_de || "/");
  return new Response(`Revalidating ${url_en} and ${url_de}`, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    
  });
}

