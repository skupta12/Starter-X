import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  title: string;
  className?: string;
  href?: string;
};

export const Button = ({ title, className, href }: ButtonProps) => {
  return (
    <Link href={"/pricing"}>
      <button
        className={`${className} border border-primary-100 
        sm:w-auto w-full sm:text-[18px] font-medium px-[30px] 
        py-[18px] inline-block hover:bg-black hover:text-white 
        hover:scale-95 duration-300 cursor-pointer`}
        type="button"
      >
        {title}
      
      </button>
    </Link>
  );
};

export const LinkButton = ({ title, className, href }: ButtonProps) => {
  return (
    <Link href={"/about"}>
      <button className={`${className} sm:text-[18px] font-medium text-[17px]
       text-gray-600 sm:w-auto w-full justify-center inline-flex items-center 
      group`}>
        {title}
          <ArrowUpRight
          className="ml-2 transition group-hover:translate-x-[2px] 
          group-hover:-translate-y-[2px]"
        />
      </button>
    </Link>
  )
};

// export const DownloadButton = ({ title, icon, className }: ButtonProps) => {
//   return (
//     <>
//       <button
//         className={`${className} text-[17px] font-medium px-9
//         py-5 inline-flex gap-x-4 sm:w-auto w-full items-center justify-center rounded-[50px]
//         group text-black transform hover:-translate-y-[2px] transition duration-300`}
//         type="button"
//       >
//         {icon === "IOS" ? (
//           <Image width={25} height={25} src="/apple.png" alt="apple icon" />
//         ) : (
//           <Image width={25} height={25} src="/android.png" alt="android icon" />
//         )}
//         {title}
//       </button>
//     </>
//   );
// };

// export const BlackButton = ({ title, className }: ButtonProps) => {
//   return (
//     <>
//       <button
//         type="button"
//         value="submit"
//         className={`${className} inline-block font-semibold text-center bg-black
//         text-white px-7 py-[14px] rounded-lg`}
//       >
//         {title}
//       </button>
//     </>
//   );
// };

export default Button;
