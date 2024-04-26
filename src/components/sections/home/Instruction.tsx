"use client"

import Button, { LinkButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { instruction } from "@/lib/data";
import styles from "@/style";
import { motion } from "framer-motion";

const Instruction = () => {
  return (
    <section
      className={`${styles.sectionPadding} bg-background-200 overflow-hidden`}
    >
      <motion.div
         initial={{ opacity: 0 }}
         transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
      >
      <div className="border-t lg:border-b border-primary-100">
        <MaxWidthWrapper>
          <div className="grid grid-cols-12 gap-4">
            <motion.div
                className="lg:col-span-6 col-span-12"
               initial={{ opacity: 0, y: 40 }}
               transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
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
            </motion.div>
          
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
      </motion.div>
     
    </section>
  );
};

export default Instruction;
