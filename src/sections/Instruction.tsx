import Button, { LinkButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { instruction } from "@/lib/data";
import styles from "@/style";
import React from "react";

const Instruction = () => {
  return (
    <section className={`${styles.sectionPadding} bg-background-200`}>
      <div className="border-t border-b border-primary-100">
        <MaxWidthWrapper>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <div className="title mt-20 lg:pr-14 mb-14">
                <h2 className={styles.heading2}>
                  It has never been easier to manage your finances
                </h2>
              </div>
              <div className="sm:flex items-center gap-x-5">
                <Button className="sm:mb-0 mb-5" title="Get Started" />
                <LinkButton title="Learn more" />
              </div>
            </div>
            <div className="col-span-6 relative">
              {instruction.map(({ id, title, text }) => {
                return (
                  <ol key={id}>
                    <li className="py-[64px] px-[40px] border-l border-primary-100">
                      <h3
                        className={`${styles.heading3} mb-6`}
                      >{`${id}. ${title}`}</h3>
                      <p className={styles.paragraph}>{text}</p>
                    </li>
                  </ol>
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Instruction;
