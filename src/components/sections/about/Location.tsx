import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import LocationImage from "/public/location.jpg";
import styles from "@/style";
import { location } from "@/lib/data";

const Location = () => {
  return (
    <section className={`${styles.sectionPadding} bg-background-200`}>
      <MaxWidthWrapper>
        <div className="text-center mb-6">
          <h2 className={`${styles.heading2} mx-auto mb-2`}>Visit our locations</h2>
          <p className={`${styles.paragraph} max-w-[50ch] mx-auto`}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum dolore eu fugiat.
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-8 col-span-12">
            <div
              className="relative overflow-hidden lg:h-full 
            sm:h-[400px] h-[300px] border lg:border-b border-b-0 border-primary-100"
            >
              <Image
                className="object-cover"
                fill
                quality={90}
                src={LocationImage}
                alt="location image"
              />
            </div>
          </div>
          <div
            className="lg:col-span-4 col-span-12 border-t 
          lg:border-l-0 border-l border-r border-b border-primary-100"
          >
            {location.map(({ id, city, address, phoneNumber, email }) => (
              <div
                className="p-8 flex flex-col gap-6 last:border-t border-primary-100"
                key={id}
              >
                <div>
                  <h3 className={styles.heading3}>{city}</h3>
                </div>
                <ul className="list-disc list-inside flex flex-col gap-4">
                  <li className={`${styles.paragraph}`}>{address}</li>
                  <li className={`${styles.paragraph}`}>{phoneNumber}</li>
                  <li className={`${styles.paragraph}`}>{email}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Location;
