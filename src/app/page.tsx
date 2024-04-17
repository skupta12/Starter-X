import Brands from '@/components/sections/home-sections/Brands'
import Control from '@/components/sections/home-sections/Control'
import Experience from '@/components/sections/home-sections/Experience'
import Faq from '@/components/sections/home-sections/Faq'
import Growth from '@/components/sections/home-sections/Growth'
import Home from '@/components/sections/home-sections/Home'
import Instruction from '@/components/sections/home-sections/Instruction'
import Post from '@/components/sections/home-sections/Post'
import Startup from '@/components/sections/home-sections/Startup'
import Testimonial from '@/components/sections/home-sections/Testimonial'

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