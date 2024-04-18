import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import PostImage1 from "/public/post-image-1.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <section className={`lg:py-24 py-16`}>
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h1 className={`${styles.heading1} mx-auto mb-4`}>
            Articles & resources
          </h1>
          <p className={`${styles.paragraph} mx-auto max-w-[50ch]`}>
            Penatibus fames ligula nulla scelerisque luctus viverra risus mauris
            enim feugiat volutpat ut semper aliquam pellentesque non amet eu hac
            ut integer erat a augue odio.
          </p>
        </div>
        <div>
          <Link className="group flex flex-col border border-black" href="/">
            <div className="relative overflow-hidden md:h-[500px] sm:h-[350px] h-[300px]">
              <Image
                fill
                loading="eager"
                quality={100}
                className="object-cover group-hover:scale-110 duration-300"
                src={PostImage1}
                alt="post image 1"
              />
            </div>
            <div className="grid grid-cols-12 gap-5 lg:p-10 p-5 items-center group-hover:opacity-70 duration-300 border-t border-black">
              <div className="lg:col-span-8 col-span-12">
                <h3 className={`${styles.heading3}`}>
                  Is it smart to invest in cryptocurrency in 2025? What you need
                  to know
                </h3>
              </div>

              <div className="lg:col-span-4 col-span-12 lg:justify-self-end">
                <div className="sm:text-[18px] font-medium">
                  Business - &nbsp; Jun 26, 2024
                </div>
              </div>
            </div>
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Home;
