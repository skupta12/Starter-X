import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { blogs } from "@/lib/data";
import styles from "@/style";
import Image from "next/image";

export default async function Page({ params }: { params: { url: string } }) {
  
  const post = blogs?.find((obj) => obj.url === params.url);

  if (!post) {
    return <div>Error</div>;
  }

  const { text, label, date, srcDetails } = post;

  return (
    <section className="lg:py-24 py-16">
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
          <div className="relative overflow-hidden h-[700px] border border-primary-100">
            <Image loading="eager" fill className="object-cover" src={srcDetails} alt={text}/>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
