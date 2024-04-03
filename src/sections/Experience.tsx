import Accordion from "@/components/Accordion";
import Button, { LinkButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { accordion } from "@/lib/data";
import styles from "@/style";

const Experience = () => {
  return (
    <section className={`${styles.sectionPadding} bg-background-200`}>
      <MaxWidthWrapper>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center pb-16">
            <div>
              <h2
                className="lg:text-[56px] md:text-[48px] 
            text-[34px] font-medium leading-tight"
              >
                We are the next gen banking experience
              </h2>
            </div>
            <div className="button-block lg:flex items-center lg:justify-self-end">
              <Button className="sm:mr-5" title="Get Started" />
              <LinkButton className="sm:mt-0 mt-2" title="Browse all features" />
            </div>
          </div>
          <div className="accordion">
            {accordion.map((item, index) => (
                <Accordion key={index} content={item.content} title={item.title} icon={item.icon} />
            ))} 
          </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
