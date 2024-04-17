import Footer from '@/components/Footer'
import Brands from '@/components/sections/Brands'
import Control from '@/components/sections/Control'
import Cta from '@/components/sections/Cta'
import Experience from '@/components/sections/Experience'
import Faq from '@/components/sections/Faq'
import Growth from '@/components/sections/Growth'
import Home from '@/components/sections/Home'
import Instruction from '@/components/sections/Instruction'
import Post from '@/components/sections/Post'
import Startup from '@/components/sections/Startup'
import Testimonial from '@/components/sections/Testimonial'

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
      <Cta />
      <Footer />
    </>
  )
}

export default page