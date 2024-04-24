import Post from "@/components/sections/blog/Post"
import Home from "@/components/sections/blog/Home";
import Subscribe from "@/components/sections/blog/Subscribe";

export default async function post() {

  return (
    <>
      <Home />
      <Subscribe />
      <Post />
    </>
  );
}
