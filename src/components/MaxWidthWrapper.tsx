import { ReactNode } from "react";

// Creating a container

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string; // optional
  children: ReactNode;
}) => {
  return (
    <div
      className={`${className} mx-auto w-full max-w-[1380px] px-4 md:px-14 lg:px-20 relative`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
