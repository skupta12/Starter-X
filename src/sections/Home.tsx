import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { LinkButton, Button } from "@/components/Button";
import styles from "@/style";

const Home = () => {
  return (
    <section
      className={`${styles.sectionPadding} relative overflow-hidden border-b 
      border-black sm:h-auto h-[650px]`}
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="home-text lg:col-span-7 col-span-12">
            <h1 className="mb-[16px] text-primary-100 lg:text-[66px] md:text-[42px] 
              text-[34px] font-medium leading-tight">
              The most <br className="md:block hidden" /> transparent &{" "}
              <br className="md:block hidden" /> secure banking ever
            </h1>
            <p className={`mb-[40px] max-w-[55ch] ${styles.paragraph}`}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Consectetur tortor nunc aliquam consectetur semper augue at.
            </p>
            <div>
              <Button className="sm:mr-5" title="Get Started" />
              <LinkButton className="sm:mt-0 mt-2" title="Learn more" />
            </div>
          </div>

          <div className="lg:col-span-5 col-span-12">{/* <Image /> */}</div>
        </div>
      </MaxWidthWrapper>

      <div className="absolute right-0 bottom-0 -z-[1]">
        <img
          className="lg:w-full md:w-[350px] w-[200px] h-full -z-[1]"
          src="home-image.svg"
          alt="home image"
        />
      </div>
    </section>
  );
};

export default Home;
