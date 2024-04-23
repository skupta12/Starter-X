import styles from "@/style";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const LatestPosts = ({
  src,
  title,
  label,
  date,
  url,
  className,
}: {
  src: string;
  title: string;
  label: string;
  date: string;
  url: string;
  className?: string;
}) => {
  return (
    <>
        <Link
          className={`${className} group flex flex-col border border-primary-100`}
          href={`/post/${url}`}
        >
          <div className="lg:p-12 md:p-8 p-5">
            <div
              className="mb-7 relative overflow-hidden md:h-[320px] 
              h-[200px] border border-primary-100"
            >
              <Image
                quality={100}
                fill
                className="object-cover md:group-hover:scale-110 duration-300"
                src={src}
                alt="latest post image"
              />
            </div>
            <div className="flex flex-wrap group-hover:opacity-70 duration-300">
              <h3 className={`${styles.heading3}`}>{title}</h3>
            </div>
          </div>
          <div
            className="flex justify-between items-center mt-auto 
            py-5 lg:px-14 px-8 border-t border-primary-100 gap-3"
          >
            <div className="sm:text-[18px] font-medium">
              {label} &nbsp; - &nbsp; {date}
            </div>
            <div className="group-hover:translate-x-2 duration-300">
              <ArrowRight absoluteStrokeWidth size={34} />
            </div>
          </div>
        </Link> 
    </>
  );
};

export default LatestPosts;
