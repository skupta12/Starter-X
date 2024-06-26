"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import PostImage1 from "/public/blog/blog-1.jpg";
import PostImage2 from "/public/blog/blog-2.jpg";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "@/components/Button";
import OpacityTransition, { Ytransition } from "@/components/Transition";

const Post = () => {
  return (
    <section className={`${styles.sectionPadding} bg-white`}>
      <MaxWidthWrapper>
        <OpacityTransition delay={0}>
          <div className="flex sm:flex-row flex-col gap-y-3 items-center justify-between sm:mb-14 mb-10">
            <h2 className={`${styles.heading2}`}>News & articles</h2>
            <LinkButton type="button" href="/post" title="Browse all posts" />
          </div>
        </OpacityTransition>
        <Ytransition y={60} delay={0.2}>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <Link
              className="group flex flex-col border border-primary-100"
              href="/post/is-it-smart-to-invest-in-cryptocurrency-in-2025"
            >
              <div className="lg:p-12 md:p-8 p-5">
                <div
                  className="mb-7 relative overflow-hidden md:h-[320px] 
              h-[200px] border border-primary-100"
                >
                  <Image
                    fill
                    className="object-cover md:group-hover:scale-110 duration-300"
                    src={PostImage1}
                    alt="post image 1"
                  />
                </div>
                <div className="flex flex-wrap group-hover:opacity-70 duration-300">
                  <h3 className={`${styles.heading3}`}>
                    Is it smart to invest in cryptocurrency in 2025? What you
                    need to know
                  </h3>
                </div>
              </div>
              <div
                className="flex justify-between items-center mt-auto 
            py-5 lg:px-14 px-8 border-t border-primary-100 gap-3"
              >
                <div className="sm:text-[18px] font-medium">
                  Business - &nbsp; Jan 24, 2024
                </div>
                <div className="group-hover:translate-x-2 duration-300">
                  <ArrowRight absoluteStrokeWidth size={34} />
                </div>
              </div>
            </Link>
            <Link
              className="group flex flex-col border-primary-100 lg:border-t 
            border-t-0 border-b lg:border-l-0 border-l border-r"
              href="/post/how-to-save-money"
            >
              <div className="lg:p-12 md:p-8 p-5">
                <div
                  className="mb-7 relative overflow-hidden md:h-[320px] 
              h-[200px] border border-primary-100"
                >
                  <Image
                    fill
                    className="object-cover group-hover:scale-110 duration-300"
                    src={PostImage2}
                    alt="post image 2"
                  />
                </div>
                <div className="flex flex-wrap group-hover:opacity-70 duration-300">
                  <h3 className={`${styles.heading3}`}>
                    How to save money - 8 simple ways to start saving money
                    every month
                  </h3>
                </div>
              </div>
              <div
                className="flex justify-between items-center mt-auto 
            py-5 lg:px-14 px-8 border-t border-primary-100 gap-3"
              >
                <div className="sm:text-[18px] font-medium">
                  Business - &nbsp; Jan 24, 2024
                </div>
                <div className="group-hover:translate-x-2 duration-300">
                  <ArrowRight absoluteStrokeWidth size={34} />
                </div>
              </div>
            </Link>
          </div>
        </Ytransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default Post;
