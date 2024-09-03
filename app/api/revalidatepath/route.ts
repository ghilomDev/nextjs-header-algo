import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

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
  revalidateTag('menu');
  return new Response(`Revalidating ${url_en} and ${url_de}`, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}


// "slug": {
//   "name": {
//     "en-US": "Home1"
//   },
//   "url": {
//     "en-US": "/home"
//   }
// },


// import contentfulClient from 'path-to-your-contentful-client';
// import { revalidateTag } from 'next/headers';

// export const revalidate = 60; // Optional, set the default revalidation time

// export default async function MyComponent() {
//   // Tag this page with 'menu' so it can be revalidated when necessary
//   revalidateTag('menu');

//   const data = await contentfulClient.getEntries({
//     content_type: "listMenu",
//     "fields.name": "Main Menu",
//   });

//   return (
//     <div>
//       <h1>Main Menu</h1>
//       <ul>
//         {data.items.map(item => (
//           <li key={item.sys.id}>{item.fields.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
