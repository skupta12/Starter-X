import ActiveCategory from "@/components/ActiveCategory";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/data";

const FinancesPage = () => {
  
  const financesPosts = blogs
    .filter((post) => post.label === "Finances")
    .slice(0, 5);

  return (
    <section className="lg:py-24 py-16">
      <MaxWidthWrapper>
        <div>
          <div className="text-center">
            <h1 className={`${styles.heading1} mb-4`}>Finances posts</h1>
            <p className={`${styles.paragraph} mx-auto max-w-[50ch]`}>
              Suspendisse erat eget aliquam eget sollicitudin ac at purus ac
              orci sit cras tortor a in. Vitae aliquam in accumsan lacus
              tincidunt bibendum purus faucibus feugiat orci.
            </p>
          </div>
          <ActiveCategory className="mt-10 mb-20" />
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {financesPosts.map((item, i) => (
              <Link
                key={i}
                className={`
               ${i < 2 ? "border-b-0" : ""}
               ${i === 3 ? " lg:border-t border-t-0" : ""}
               ${i % 2 === 0 ? "lg:border-r-0 border-r" : ""}
               group flex flex-col border border-primary-100`}
                href={item.url}
              >
                <div className="lg:p-12 md:p-8 p-5">
                  <div
                    className="mb-7 relative overflow-hidden md:h-[400px] 
                 h-[200px] border border-primary-100"
                  >
                    <Image
                      loading="eager"
                      fill
                      className="object-cover md:group-hover:scale-110 duration-300"
                      src={item.src}
                      alt={`post image ${item.id}`}
                    />
                  </div>
                  <div className="flex flex-wrap group-hover:opacity-70 duration-300">
                    <h3 className={`${styles.heading3}`}>{item.text}</h3>
                  </div>
                </div>
                <div
                  className="flex justify-between items-center mt-auto 
               py-5 lg:px-14 px-8 border-t border-primary-100 gap-3"
                >
                  <div className="sm:text-[18px] font-medium">
                    {item.label} - &nbsp; {item.date}
                  </div>
                  <div className="group-hover:translate-x-2 duration-300">
                    <ArrowRight absoluteStrokeWidth size={34} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FinancesPage;
