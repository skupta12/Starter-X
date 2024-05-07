"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { LinkButton, Button } from "@/components/Button";
import styles from "@/style";
import OpacityTransition, { Ytransition } from "@/components/Transition";

const Home = () => {
  return (
    <section
      className={`lg:py-24 py-16 relative overflow-hidden border-b 
      border-primary-100 sm:h-auto h-[650px]`}
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-4 items-center">
          <Ytransition className="lg:col-span-7 col-span-12" y={40}>
              <h1 className={`${styles.heading1} mb-[16px]`}>
                The most <br className="md:block hidden" /> transparent &{" "}
                <br className="md:block hidden" /> secure banking ever
              </h1>
              <p className={`mb-[40px] max-w-[55ch] ${styles.paragraph}`}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Consectetur tortor nunc aliquam consectetur semper augue at.
              </p>
              <div className="sm:flex items-center gap-x-5">
                <Button
                  type="button"
                  href="/pricing"
                  className={`sm:mb-0 mb-5 ${styles.blackButton}`}
                  title="Get Started"
                />
                <LinkButton type="button" title="Learn more" />
              </div>
          </Ytransition>
        

          <div className="lg:col-span-5 col-span-12">{/* <Image /> */}</div>
        </div>
      </MaxWidthWrapper>

      <OpacityTransition
          delay={0.2}
          className="absolute right-0 bottom-0"
        >
          <img
            className="lg:w-full md:w-[350px] w-[200px] h-full -z-[1]"
            src="svg/home-image.svg"
            alt="home image"
          />
        </OpacityTransition>
    </section>
  );
};

export default Home;
