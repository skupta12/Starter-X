import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { testimonial } from "@/lib/data";
import styles from "@/style";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className={`${styles.sectionPadding} bg-white`}>
      <MaxWidthWrapper>
        <div className={`text-center sm:mb-14 mb-10`}>
          <h2 className={styles.heading2}>What our clients say</h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {testimonial.map((item, i) => {
            return (
              <div
                key={i}
                className="lg:col-span-4 content-end
              col-span-12 border border-primary-100 bg-background-200"
              >
                <div className="sm:px-[40px] px-[30px] sm:pt-[64px] pt-[54px] sm:pb-[130px] pb-[100px]">
                  <p className="sm:text-[22px] text-[20px] font-medium">
                    <q>{item.text}</q>
                  </p>
                </div>
                <div
                  style={{ backgroundColor: item.color }}
                  className="this-block border-t border-primary-100 flex 
                  items-center gap-4 py-[16px] px-[32px]"
                >
                  <div>
                    <Image
                      className="rounded-full border border-primary-100"
                      width={62}
                      height={62}
                      src={item.img}
                      alt="image of people"
                    />
                  </div>
                  <div className="font-medium sm:text-[18px]">
                    <div>{item.title}</div>
                    <div className="text-primary-200">{item.position}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonial;
