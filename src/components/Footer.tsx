import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { footer, media } from "@/lib/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-14 pb-5">
      <MaxWidthWrapper>
          <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-5">
            {footer.map((item, index) => (
              <div key={index}>
                <div>
                  <h2 className="mb-6 font-semibold text-primary-200 uppercase">
                    {item.title}
                  </h2>
                  <ul className="font-medium">
                    {item.text.map((item, i) => (
                      <li key={i} className="mb-4">
                        <Link className="font-normal" href={item.href}>
                          {item.link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 pt-6 md:flex md:items-center md:justify-between border-t border-black">
            <span className="sm:text-center">
              © 2024 <Link href="/">Starter X</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              {media.map((item, i) => (
                <Link
                  className="relative overflow-hidden w-[20px] h-[20px]"
                  href={item.href}
                  key={i}
                >
                  <Image fill src={item.icon} alt="logo image" />
                </Link>
              ))}
            </div>
          </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
