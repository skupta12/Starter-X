import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { aboutFeatures } from "@/lib/data";
import styles from "@/style";
import Image from "next/image";

const Features = () => {
  return (
    <section className={styles.sectionPadding}>
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
          <div className="lg:pr-14 sticky">
            <h3 className={`${styles.heading2} mb-5`}>
              The values that shape everything we do at Starter X
            </h3>
            <p className={styles.paragraph}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            {aboutFeatures.map((item, i) => (
              <div
                className="grid grid-cols-12 border-b gap-5 pb-10 border-primary-100 mb-10"
                key={i}
              >
                <div className="col-span-2">
                  <div className="relative overflow-hidden h-[50px]">
                    <Image
                      fill
                      src={item.icon}
                      alt={`${item.alt} ${item.id}`}
                    />
                  </div>
                </div>
                <div className="col-span-10">
                  <h3 className={styles.heading3}>{item.title}</h3>
                  <p className={`${styles.paragraph}`}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Features;
