"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import GrowthImage1 from "/public/growth-image-1.jpg";
import GrowthImage2 from "/public/growth-image-2.jpg";
import { numbers } from "@/lib/data";
import styles from "@/style";
import { motion } from "framer-motion";

const Growth = () => {
  return (
    <section className={`bg-white ${styles.sectionPadding}`}>
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-12 lg:gap-x-10 gap-x-5 gap-y-10">
          <motion.div
            className="col-span-6 lg:order-1 order-2"
            initial={{ y: 30, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="sm:mb-14 mb-10 border border-primary-100">
              <Image
                className="w-full"
                width={588}
                height={550}
                src={GrowthImage1}
                alt="growth image"
              />
            </div>
            <div className="numbers-block grid grid-cols-12 gap-y-10 gap-x-5">
              {numbers.map(({ id, title, number, icon: Icon, color }) => {
                return (
                  <div key={id} className="col-span-6">
                    <div
                      className="flex items-center lg:text-[56px] md:text-[48px] 
                      sm:text-[36px] text-[32px] font-medium leading-[1]"
                    >
                      {number}{" "}
                      <Icon
                        size={19}
                        absoluteStrokeWidth
                        className="lg:w-[50px] w-[30px] lg:h-[50px] h-[30px]"
                        style={{ color: color }}
                      />
                    </div>
                    <p className="sm:text-[18px] text-gray-600 mt-2">{title}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="col-span-6 lg:pl-14 order-1"
            initial={{ y: 30, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className={styles.heading2}>We have impactful numbers</h2>
              <p className={`${styles.paragraph} mt-4 mb-14`}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="border border-primary-100">
              <Image
                className="w-full"
                width={532}
                height={557}
                src={GrowthImage2}
                alt="growth image"
              />
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Growth;
