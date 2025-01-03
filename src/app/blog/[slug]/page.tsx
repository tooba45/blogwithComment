 import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { fullBlog } from "@/sanity/lib/interface";



// export default async function BlogArticle( {params} : {params: {slug : string}}){
//   const data : fullBlog = await getData(params.slug);
//   console.log(data);

// return (
//   <div className="mt-6">
//     <h1>
//       <span className="block text-green-900  dark:text-stone-400 text-center text-primary font-semibold text-xl tracking-wide uppercase underline">
//         Tooba-Blog</span>
//         <span className="mt-2 block text-2xl text-center leading-8 font-bold tracking-tight  text-transparent bg-gradient-to-br from-pink-200
//          via-stone-700 to-blue-300 bg-clip-text
//         sm:text-4xl">{data.title}</span></h1>

//         <div className="flex justify-center"><Image
//         src={urlFor(data.titleImage).url()}
//         alt="Title Image"
//         width={800}
//         height={800}
//         priority
//         className=" rounded-lg flex mt-8 border"/></div>

//         <div className="mt-10 mx-8 items-center font-semibold ">
//            <PortableText value={data.content}/> 
//         </div>

//   </div>
// )
// }


async function getData( slug : string){
  const query = `
  *[_type == "blog" && slug.current == "${slug}"]{
  "currentSlug" : slug.current,
  title,
    content,
    titleImage
}[0]`;

const data = await client.fetch (query)
return data;
}

export default async function BlogArticle({params} : {params: {slug : string}}){
  const data : fullBlog = await getData(params.slug);
  console.log(data)

  return(
    <div className="mt-6">
         <h1>
           <span className="block text-green-900  dark:text-stone-400 text-center text-primary font-semibold text-xl tracking-wide uppercase underline">
             Tooba-Blog</span>
             <span className="mt-2 block text-xl text-center leading-8 font-bold tracking-tight  text-transparent bg-gradient-to-br from-pink-200
              via-stone-700 to-blue-300 bg-clip-text
             sm:text-4xl ">{data.title}</span></h1>
    
             <div className="flex justify-center"><Image
             src={urlFor(data.titleImage).url()}
             alt="Title Image"
             width={800}
             height={800}
             priority
             className=" rounded-lg flex mt-8 border"/></div>
    
         <div className="mt-10 mx-8 items-center font-semibold ">
            <PortableText value={data.content}/> 
             </div>
    
   </div>
    
  )
}

