import Post from "@/components/sections/blog-sections/Post"
import Home from "@/components/sections/blog-sections/Home";
import { Suspense } from "react";
import SkeletonItem from "@/components/Skeleton";



export default async function post() {

  return (
    <>
      <Home />
      {/* <Subscribe /> */}
       <Suspense fallback={<div>Loading...</div>}> {/*weird behavior after reload the page */}
        <Post />
      </Suspense>
   
    </>
  );
}
