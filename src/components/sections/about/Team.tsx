import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { aboutTestimonial, media } from "@/lib/data";
import styles from "@/style";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <section className={`${styles.sectionPadding} bg-background-200`}>
      <MaxWidthWrapper>
        <div className="mx-auto text-center max-w-[60ch] mb-10">
          <h2 className={`${styles.heading2}`}>
            Meet the amazing team behind Starter X
          </h2>
        </div>
        <div className="grid grid-cols-12 md:gap-x-8 gap-x-6 gap-y-10">
          {aboutTestimonial.map((item, i) => {
            return (
              <div className="md:col-span-4 sm:col-span-6 col-span-12" key={i}>
                <div
                  className="relative
                  border border-primary-100 mb-5"
                >
                  <Link href={item.href}>
                    <div className="relative overflow-hidden sm:h-[498px] h-[350px]">
                      <Image
                        className="object-cover md:hover:scale-110 duration-400"
                        fill
                        src={item.image}
                        quality={100}
                        alt={`${item.alt} ${item.id}`}
                      />
                    </div>
                  </Link>

                  <div className="absolute flex items-center bottom-5 right-5 gap-5 
                  px-2 py-3 bg-white border border-primary-100">
                    {item.media.map((mediaItem, i) => (
                      <Link
                        className="hover:scale-110 duration-200"
                        key={i}
                        href={mediaItem.link}
                      >
                        <Image
                          width={20}
                          height={20}
                          key={i}
                          src={mediaItem.href}
                          alt={`${mediaItem.alt} ${mediaItem.id}`}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`${styles.heading3} mb-1`}>{item.name}</h3>
                  <p className="sm:text-[20px] font-medium opacity-75">
                    {item.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Team;
