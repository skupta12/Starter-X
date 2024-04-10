import styles from "@/style";

const FaqAccordion = ({
  title,
  content,
  number,
  className,
}: {
  title: string;
  content: string;
  number: number | string;
  className?: string;
}) => {
  return (
    <div
      className="py-10 border-b border-b-gray-300 hover:border-b-black 
        duration-300 flex justify-between gap-x-7 hover:transform hover:translate-x-1"
    >
      <div className="lg:text-[56px] md:text-[40px] sm:text-[32px] 
      text-[24px] font-medium sm:block hidden">
        {number}
      </div>
      <div
        className="text-primary-100 text-left lg:text-[32px] 
          md:text-[28px] sm:text-[24px] text-[22px] font-medium"
      >
        {title}
        <div className="overflow-hidden max-w-[800px] mx-auto">
          <p className={`py-6 ${styles.paragraph}`}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
