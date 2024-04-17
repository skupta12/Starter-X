import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { LinkButton, Button } from "@/components/Button";
import styles from "@/style";

const Home = () => {
  return (
    <section
      className={`lg:py-24 py-16 relative overflow-hidden border-b 
      border-black sm:h-auto h-[650px]`}
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="home-text lg:col-span-7 col-span-12">
            <h1 className={`${styles.heading1} mb-[16px]`}>
              The most <br className="md:block hidden" /> transparent &{" "}
              <br className="md:block hidden" /> secure banking ever
            </h1>
            <p className={`mb-[40px] max-w-[55ch] ${styles.paragraph}`}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Consectetur tortor nunc aliquam consectetur semper augue at.
            </p>
            <div className="sm:flex items-center gap-x-5">
              <Button href="/about" className={`sm:mb-0 mb-5 ${styles.blackButton}`} title="Get Started" />
              <LinkButton title="Learn more" />
            </div>
          </div>

          <div className="lg:col-span-5 col-span-12">{/* <Image /> */}</div>
        </div>
      </MaxWidthWrapper>

      <div className="absolute right-0 bottom-0">
        <img
          className="lg:w-full md:w-[350px] w-[200px] h-full -z-[1]"
          src="svg/home-image.svg"
          alt="home image"
        />
      </div>
    </section>
  );
};

export default Home;
