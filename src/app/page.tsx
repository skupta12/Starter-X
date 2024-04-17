import Brands from '@/components/sections/home/Brands'
import Control from '@/components/sections/home/Control'
import Experience from '@/components/sections/home/Experience'
import Faq from '@/components/sections/home/Faq'
import Growth from '@/components/sections/home/Growth'
import Home from '@/components/sections/home/Home'
import Instruction from '@/components/sections/home/Instruction'
import Post from '@/components/sections/home/Post'
import Startup from '@/components/sections/home/Startup'
import Testimonial from '@/components/sections/home/Testimonial'

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