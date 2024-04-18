"use client";

import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const ActiveCategory = () => {

  const linkButtons = [
    {
      id: 1,
      href: "/post",
      title: "All",
    },
    {
      id: 2,
      href: "/post/business",
      title: "Business",
    },
    {
      id: 3,
      href: "/post/finances",
      title: "Finances",
    },
    {
      id: 4,
      href: "/post/management",
      title: "Management",
    },
  ];

  const pathname = usePathname();
  
  return (
    <div className="flex flex-wrap justify-center">
      {linkButtons.map((item, i) => (
        <Link
          className={clsx(
            "px-3 sm:text-[18px] border-r border-black last:border-r-0",
            {
              "font-medium": pathname === item.href,
            }
          )}
          key={i}
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default ActiveCategory;
