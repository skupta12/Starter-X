"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import React from "react";
import FaqAccordion from "@/components/FaqAccordion";
import { faq } from "@/lib/data";
import OpacityTransition, { Ytransition } from "@/components/Transition";

const Faq = () => {
  return (
    <section className={`${styles.sectionPadding} bg-background-200`}>
      <MaxWidthWrapper>
        <OpacityTransition delay={0.2}>
          <div className={`text-center sm:mb-14 mb-10`}>
            <h2 className={styles.heading2}>
              Frequently Asked <br className="sm:block hidden" /> Questions
            </h2>
          </div>
        </OpacityTransition>

        <Ytransition y={60} delay={0.5}>
          <div className="accordion max-w-[1000px] mx-auto">
            {faq.map((item, index) => (
              <FaqAccordion
                key={index}
                content={item.content}
                title={item.title}
                number={item.number}
              />
            ))}
          </div>
        </Ytransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default Faq;
