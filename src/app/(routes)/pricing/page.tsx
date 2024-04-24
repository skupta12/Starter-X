import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { faq, pricing } from "@/lib/data";
import styles from "@/style";
import React from "react";

export default function Pricing() {
  return (
    <>
    <section className="lg:py-24 py-16 bg-background-200">
      <MaxWidthWrapper>
        <div className="text-center mb-14 flex flex-col gap-y-5">
          <h1 className={`${styles.heading1}`}>Pricing</h1>
          <p className={`${styles.paragraph} mx-auto max-w-[50ch]`}>
            Malesuada duis ac posuere odio cras nibh amet blandit vitae senectus
            porttitor arcu volutpat ornare amet in porta volutpat odio venenatis
            tristique.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {pricing.map(({ id, title, text, listTitle, price, href }, i) => (
            <div className="lg:col-span-4 md:col-span-6 col-span-12 border border-primary-100" key={id}>
              <div
                className={`${
                  i === 1 ? "bg-primary-100" : ""
                } p-7 border-b border-primary-100`}
              >
                <h3
                  className={`${styles.heading3} mb-5 ${
                    i === 1 ? "text-white" : ""
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`${styles.paragraph} ${
                    i === 1 ? "text-white" : ""
                  }`}
                >
                  {text}
                </p>
              </div>
              <div className="p-7">
                <h4 className={`${styles.heading4} mb-7`}>
                  What&apos;s included
                </h4>
                <ul className={`list-disc list-inside flex flex-col gap-4 ${i === 1 ? "marker:text-orange-500" : ""}`}>
                  {listTitle.map((item, i) => (
                    <li
                      className={`sm:text-[18px] text-base leading-[1.6]`}
                      key={i}
                    >
                      {item.listText}
                    </li>
                  ))}
                </ul>
                <div className="md:text-[44px] 
                sm:text-[32px] text-[30px] font-medium my-5">
                  {price}
                </div>
                <Button
                  href={href}
                  className="sm:w-full border border-primary-100
                   hover:bg-primary-100 hover:text-white"
                  title="Get started"
                />
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    <section className={`${styles.sectionPadding} bg-white`}>
    <MaxWidthWrapper>
        <div className={`text-center sm:mb-14 mb-10`}>
          <h2 className={styles.heading2}>
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
    </>
  );
}
