import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import GrowthImage1 from "/public/growth-image-1.jpg";
import GrowthImage2 from "/public/growth-image-2.jpg";
import { numbers } from "@/lib/data";
import styles from "@/style";

const Growth = () => {

  const formatNumber = (index: number) => {
    const symbols = ["%", "M", "K"];
    return symbols[index % symbols.length];
  }

  return (
    <section className={`bg-white ${styles.sectionPadding}`}>
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-12 gap-x-10">
          <div className="col-span-6">
            <div className="mb-14 border border-black">
              <Image src={GrowthImage1} alt="growth image" />
            </div>
            <div className="numbers-block grid grid-cols-12 gap-y-10 gap-x-5">
              {numbers.map(({ id, title, number }) => {
                return (
                  <div key={id} className="col-span-6">
                    <div
                      className="number lg:text-[56px] md:text-[48px] 
                      sm:text-[36px] text-[32px] font-medium leading-[1]"
                    >
                       {number + formatNumber(id)}
                    </div>
                    <p className="sm:text-[18px] text-gray-600 mt-2">{title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-6 lg:pl-14">
            <div>
              <h2 className="lg:text-[56px] md:text-[48px] 
              sm:text-[36px] text-[32px] leading-tight font-medium">We have impactful numbers</h2>
              <p className="text-gray-600 sm:text-[18px] mt-4 mb-14">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="border border-black">
              <Image src={GrowthImage2} alt="growth image"/>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Growth;
