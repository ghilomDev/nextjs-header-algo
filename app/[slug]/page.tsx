export const dynamic = 'auto';
export const dynamicParams = true;
import { contentfulClient } from "../../services/get-or-update"
export default async function randomPages({ params }: { params: { slug: string } }) {
    
  const data = await contentfulClient.getEntries({
    content_type: "page",
    "fields.slug": params.slug
  });
  let title:any = "random pages" 
  data.items.map((item) => {
    title = item.fields.titlePage || 'unknow name';
  })
  return (
    <main className="flex items-center justify-center w-full h-screen m-auto">
      <div>
      <h1 className="block">title: {title}</h1>
      <p> slug: {params.slug}</p>
      </div>
    </main>
  )
}