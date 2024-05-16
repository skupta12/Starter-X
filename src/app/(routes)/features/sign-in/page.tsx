import Button from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import Link from "next/link";

const SignIn = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className={styles.smContainer}>
        <div className="text-center mb-10">
          <h1 className={`${styles.heading1} mb-5`}>Welcome back</h1>
          <p className={`${styles.paragraph}`}>
            Quisque fringilla dictum ornare lorem lacus ut sem nibh sagittis
            massa ultricies volutpat enim tristique risus amet volutpat
            tincidunt a donec gravida.
          </p>
        </div>
        <div className="px-16 py-10 border border-black bg-background-200">
          <form className="flex flex-col gap-5 mb-6">
            <input
              className="placeholder:text-primary-100 w-full 
                    outline-none sm:text-[18px] p-5 text-black
            border bg-transparent focus:text-black border-primary-100
             hover:border-primary-100/50 duration-200"
              placeholder="Enter your email address"
              type="text"
            />
            <input
              className="placeholder:text-primary-100 w-full 
                    outline-none sm:text-[18px] p-5 text-black
            border bg-transparent focus:text-black border-primary-100
             hover:border-primary-100/50 duration-200"
              placeholder="Enter your password"
              type="text"
            />
          </form>
          <div className="flex justify-between items-center mb-6">
            <div className="sm:text-[18px] text-primary-100 ">Remember me</div>
            <Link
              className="underline sm:text-[18px] text-primary-100"
              href={""}
            >
              Forgot password?
            </Link>
          </div>
          <div>
            <Button className={`${styles.blackButton} bg-primary-100 text-white sm:w-full`} type="button" title="Sign in"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
