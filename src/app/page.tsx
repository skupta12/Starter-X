import Brands from '@/components/sections/home-page/Brands'
import Control from '@/components/sections/home-page/Control'
import Experience from '@/components/sections/home-page/Experience'
import Faq from '@/components/sections/home-page/Faq'
import Growth from '@/components/sections/home-page/Growth'
import Home from '@/components/sections/home-page/Home'
import Instruction from '@/components/sections/home-page/Instruction'
import Post from '@/components/sections/home-page/Post'
import Startup from '@/components/sections/home-page/Startup'
import Testimonial from '@/components/sections/home-page/Testimonial'

const page = () => {
  return (
    <>
      <Home />
      <Brands />
      <Experience />
      <Growth />
      <Startup />
      <Control />
      <Instruction />
      <Testimonial />
      <Faq />
      <Post />
    </>
  )
}

export default page