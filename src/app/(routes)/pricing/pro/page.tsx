import Button from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OpacityTransition, { Ytransition } from "@/components/Transition";
import { pricing } from "@/lib/data";
import styles from "@/style";

const page = () => {
  return (
    <>
      <section className="bg-background-200 border-b border-primary-100">
        <MaxWidthWrapper>
          <div className="grid grid-cols-12">
            <OpacityTransition className="lg:col-span-6 col-span-12">
              <div className="lg:pr-14 lg:border-r border-primary-100 lg:py-14 py-10">
                <div>
                  <h1 className={`${styles.heading1}`}>Pro</h1>
                  <p className={`${styles.paragraph} mt-4 mb-8`}>
                    Enim purus purus elementum mollis magna sit nunc nulla neque
                    facilisis ipsum pellentesque morbi nisi egestas tortor
                    sollicitudin at metus sollicitudin nulla massa tuc cras
                    ipsum nisi egestas enim.
                  </p>
                </div>
                <h4 className={`${styles.heading4} mb-4`}>
                  What&apos;s included
                </h4>

                <ul className="list-disc list-inside marker:text-orange-500">
                  {pricing.slice(1, 2).map((item, i) => (
                    <div
                      className={`${styles.paragraph} flex flex-col gap-3`}
                      key={i}
                    >
                      {item.listTitle.map((item, i) => (
                        <li key={i}>{item.listText}</li>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
            </OpacityTransition>
            <OpacityTransition
              delay={0.2}
              className="lg:col-span-6 col-span-12"
            >
              <div className="lg:pl-14 lg:py-14 py-10">
                <div>
                  <h1 className={`${styles.heading3}`}>
                    Choose your plan duration
                  </h1>
                  <p className={`${styles.paragraph} mt-4 mb-8`}>
                    Quam scelerisque at feugiat est ornare odio id volutpat arcu
                    sed venenatis quam ut nulla ultrices cursus sodales
                    elementum.
                  </p>
                </div>

                <div
                  className="md:text-[44px] 
                sm:text-[32px] text-[30px] font-medium mb-4"
                >
                  $ 199.00 USD
                </div>
                <div className="select-wrapper">
                  <select
                    className="select w-full appearance-none text-[20px] p-5 outline-none border border-primary-100 mb-6"
                    name="duration"
                  >
                    <option className="text-[20px]">Select duration</option>
                    <option value="month">1 month</option>
                    <option value="month">3 months</option>
                  </select>
                </div>
                <Button
                  className={`${styles.blackButton} sm:w-full`}
                  type="button"
                  title="Add to cart"
                />
              </div>
            </OpacityTransition>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className={styles.sectionPadding}>
        <MaxWidthWrapper>
          <Ytransition y={40}>
            <div className={styles.mdContainer}>
              <h3 className={styles.heading3}> About the plan</h3>
              <p className={`${styles.paragraph} mt-4 mb-8`}>
                Suspendisse erat eget aliquam eget sollicitudin ac at purus ac
                orci sit cras tortor a in. Vitae aliquam in accumsan lacus
                tincidunt bibendum purus faucibus feugiat orci morbi diam enim
                integer. Quisque diam praesent proin fermentum luctus tellus
                mattis gravida non. Volutpat eros justo odio suspendisse proin
                congue egestas cras ut. Nunc pharetra vel velit aliquet
                hendrerit sed. Enim in faucibus platea porttitor maecenas
                adipiscing.
              </p>
              <h4 className={`${styles.heading4}`}>More information</h4>
              <p className={`${styles.paragraph} mt-4 mb-8`}>
                Purus faucibus feugiat orci morbi diam enim integer. Quisque
                diam praesent proin fermentum luctus tellus mattis gravida non.
                Volutpat eros justo odio suspendisse proin congue egestas cras
                ut. Nunc pharetra vel velit aliquet hendrerit sed.
              </p>
              <ul className="list-inside list-disc flex flex-col gap-2">
                <li className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur platea porttitor
                  maecenas
                </li>
                <li className={styles.paragraph}>
                  Mauris aliquet faucibus iaculis dui vitae ullamco
                </li>
                <li className={styles.paragraph}>
                  Posuere enim mi pharetra neque proin dic pharetra vel velit
                </li>
                <li className={styles.paragraph}>
                  Posuere enim mi pharetra neque luctus tellus mattis purus ac
                  orci
                </li>
              </ul>
            </div>
          </Ytransition>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default page;
