import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import React from "react";
import FaqAccordion from "@/components/FaqAccordion";
import { faq } from "@/lib/data";

const Faq = () => {
  return (
    <section className={`${styles.sectionPadding} bg-background-200`}>
      <MaxWidthWrapper>
        <div className={`${styles.heading2} text-center sm:mb-14 mb-10`}>
          <h2>
            Frequently Asked <br className="sm:block hidden" /> Questions
          </h2>
        </div>
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
      </MaxWidthWrapper>
    </section>
  );
};

export default Faq;
