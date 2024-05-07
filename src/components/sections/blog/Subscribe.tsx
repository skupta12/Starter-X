import { LinkButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Shape from "@/components/Shape";
import { socialLinks } from "@/lib/data";
import styles from "@/style";
import Triangle from "/public/svg/triangle.svg";
import Hexagon from "/public/svg/hexagon.svg";
import Square from "/public/svg/square.svg";

const Subscribe = () => {
  return (
    <section
      className={`${styles.sectionPadding} bg-primary-100 relative overflow-hidden`}
    >
      <Shape
        src={Triangle}
        className="lg:w-[250px] sm:w-[200px] w-[100px] lg:h-[250px] 
          h-[200px] -top-24 right-24 rotate-[70deg]"
        fill
        alt="triangle"
      />
      <Shape
        src={Hexagon}
        className="lg:w-[200px] sm:w-[300px] w-[100px] lg:h-[350px] 
          sm:h-[300px] h-[100px] top-20 sm:-right-36 -right-8 rotate-45"
        fill
        alt="hexagon"
      />
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-x-6 lg:gap-y-0 gap-y-10 items-center">
          <div className="lg:col-span-8 col-span-12 lg:pr-14">
            <div>
              <h2 className={`${styles.heading2} text-white mb-4`}>
                Subscribe to our newsletter
              </h2>
              <p className={`${styles.paragraph} text-white mb-7`}>
                Penatibus fames ligula nulla scelerisque luctus viverra risus
                mauris enim feugiat volutpat ut semper aliquam pellentesque non
                amet eu hac ut integer erat a augue odio.
              </p>
              <form
                className="relative inline-flex sm:w-[600px] w-full"
              >
                <input
                  maxLength={38}
                  placeholder="Email"
                  className="w-full outline-none sm:text-[18px] p-5 text-white placeholder:text-white 
                   bg-primary-100 border focus:text-white border-white"
                  type="text"
                />
                <div
                  className="bg-white absolute right-2 top-2 bottom-2 flex flex-col 
                justify-center px-8 hover:scale-95 hover:bg-primary-100 duration-300 border 
                border-transparent hover:border-white hover:text-white"
                >
                  <button className="font-medium sm:text-[18px]" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 relative">
            <Shape
              className="sm:w-[200px] w-[100px] sm:h-[200px] h-[100px] 
          sm:top-52 top-20 rotate-[20deg]"
              src={Square}
              fill
              alt="square"
            />
            <ul className="grid grid-cols-2 gap-6">
              {socialLinks.map((item, i) => (
                <li className="justify-self-center" key={i}>
                  <LinkButton type="button" className="text-white" title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Subscribe;
