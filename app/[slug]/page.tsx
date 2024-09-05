export const dynamic = 'force-static';
export const dynamicParams = true;
import { Header } from "@/components/headers";
import { contentfulClient } from "../../services/get-or-update"
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const data = await contentfulClient.getEntries({
    content_type: "page",
  });
  let title:any = "random pages" 
  data.items.map((item) => {
    title = item.fields.titlePage || 'unknow name';
  })
 
  return data.items.map((item) => ({
    slug: item.fields.slug,
  }))
}
export default async function randomPages({ params }: { params: { slug: string } }) {
  const data = await contentfulClient.getEntries({
    content_type: "page",
    "fields.slug": params.slug,
  });
  let title:any = "random pages" 
  data.items.map((item) => {
    title = item.fields.titlePage || 'unknow name';
  })
  
  return (
    <>
    <main className="flex items-center justify-center w-full h-screen m-auto">
      <div>
      <h1 className="block">title: {title}</h1>
      <p> slug: {params.slug}</p>
      </div>
    </main>
    </>
  )
}