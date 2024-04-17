"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import styles from "@/style";

const Accordion = ({
  title,
  content,
  icon,
  className,
}: {
  title: string;
  content: string;
  icon: string;
  className?: string;
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const [rotate, setRotate] = useState<string>(
    "transform duration-400 ease-in-out"
  );

  const contentSpace = useRef<null>(null);

  return (
    <div className="flex flex-col">
      <button
        className="py-10 border-b border-b-gray-300 hover:border-b-black 
        duration-300 flex items-center justify-between hover:transform hover:translate-x-1"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-x-6">
          <div>
            <Image className="w-auto h-auto" width={40} height={40} src={icon} alt={title} />
          </div>
          <div
            className="text-primary-100 text-left lg:text-[36px] 
          md:text-[32px] sm:text-[24px] text-[20px] font-medium"
          >
            {title}
          </div>
        </div>

        <div className="accordion-icon ml-3">
          <ChevronRight className={`${rotate}`} />
        </div>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-300 ease-out"
      >
        <p className={`py-6 ${styles.paragraph}`}>
          {content}
        </p>
      </div>
    </div>
  );

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-300"
        : "transform duration-300 rotate-[90deg]"
    );
  }
};

export default Accordion;
