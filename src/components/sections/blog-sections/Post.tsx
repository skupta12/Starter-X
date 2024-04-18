import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchBlog } from "@/lib/fetchingData";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function Post() {
    
  const linkButtons = [
    {
      id: 1,
      href: "/",
      title: "All",
    },
    {
      id: 2,
      href: "/",
      title: "Business",
    },
    {
      id: 3,
      href: "/",
      title: "Finances",
    },
    {
      id: 4,
      href: "/",
      title: "Management",
    },
  ];

  const blogs = await fetchBlog();

  return (
    <section className={styles.sectionPadding}>
      <MaxWidthWrapper>
        <div className="flex md:flex-row flex-col gap-y-3 gap-x-3 items-center justify-between sm:mb-14 mb-10">
          <div className="flex-1">
            <h2 className={`${styles.heading2}`}>News & articles</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {linkButtons.map((item, i) => (
              <Link
                className="px-3 sm:text-[18px] border-r border-black last:border-r-0"
                key={i}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {blogs?.map((item, i) => (
            <Link
              key={i}
              className={`group flex flex-col border border-t border-black 
              ${i < 4 ? "border-b-0" : ""} 
              ${i % 2 === 0 ? "lg:border-r-0 border-r" : ""}`}
              href="/"
            >
              <div className="lg:p-12 md:p-8 p-5">
                <div
                  className="mb-7 relative overflow-hidden md:h-[340px] 
              h-[200px] border border-black"
                >
                  <Image
                    quality={90}
                    fill
                    className="object-cover group-hover:scale-110 duration-300"
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
