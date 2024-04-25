import Button from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { contact } from "@/lib/data";
import styles from "@/style";
import { Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="lg:py-24 py-16 border-b border-primary-100">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 sm:gap-10 gap-5 items-center">
          <div className="lg:col-span-5 col-span-12 lg:order-1 order-2 flex lg:flex-col 
          sm:flex-row flex-col justify-start gap-10 lg:pr-10">
          <div className="flex gap-5">
              <div>
                <Mail
                  className="text-gray-500"
                  absoluteStrokeWidth
                  size={45}
                />
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
          </div>
          <div className="lg:col-span-7 col-span-12 lg:order-2 order-1">
            <div className="mb-10">
              <h1 className={`${styles.heading1} mb-3`}>Contact us</h1>
              <p className={styles.paragraph}>
                Penatibus fames ligula nulla scelerisque luctus viverra risus
                mauris enim.
              </p>
            </div>
            <form className="grid grid-cols-12 sm:gap-8 gap-6 sm:mb-0 mb-10" action="#">
              {contact.map((item, i) => (
                <input
                  key={i}
                  placeholder={item.placeholder}
                  className="w-full sm:w-auto placeholder:text-primary-100 sm:col-span-6 
                  col-span-12 outline-none sm:text-[18px] p-5 text-black
                  border bg-transparent focus:text-black border-primary-100"
                  type={item.type}
                  required
                />
              ))}
              <div className="col-span-12">
                <textarea
                  className="w-full bg-transparent border border-primary-100 outline-none 
                  p-5 placeholder:text-primary-100 sm:text-[18px] resize-y"
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                />
              </div>
              <div className="col-span-12">
                <Button className="border border-primary-100 bg-primary-100 
                text-white hover:bg-transparent hover:text-black" title="Send message" />
              </div>
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
