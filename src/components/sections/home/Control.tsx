"use client";

import { Button, LinkButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Shape } from "@/components/Shape";
import { socialLinks } from "@/lib/data";
import styles from "@/style";
import Square from "/public/svg/square.svg";
import Triangle from "/public/svg/triangle.svg";
import Hexagon from "/public/svg/hexagon.svg";
import OpacityTransition, { Ytransition } from "@/components/Transition";

const Control = () => {
  return (
    <>
      <section
        className={`${styles.sectionPadding} bg-neutral-400 overflow-hidden relative`}
      >
        <OpacityTransition delay={0.5}>
          <Shape
            src={Triangle}
            className="lg:w-[250px] sm:w-[200px] w-[100px] lg:h-[250px] 
          h-[200px] -top-24 right-24 rotate-[70deg]"
            fill
            alt="triangle"
          />
        </OpacityTransition>
        <OpacityTransition delay={0.7}>
          <Shape
            src={Hexagon}
            className="lg:w-[350px] sm:w-[300px] w-[100px] lg:h-[350px] 
          sm:h-[300px] h-[100px] top-20 sm:-right-36 -right-8 rotate-45"
            fill
            alt="hexagon"
          />
        </OpacityTransition>

        <MaxWidthWrapper>
          <Ytransition y={40} delay={0}>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-7 col-span-12">
                <h2 className={`${styles.heading2} text-white lg:mb-0 mb-5`}>
                  Take control of your finances. Create a free account today.
                </h2>
              </div>
              <div className="sm:flex items-center gap-x-5 lg:justify-self-end lg:col-span-5 col-span-12">
                <Button
                  type="button"
                  href="/pricing"
                  className={`${styles.whiteButton} sm:mb-0 mb-5`}
                  title="Get Started"
                />
                <LinkButton type="button" className="text-white" title="Learn more" />
              </div>
            </div>
          </Ytransition>
        </MaxWidthWrapper>
      </section>
      <section
        className="py-14 bg-neutral-400 border-t border-white 
      relative overflow-hidden"
      >
        <OpacityTransition delay={0.9}>
          <Shape
            className="sm:w-[200px] w-[100px] sm:h-[200px] h-[100px] 
          sm:top-16 top-32 sm:right-32 -right-10 rotate-[20deg]"
            src={Square}
            fill
            alt="square"
          />
        </OpacityTransition>

        <MaxWidthWrapper>
          <Ytransition y={40} delay={0.4}>
            <div className="grid grid-cols-12 text-center items-center gap-4">
              {socialLinks.map((socialLink) => (
                <div className="md:col-span-3 col-span-6" key={socialLink.id}>
                  <LinkButton type="button" className="text-white" title={socialLink.title} />
                </div>
              ))}
            </div>
          </Ytransition>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Control;
