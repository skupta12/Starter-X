import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import React from "react";

const Story = () => {
  return (
    <section className="lg:py-36 lg:pb-24 py-16 bg-background-200">
      <MaxWidthWrapper className="pb-20 border-b border-opacity-50 border-black">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 items-center">
          <div>
            <h2 className={styles.heading2}>
              The story behind how our company was founded
            </h2>
          </div>
          <div>
            <p className={`${styles.paragraph} mb-7`}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className={styles.paragraph}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Story;
