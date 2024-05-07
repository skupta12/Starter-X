"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Logo from "/public/svg/white-logo.svg";
import Button, { LinkButton } from "@/components/Button";
import styles from "@/style";

const Cta = () => {
  
  return (
    <section className="bg-primary-100 py-14">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center">
          <div>
            <Image width={188} height={77} src={Logo} alt="logo" />
          </div>

          <p className="sm:text-[18px] text-white opacity-[80%] mt-4 mb-10 max-w-[55ch] text-center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat duis aute irdolor esse.
          </p>

          <div className="sm:flex items-center gap-x-5">
            <Button
              type="button"
              href="/pricing"
              className={`${styles.whiteButton} sm:mb-0 mb-5`}
              title="Get Started"
            />
            <LinkButton type="button" className="text-white" title="Learn more" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Cta;
