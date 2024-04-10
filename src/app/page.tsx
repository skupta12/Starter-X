import Brands from '@/sections/Brands'
import Control from '@/sections/Control'
import Experience from '@/sections/Experience'
import Faq from '@/sections/Faq'
import Growth from '@/sections/Growth'
import Home from '@/sections/Home'
import Instruction from '@/sections/Instruction'
import Post from '@/sections/Post'
import Startup from '@/sections/Startup'
import Testimonial from '@/sections/Testimonial'

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