import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import HeaderLogo from "/public/header-logo.svg";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header
      className="w-full z-[10] border-b border-black bg-background-100"
    >
      <MaxWidthWrapper>
        <div className="lg:py-7 py-6">
          <div className="flex items-center justify-between">
            <div className="header-logo hover:scale-95 duration-200">
              <Link href="/">
                <Image
                  width={146}
                  height={36}
                  src={HeaderLogo}
                  alt="header logo"
                />
              </Link>
            </div>
              <NavItem/>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
