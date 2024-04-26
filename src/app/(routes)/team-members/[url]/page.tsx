import NotFound from "@/app/not-found";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { aboutTestimonial } from "@/lib/data";
import styles from "@/style";
import Image from "next/image";

export default function TeamMember({ params }: { params: { url: string } }) {

  const teamMember = aboutTestimonial?.find((obj) => obj.url === params.url);

  if (!teamMember) {
    return <NotFound />;
  }

  const { name, image, position, alt, media } = teamMember;

  return (
    <section className="lg:py-24 py-16">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-5 col-span-12">
            <div
              className="border border-primary-100 relative overflow-hidden 
            lg:h-[607px] md:h-[500px] h-[400px]"
            >
              <Image
                loading="eager"
                className="object-cover"
                quality={90}
                fill
                src={image}
                alt={alt}
              />
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12 lg:p-14 p-7 border border-primary-100 bg-white">
            <div className="pb-10">
              <div className="lg:text-[22px] md:text-[18px] text-[17px] font-medium leading-tight mb-2">
                {position}
              </div>
              <h1 className={`${styles.heading1} mb-1`}>{name}</h1>
              <p className={`${styles.paragraph} mb-5`}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure
                dolor.
              </p>
              <ul className="flex items-center gap-4">
                {media.map((item, i) => (
                  <li key={i}>
                    <Image
                      src={item.href}
                      alt={item.alt}
                      width={20}
                      height={20}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-10 border-t border-primary-100 flex flex-col gap-y-14">
              <div>
                <h4 className={`${styles.heading4} mb-3`}>About {name}</h4>
                <p className={styles.paragraph}>
                  Tenim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <h4 className={`${styles.heading4} mb-3`}>Past experience</h4>
                <p className={styles.paragraph}>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
