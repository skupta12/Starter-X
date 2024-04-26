"use client";

import Accordion from "@/components/Accordion";
import Button, { LinkButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { accordion } from "@/lib/data";
import styles from "@/style";
import { motion } from "framer-motion";

const Experience = () => {

  return (
    <section className={`${styles.sectionPadding} bg-background-200`}>
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center pb-16">
            <div>
              <h2 className={styles.heading2}>
                We are the next gen banking experience
              </h2>
            </div>
            <div className="button-block sm:flex items-center lg:justify-self-end gap-x-5">
              <Button
                href="/pricing"
                className={`${styles.blackButton} sm:mb-0 mb-5`}
                title="Get Started"
              />
              <LinkButton title="Browse all features" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="accordion max-w-[820px] ml-auto">
            {accordion.map((item, index) => (
              <Accordion
                key={index}
                content={item.content}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
