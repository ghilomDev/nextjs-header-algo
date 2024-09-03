import { contentfulClient } from "../../services/get-or-update"

export default async function randomPages({ params }: { params: { slug: string } }) {
   
  const data = await contentfulClient.getEntries({
    content_type: "page",
    "fields.slug": params.slug
  });
  data.items.map((item) => {
    console.log(item.fields)
  })
  return (
    <main className="flex items-center justify-center w-full h-screen m-auto">
      <h1 className="block">Random Page</h1>
      <p>{params.slug}</p>
    </main>
  )
}