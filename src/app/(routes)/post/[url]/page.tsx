import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { blogs } from "@/lib/data";
import styles from "@/style";
import Image from "next/image";
import blogDetailsImage from "/public/blog-details.jpg";
import Shape from "@/components/Shape";
import Hexagon from "/public/svg/hexagon.svg";
import Square from "/public/svg/square.svg";
import LatestPosts from "@/components/LatestPosts";
import { LinkButton } from "@/components/Button";
import NotFound from "@/app/NotFound";

export default function Page({ params }: { params: { url: string } }) {

  const post = blogs?.find((obj) => obj.url === params.url);

  if (!post) {
    return <NotFound />;
  }

  const { text, label, date, src } = post;

  return (
    <>
      <section className="lg:pt-24 lg:pb-32 pb-16 pt-16 bg-background-200">
        <MaxWidthWrapper>
          <div>
            <div className="mb-10 text-center">
              <h1 className={styles.heading1}>{text}</h1>
            </div>
            <div className="sm:text-[18px] text-center py-6 border-t border-primary-100">
              <span className="font-medium">{label}</span>
              &nbsp; - &nbsp;
              <span>{date}</span>
            </div>
            <div
              className="relative overflow-hidden lg:h-[700px] md:h-[650px] 
          sm:h-[500px] h-[250px] border border-primary-100 mb-20"
            >
              <Image
                sizes="(min-width: 1460px) 1218px, (min-width: 780px) 83.64vw, calc(100vw - 34px)"
                loading="eager"
                priority
                fill
                quality={100}
                className="object-cover"
                src={src}
                alt={text}
              />
            </div>
          </div>
          <div className={`${styles.mdContainer}`}>
            <div>
              <h2 className="font-medium lg:text-[32px] md:text-[24px] text-[22px] leading-[1.3] mb-7">
                Familiarize yourself with the company&apos;s mission, values,
                products, services, and recent news
              </h2>
              <p className={`${styles.paragraph} mb-5`}>
                Suspendisse erat eget aliquam eget sollicitudin ac at purus ac
                orci sit cras tortor a in. Vitae aliquam in accumsan lacus
                tincidunt bibendum purus faucibus feugiat orci morbi diam enim
                integer. Quisque diam praesent proin fermentum luctus tellus
                mattis gravida non. Volutpat eros justo odio suspendisse proin
                congue egestas cras ut. Nunc pharetra vel velit aliquet
                hendrerit sed. Enim in faucibus platea porttitor maecenas
                adipiscing.
              </p>
              <h3 className="font-medium lg:text-[24px] text-[22px] leading-[1.3] mb-7">
                Carefully review the job description and requirements to ensure
                you understand what the role entails
              </h3>
              <p className={`${styles.paragraph} mb-5`}>
                Purus faucibus feugiat orci morbi diam enim integer. Quisque
                diam praesent proin fermentum luctus tellus mattis gravida non.
                Volutpat eros justo odio suspendisse proin congue egestas cras
                ut. Nunc pharetra vel velit aliquet hendrerit sed.
              </p>
              <ul
                className={`${styles.paragraph} flex flex-col gap-y-3 list-disc list-inside mb-10`}
              >
                <li>
                  Lorem ipsum dolor sit amet consectetur platea porttitor
                  maecenas
                </li>
                <li>Mauris aliquet faucibus iaculis dui vitae ullamco</li>
                <li>
                  Posuere enim mi pharetra neque proin dic pharetra vel velit
                </li>
                <li>
                  Posuere enim mi pharetra neque luctus tellus mattis purus ac
                  orci
                </li>
              </ul>
              <figure className="mb-10">
                <div className="relative overflow-hidden sm:h-[350px] h-[200px] border border-primary-100">
                  <Image
                    className="object-cover"
                    fill
                    src={blogDetailsImage}
                    alt="Trulli"
                  />
                </div>
                <figcaption className={`${styles.paragraph} mt-2 text-center`}>
                  Posuere enim mi pharetra neque proin dic pharetra vel velit
                </figcaption>
              </figure>
              <h4 className={`${styles.heading4} mb-7`}>
                Practice common interview questions to prepare confident and
                concise responses
              </h4>
              <p className={`${styles.paragraph} mb-6`}>
                Sapien pretium et quam sed euismod at. Aliquet pulvinar sodales
                facilisis aenean maecenas faucibus. Ultrices turpis pellentesque
                viverra duis maecenas a senectust condimentum massa sagittis
                cras tincidunt sit posuere augue duis est urna dictumst sed
                tempus arcu mattis viverra mauris non eu massa integer nibh nisi
                vestibulum netus.
              </p>
              <ol
                className={`${styles.paragraph} list-inside list-decimal flex flex-col gap-y-3 mb-10`}
              >
                <li>
                  Lorem ipsum dolor sit amet consectetur maecenas a senectust
                </li>
                <li>Mauris aliquet faucibus iaculis dui vitae ullamco</li>
                <li>Posuere enim mi pharetra neque proin dic sagittis cras</li>
                <li>
                  Viverra duis maecenas posuere enim mi pharetra neque proin
                </li>
              </ol>
              <h5 className={`${styles.heading5} mb-7`}>
                Wear professional attire that aligns with the company culture
                and industry standards
              </h5>
              <p className={styles.paragraph}>
                Sapien pretium et quam sed euismod at. Aliquet pulvinar sodales
                facilisis aenean maecenas faucibus. Ultrices turpis pellentesque
                viverra duis maecenas a senectust condimentum massa sagittis
                cras tincidunt sit posuere augue duis est urna dictumst sed
                tempus arcu mattis viverra mauris non eu massa integer nibh nisi
                vestibulum netus.
              </p>
              <div
                className="flex justify-center items-center bg-primary-100 
              py-16 my-10 relative overflow-hidden"
              >
                <Shape
                  src={Hexagon}
                  className="lg:w-[250px] sm:w-[200px] w-[100px] lg:h-[250px] 
                h-[200px] lg:-top-48 -top-20 md:-right-20 -right-10 rotate-[50deg] z-[5]"
                  fill
                  alt="triangle"
                />
                <Shape
                  src={Square}
                  className="w-[100px] lg:h-[250px] 
                h-[200px] lg:-left-5 -left-3 lg:-bottom-32 -bottom-28 rotate-[20deg] z-[5]"
                  fill
                  alt="triangle"
                />
                <blockquote
                  className="text-white lg:text-[25px] md:text-[23px] 
                sm:text-[20px] text-[18px] font-medium leading-[1.5] text-center z-[10] p-5"
                >
                  “Varius turpis neque lectus rhoncus massa leo vulputate amet
                  posuere erat condimentum amet fringilla pellentesque
                  condimentum risus.”
                </blockquote>
              </div>
              <h6 className={`${styles.heading6} mb-7`}>
                Keep a positive attitude and demeanor throughout the interview
              </h6>
              <p className={styles.paragraph}>
                Varius amet vehicula massa pharetra pulvinar neque ipsum purus
                lorem mauris et aliquam risus tempus ultrices sed erat tincidunt
                pulvinar sollicitudin turpis condimentum sed et amet tristique
                vulputate donec scelerisque pellentesque suspendisse maecenas
                convallis lorem ut placerat laoreet rhoncus nibh pulvinar augue
                proin auctor eget tincidunt risus pretium augue mattis at
                faucibus risus venenatis.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className={styles.sectionPadding}>
        <MaxWidthWrapper>
          <div className="flex sm:flex-row flex-col gap-y-3 items-center justify-between sm:mb-14 mb-10">
            <h2 className={`${styles.heading2}`}>Latest Articles</h2>
            <LinkButton href="/post" title="Browse all posts" />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1">
          {blogs.slice(-2).map((item, i) => (
            <LatestPosts
              className={i === 0 ? "lg:border-r-0 lg:border-b border-b-0" : ""}
              key={i}
              title={item.text}
              src={item.src}
              label={item.label}
              date={item.date}
              url={item.url}
            />
          ))}
          </div>
         
        </MaxWidthWrapper>
      </section>
    </>
  );
}
