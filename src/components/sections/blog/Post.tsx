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
          {blogs?.slice(0,6).map(({ date, id, label, src, text, url }, i) => (
            <Link
              key={i}
              href={`/post/${url}`} 
              className={`group flex flex-col border border-t border-primary-100 
              ${i < 4 ? "border-b-0" : ""}
              ${i === 4 ? "lg:border-b border-b-0" : ""}
              ${i % 2 === 0 ? "lg:border-r-0 border-r" : ""}`}
            >
              <div className="lg:p-12 md:p-8 p-5">
                <div
                  className="mb-7 relative overflow-hidden md:h-[400px] 
              h-[200px] border border-primary-100"
                >
                  <Image
                    fill
                    className="object-cover md:group-hover:scale-110 duration-300"
                    src={src}
                    alt={`post image ${id}`}
                  />
                </div>
                <div className="flex flex-wrap group-hover:opacity-70 duration-300">
                  <h3 className={`${styles.heading3}`}>{text}</h3>
                </div>
              </div>
              <div
                className="flex justify-between items-center mt-auto 
            py-5 lg:px-14 px-8 border-t border-primary-100 gap-3"
              >
                <div className="sm:text-[18px] font-medium">
                  {label} - &nbsp; {date}
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
