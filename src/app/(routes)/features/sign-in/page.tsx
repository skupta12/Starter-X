import Button from "@/components/Button";
import styles from "@/style";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "/public/google.svg";
import FacebookIcon from "/public/facebook.svg";
import OpacityTransition, { Ytransition } from "@/components/Transition";

const SignIn = () => {
  return (
    <section className="lg:py-24 py-16 bg-background-200 relative">
      <div className="absolute top-0 bottom-0 w-full h-[57%] bg-background-100 z-10" />
      <div className={`${styles.smContainer} relative z-20`}>
        <OpacityTransition>
          <div className="text-center mb-10">
            <h1 className={`${styles.heading1} mb-5`}>Welcome back</h1>
            <p className={`${styles.paragraph}`}>
              Quisque fringilla dictum ornare lorem lacus ut sem nibh sagittis
              massa ultricies volutpat enim tristique risus amet volutpat
              tincidunt a donec gravida.
            </p>
          </div>
        </OpacityTransition>
        <Ytransition y={40} delay={0.2}>
          <form className="sm:p-10 p-7 border border-black bg-background-200 flex flex-col gap-6">
            <input
              className={styles.input}
              placeholder="Enter your email address"
              type="email"
              required
              autoComplete="email"
            />
            <input
              className={styles.input}
              placeholder="Enter your password"
              type="password"
              required
              autoComplete="current-password"
            />
            <div className="flex flex-wrap justify-between sm:items-center gap-4">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center cursor-pointer mr-2"
                  htmlFor="check"
                >
                  <input
                    type="checkbox"
                    className="peer relative h-4 w-4 cursor-pointer 
                    appearance-none border border-blue-gray-200 transition-all border-black 
                     checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="check"
                  />
                  <span
                    className="absolute text-white transition-opacity opacity-0 pointer-events-none 
                  top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 
                        1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px cursor-pointer select-none sm:text-[18px]"
                  htmlFor="check"
                >
                  Remember Me
                </label>
              </div>{" "}
              <Link
                className="underline sm:text-[18px] hover:text-primary-100/80"
                href={""}
              >
                Forgot password?
              </Link>
            </div>
            <Button
              className={`${styles.whiteButton} bg-primary-100 text-white sm:w-full`}
              type="button"
              title="Sign in"
              href="/features/sign-in"
            />
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <span className="w-full border-t border-t-black" />
              </div>
              <div className="relative flex justify-center uppercase sm:text-[18px]">
                <span className="px-3 bg-background-200">or</span>
              </div>
            </div>

            <button
              type="button"
              className={`inline-flex sm:gap-x-5 gap-x-3 justify-center w-full 
              sm:text-[18px] font-medium sm:px-[30px] px-[10px] py-[18px] hover:scale-[.97]
               duration-300 cursor-pointer border border-primary-100 
               hover:bg-primary-100 hover:text-white`}
            >
              <Image
                width={25}
                height={25}
                src={GoogleIcon}
                alt="google icon"
              />
              Sign up with Google
            </button>
            <button
              type="button"
              className={`inline-flex sm:gap-x-5 gap-x-3 justify-center w-full 
              sm:text-[18px] font-medium sm:px-[30px] px-[10px] py-[18px] hover:scale-[.97]
               duration-300 cursor-pointer border border-primary-100 
               hover:bg-primary-100 hover:text-white`}
            >
              <Image
                width={25}
                height={25}
                src={FacebookIcon}
                alt="google icon"
              />
              Sign up with Facebook
            </button>
            <div className="text-center sm:text-[18px]">
              <p>
                Don&apos;t have an account?{" "}
                <Link className="underline hover:text-primary-100/80" href={""}>
                  Sign up today
                </Link>
              </p>
            </div>
          </form>
        </Ytransition>
      </div>
    </section>
  );
};

export default SignIn;
