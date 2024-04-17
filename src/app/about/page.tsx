import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import AboutImage1 from "/public/about-image-1.jpg";
import AboutImage2 from "/public/about-image-2.jpg";
import Button, { LinkButton } from "@/components/Button";

export default function About() {
  return (
    <section className="lg:py-24 py-16">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 lg:gap-x-10 gap-x-5 items-center">
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
            <div className="border border-black relative overflow-hidden 
            sm:h-[400px] h-[300px] lg:mb-0 mb-5">
              <Image
                priority
                className="object-cover"
                fill
                src={AboutImage1}
                alt="about image 1"
              />
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12">
            <div className="border border-black sm:h-[400px] 
            h-[300px] relative overflow-hidden">
              <Image
                className="object-cover"
                fill
                src={AboutImage2}
                alt="about image 2"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
