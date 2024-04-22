import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ActiveCategory from "@/components/ActiveCategory";
import { blogs } from "@/lib/data";

export default async function Post() {

  return (
    <section className={`${styles.sectionPadding} bg-background-200`}>
      <MaxWidthWrapper>
        <div className="flex md:flex-row flex-col gap-3
        items-center justify-between sm:mb-14 mb-10">
          <div className="flex-1 md:mb-0 mb-4">
            <h2 className={`${styles.heading2}`}>News & articles</h2>
          </div>
         <ActiveCategory />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {blogs?.map((item, i) => (
            <Link
              key={i}
              href={`/post/${item.url}`} 
              className={`group flex flex-col border border-t border-black 
              ${i < 8 ? "border-b-0" : ""}
              ${i === 9 ? "border-t-0 lg:border" :  ""}
              ${i % 2 === 0 ? "lg:border-r-0 border-r" : ""}`}
            >
              <div className="lg:p-12 md:p-8 p-5">
                <div
                  className="mb-7 relative overflow-hidden md:h-[340px] 
              h-[200px] border border-black"
                >
                  <Image
                    quality={90}
                    fill
                    className="object-cover md:group-hover:scale-110 duration-300"
                    src={item.src}
                    alt={`post image ${i}`}
                  />
                </div>
                <div className="flex flex-wrap group-hover:opacity-70 duration-300">
                  <h3 className={`${styles.heading3}`}>{item.text}</h3>
                </div>
              </div>
              <div
                className="flex justify-between items-center mt-auto 
            py-5 lg:px-14 px-8 border-t border-black gap-3"
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
      </MaxWidthWrapper>
    </section>
  );
}
