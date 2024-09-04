import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { contentfulClient } from "@/services/get-or-update";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("secret");
  const document = await request.json();
  const url_en = "/en-US/" + document.slug;
  const url_de = "/de-DE/" + document.slug;

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }
  console.log(`Revalidating`, document);


  const res = await contentfulClient.getEntries({
    content_type:document.contentType,
    "sys.id": document.ALL.sys.id,
    include: 3, // Level of nested references to include
  });
  const response = await contentfulClient.getEntries({
    content_type:document.contentType,
    "sys.id": document.ALL.sys.id,
    include: 3, // Level of nested references to include
  });
  console.log(res);
console.log("_________---------------------888888*************");
console.log(response);
  document?.entityId &&  revalidatePath(document?.entityId?.includes('home') ? "/home": `/${document?.entityId}`);
  return new Response(`Revalidating ${document}`, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

