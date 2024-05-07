"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OpacityTransition from "@/components/Transition";
import { contact } from "@/lib/data";
import styles from "@/style";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, Mail, Phone } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema } from "@/lib/validators";
import { z } from "zod";
import { useState } from "react";

type FormFields = z.infer<typeof schema>;

const Contact = () => {

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const errorMessages = {
    email: "Please enter a valid email address.",
    name: "Please enter a name with at least 2 characters.",
    phone: "Please enter a valid phone number.",
    // services: "Please enter a services with at least 3 character",
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    // defaultValues: {
    //   email: "test@email.com",
    // },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log(data);

      setIsFormSubmitted(true)

    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <section className="lg:py-24 py-16 border-b border-primary-100">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 sm:gap-10 gap-5 items-center">
          <OpacityTransition
            className="lg:col-span-5 col-span-12 lg:order-1 order-2 flex lg:flex-col 
          sm:flex-row flex-col gap-10 lg:pr-10"
          >
            <div className="flex gap-5">
              <div>
                <Mail className="text-gray-500" absoluteStrokeWidth size={45} />
              </div>
              <div>
                <h4 className={`${styles.heading4} text-gray-500 mb-3`}>
                  Email
                </h4>
                <h3 className={styles.heading3}>stx@gmail.com</h3>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <Phone
                  className="text-gray-500"
                  absoluteStrokeWidth
                  size={45}
                />
              </div>
              <div>
                <h4 className={`${styles.heading4} text-gray-500 mb-3`}>
                  Phone number
                </h4>
                <h3 className={styles.heading3}>(456) 062 - 3453</h3>
              </div>
            </div>
          </OpacityTransition>
          <OpacityTransition
            delay={0.3}
            className="lg:col-span-7 col-span-12 lg:order-2 order-1 lg:h-[676px]"
          >
            <div className="mb-10">
              <h1 className={`${styles.heading1} mb-3`}>Contact us</h1>
              <p className={styles.paragraph}>
                Penatibus fames ligula nulla scelerisque luctus viverra risus
                mauris enim.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-12 sm:gap-8 gap-6 sm:mb-0 mb-10"
            >
              {contact.map((item, i) => (
                <div
                  className="sm:col-span-6 
                col-span-12"
                  key={i}
                >
                  <input
                    {...register(item.name as keyof FormFields)}
                    placeholder={item.placeholder}
                    className="placeholder:text-primary-100 w-full 
                    outline-none sm:text-[18px] p-5 text-black
            border bg-transparent focus:text-black border-primary-100"
                  />
                  {errors[item.name] && (
                        <div className="text-red-500 text-[14px] mt-2">
                            {errorMessages[item.name]}
                        </div>
                    )}
                </div>
              ))}

              <div className="col-span-12">
                <textarea
                {...register("text")}
                  className="w-full bg-transparent border border-primary-100 outline-none 
                  p-5 placeholder:text-primary-100 sm:text-[18px] resize-y"
                  placeholder="Write your message here..."
                  rows={5}
                /> 
              </div>

              <div className="col-span-12">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={`${isSubmitting ? "bg-primary-200" : "bg-primary-100"} sm:w-[270px] h-[65px] w-full sm:text-[18px] font-medium px-[30px] 
                  py-[18px] inline-block hover:scale-95 duration-300 cursor-pointer 
                  border border-primary-100 text-white`}
                >
                  {isSubmitting ? <div><LoaderCircle className="animate-spin text-center mx-auto text-white "/></div> : "Send a message"}
                </button>
                {errors.root && <div className="text-red-500">{errors.root.message}</div>}
                {isFormSubmitted ? <div className="text-red-500 text-[14px] mt-2">Disabled</div> : ""}
              </div>
            </form>
          </OpacityTransition>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
