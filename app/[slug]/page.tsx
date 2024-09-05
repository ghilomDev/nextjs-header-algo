export const dynamic = 'force-static';
export const dynamicParams = true;
import { Header } from "@/components/headers";
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


  // const requestInfo = {
  //   url: `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/6xa3DMHD1XxiPuhXQ8OP3a`,
  //   headers: {
  //     'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  //   },
  //   revalidate: 100
  // }




  // const res = await fetch(requestInfo.url, {
  //   headers: requestInfo.headers
  // })
  // const datas = await res.json();
  // console.log(datas) 
  // const linkedEntries = datas.fields.relatedEntries;

// const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/6xa3DMHD1XxiPuhXQ8OP3a?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&include=10`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log('Entry Data:', data);
//     if (data.includes && data.includes) {
//       const relatedEntries = data.includes;
//       console.log('Related Entries:', relatedEntries);
//     } else {
//       console.log('No related entries found or includes.Entry is undefined.');
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching entry:', error);
//   });

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