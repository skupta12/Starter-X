import { Button, LinkButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import AboutImage1 from "/public/about-image-1.jpg";
import AboutImage2 from "/public/about-image-2.jpg";
import styles from "@/style";
import { numbers } from "@/lib/data";

const Home = () => {
  return (
    <section className="lg:py-24 py-16">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 lg:gap-x-10 gap-x-5 items-center mb-20">
          <div className="lg:col-span-7 col-span-12">
            <div className="text">
              <h1 className={styles.heading1}>About our wonderful company</h1>
              <p className={`${styles.paragraph} mt-4 mb-7`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="sm:flex items-center gap-x-5 mb-16">
              <Button
                className={`sm:mb-0 mb-5 ${styles.blackButton}`}
                title="Get Started"
              />
              <LinkButton title="Learn more" />
            </div>
            <div
              className="relative overflow-hidden 
            sm:h-[400px] h-[300px] lg:mb-0 mb-5 border border-black"
            >
              <Image
                loading="eager"
                className="object-cover"
                fill
                sizes="(min-width: 1460px) 693px, (min-width: 1040px) 49.5vw, 
                (min-width: 780px) calc(100vw - 114px), calc(100vw - 34px)"
                src={AboutImage1}
                alt="about image 1"
              />
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12">
            <div
              className="sm:h-[400px] border border-black
            h-[300px] relative overflow-hidden"
            >
              <Image
                className="object-cover"
                fill
                sizes="(min-width: 1460px) 483px, (min-width: 1040px) calc(35.5vw - 28px), 
                (min-width: 780px) calc(100vw - 114px), calc(100vw - 34px)"
                src={AboutImage2}
                alt="about image 2"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:gap-x-16 gap-x-6 gap-y-10">
          {numbers.map(({ id, title, number, icon: Icon, color }) => {
            return (
              <div key={id} className="lg:col-span-3 md:col-span-6 col-span-12">
                <div
                  className="flex items-center lg:text-[56px] md:text-[48px] 
                      sm:text-[36px] text-[32px] font-medium leading-[1]"
                >
                  {number}{" "}
                  <Icon
                    size={19}
                    absoluteStrokeWidth
                    className="lg:w-[50px] w-[30px] lg:h-[50px] h-[30px]"
                    style={{ color: color }}
                  />
                </div>
                <p className="sm:text-[18px] text-gray-600 mt-2">{title}</p>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Home;
