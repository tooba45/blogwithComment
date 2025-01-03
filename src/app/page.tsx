import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { simpleBlogCard } from "@/sanity/lib/interface";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "./commentSection/page";


async function getData(){
  const query =
  `*[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug" : slug.current,
    titleImage
 }`;
const data = await client.fetch(query);
return data; 
};



export default async function Home() {
  const data : simpleBlogCard[] = await getData();

  console.log(data);
  return (
  <div className=" gap-10 mx-8 mt-5 shadow-2xl  grid lg:grid-cols-2 sm:grid-cols-1">
    {data.map((post, index)=>(
      <Card key={index} >
        
            <Image
              src={urlFor(post.titleImage).url()} // Call .url() to get the image URL
              alt="image" // Provide an alt attribute for accessibility
              width={500} // Set the width for the image
              height={500} // Set the height for the image
              layout="responsive"
              className="rounded-t-lg h-[250px] object-cover"
            />
       <CardContent className="mt-5">
        <h3 className="font-bold  bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-lg ">{post.title}</h3>
        <p className="line-clamp-2 text-sm dark:text-slate-500 text-purple-950">{post.smallDescription}</p>
        <Button asChild className="w-40 mt-7 bg-blue-500 hover:bg-pink-300 font-bold "><Link href={`/blog/${post.currentSlug}`}>Read More</Link></Button>
       </CardContent>

      </Card>
    ))}

<CommentSection/>
</div>

  
  );
}

