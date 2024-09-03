import { contentfulClient } from "../services/get-or-update"

// export default async function randomPages({ params }: { params: { slug: string } }) {
export default async function randomPages() {

   
  // const data = await contentfulClient.getEntries({
  //   content_type: "page",
  //   "fields.slug": params.slug
  // });
  // data.items.map((item) => {
  //   console.log(item.fields)
  // })
  return (
    <main className="flex items-center justify-center w-full h-screen m-auto">
      <div className="w-100 text-center ">
        <h1 >Random Page</h1>
        {/* <p > {params.slug}</p> */}
      </div>
    </main>
  )
}