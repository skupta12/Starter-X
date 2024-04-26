import Image from "next/image";
import NotFoundImage from "/public/svg/404.svg";
import styles from "@/style";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="lg:py-20 py-16">
      <div>
        <Image
          className="mx-auto text-center"
          width={700}
          height={346}
          src={NotFoundImage}
          alt="not found image"
        />
      </div>
      <div className="text-center mb-5">
        <h1 className={`${styles.heading1} mb-3 mx-auto`}>Oops! Page not found</h1>
        <p className={`${styles.paragraph} max-w-[50ch] mx-auto`}>
          Facilisi in mollis gravida in dictum egestas duis enim nunc integer
          amet mauris id dolor enim orci turpis dignissim feugiat risus
          ullamcorper ut nisi pharetra.
        </p>
      </div>
      <div className="text-center">
        <Button className="border border-primary-100 hover:bg-primary-100 hover:text-white" title="Go to homepage" />
      </div>
    </div>
  );
};

export default NotFound;
