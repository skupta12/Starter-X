"use client";

import Accordion from "@/components/Accordion";
import Button, { LinkButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OpacityTransition, { Ytransition } from "@/components/Transition";
import { accordion } from "@/lib/data";
import styles from "@/style";

const Experience = () => {
  return (
    <section className={`${styles.sectionPadding} bg-background-200`}>
      <MaxWidthWrapper>
        <OpacityTransition delay={0}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center pb-16">
            <div>
              <h2 className={styles.heading2}>
                We are the next gen banking experience
              </h2>
            </div>
            <div className="button-block sm:flex items-center lg:justify-self-end gap-x-5">
              <Button
              type="button"
                href="/pricing"
                className={`${styles.blackButton} sm:mb-0 mb-5`}
                title="Get Started"
              />
              <LinkButton type="button" title="Browse all features" />
            </div>
          </div>
        </OpacityTransition>
        <Ytransition delay={0.2} y={40}>
          <div className="accordion max-w-[820px] ml-auto">
            {accordion.map((item, index) => (
              <Accordion
                key={index}
                content={item.content}
                title={item.title}
                icon={item.icon}
                alt={item.alt}
              />
            ))}
          </div>
        </Ytransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
