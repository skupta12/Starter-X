import Post from "@/components/sections/blog-sections/Post"
import Home from "@/components/sections/blog-sections/Home";
import Subscribe from "@/components/sections/blog-sections/Subscribe";

export default async function post() {

  return (
    <>
      <Home />
      <Subscribe />
      <Post />
    </>
  );
}
