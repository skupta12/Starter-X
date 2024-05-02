"use client";

import Button, { LinkButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OpacityTransition, { Ytransition } from "@/components/Transition";
import { instruction } from "@/lib/data";
import styles from "@/style";

const Instruction = () => {
  return (
    <section
      className={`${styles.sectionPadding} bg-background-200 overflow-hidden`}
    >
      <OpacityTransition delay={0.2}>
        <div className="border-t lg:border-b border-primary-100">
          <MaxWidthWrapper>
            <div className="grid grid-cols-12 gap-4">
              <Ytransition
                className="lg:col-span-6 col-span-12"
                y={40}
                delay={0.6}
              >
                <div className="title lg:mt-20 mt-10 lg:pr-14 sm:mb-14 mb-10">
                  <h2 className={styles.heading2}>
                    It has never been easier to manage your finances
                  </h2>
                </div>
                <div className="sm:flex items-center gap-x-5">
                  <Button
                    href="/pricing"
                    className={`${styles.blackButton} sm:mb-0 mb-5`}
                    title="Get Started"
                  />
                  <LinkButton title="Learn more" />
                </div>
              </Ytransition>

              <div className="lg:col-span-6 col-span-12">
                <ul className="relative">
                  {instruction.map(({ id, title, text }) => {
                    return (
                      <li
                        key={id}
                        className={`border-line lg:py-[64px] py-[40px] lg:px-[40px] lg:border-l border-primary-100 relative`}
                      >
                        <h3 className={`${styles.heading3} mb-6`}>
                          {`${id}. ${title}`}
                        </h3>
                        <p className={styles.paragraph}>{text}</p>
                        <div className="listt-before"></div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </OpacityTransition>
    </section>
  );
};

export default Instruction;
