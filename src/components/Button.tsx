"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ButtonProps = {
  title: string;
  className?: string;
  href?: string;
};

export const Button = ({ title, className, href = "/" }: ButtonProps) => {

  const router = useRouter();
  
  return (
    <Link href={href} onClick={() => router.push(href)}>
      <button
        className={`${className} sm:w-auto w-full sm:text-[18px] font-medium px-[30px] 
        py-[18px] inline-block hover:scale-95 duration-300 cursor-pointer`}
        type="button"
      >
        {title}
      
      </button>
    </Link>
  );
};

export const LinkButton = ({ title, className, href = "/" }: ButtonProps) => {

  const router = useRouter();

  return (
    <Link href={href} onClick={() => router.push(href)}>
      <button className={`${className} sm:text-[18px] font-medium text-[17px]
       opacity-75 sm:w-auto w-full justify-center inline-flex items-center 
      group`}>
        {title}
          <ArrowUpRight
          className="ml-2 transition group-hover:translate-x-[2px] 
          group-hover:-translate-y-[2px]"
        />
      </button>
    </Link>
  )
};


export default Button;
