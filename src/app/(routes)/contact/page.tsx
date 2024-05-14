import FaqAccordion from "@/components/FaqAccordion";
import Contact from "@/components/sections/contact/Contact";
import { faq } from "@/lib/data";
import Location from "@/components/sections/about/Location";
import styles from "@/style";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ContactPage = () => {
  
  return (
    <>
      <Contact />
      <section className="accordion bg-white lg:py-24 py-16">
        <MaxWidthWrapper>
          <div className={`text-center sm:mb-14 mb-10`}>
            <h2 className={styles.heading2}>
              Frequently Asked <br className="sm:block hidden" /> Questions
            </h2>
          </div>
          <div className="max-w-[1000px] mx-auto">
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
      <Location />
    </>
  );
};

export default ContactPage;
