"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { dropdownn, nav } from "@/lib/data";
import Image from "next/image";
import Logo from "/public/svg/header-logo.svg";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className={`md:py-3`}
      classNames={{
        wrapper: "wrapper-classes",
      }}
      isBlurred
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link
          href="/"
          className="hover:scale-95 transition-transform duration-200"
        >
          <Image width={146} height={36} src={Logo} alt="header logo" />
        </Link>
      </NavbarBrand>
      <NavbarMenuToggle    
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden w-[40px] h-[40px] rounded-none bg-black text-white"
      />
      <NavbarContent
        className="hidden md:flex lg:gap-10 gap-6"
        justify="center"
      >
        {/* desktop */}
        {nav.map(({ id, href, name, icon: Icon }) => (
          <NavbarItem key={id}>
            <Link
              className="text-black group text-[18px] font-normal flex items-center"
              href={href}
            >
              {name}
            </Link>
            {Icon ? (
              <Dropdown className="rounded-none shadow-sm border">
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="text-black bg-transparent 
                  px-0 py-0 group text-[18px] font-normal"
                  >
                    Features
                    <Icon size={20} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem variant="light" textValue="utility pages">
                    <h6 className="text-[18px] font-medium">Utility Pages</h6>
                  </DropdownItem>
                  <DropdownItem textValue="sign up" variant="light">
                    <Link
                      className="text-black font-medium opacity-[60%]"
                      href="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </DropdownItem>
                  <DropdownItem textValue="sign in" variant="light">
                    <Link
                      className="text-black font-medium opacity-[60%]"
                      href="/sign-in"
                    >
                      Sign In
                    </Link>
                  </DropdownItem>
                  <DropdownItem textValue="forgot password" variant="light">
                    <Link
                      className="text-black font-medium opacity-[60%]"
                      href="/forgot-password"
                    >
                      Forgot Password
                    </Link>
                  </DropdownItem>
                  <DropdownItem textValue="confirm email" variant="light">
                    <Link
                      className="text-black font-medium opacity-[60%]"
                      href="/confirm-email"
                    >
                      Confirm Email
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : null}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="px-4 border-t">
        {/* mobile */}
        {nav.map(({ id, href, name, icon: Icon }) => (
          <NavbarMenuItem key={id}>
            <Link className="text-black text-[18px] py-1" href={href} size="lg">
              {name}
            </Link>
            {Icon ? (
              <Dropdown className="rounded-none shadow-sm border">
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="text-black bg-transparent px-0 py-0 group text-[18px] font-normal"
                  >
                    Features
                    <Icon size={20} />
                  </Button>
                </DropdownTrigger>

                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem variant="light" textValue="utility pages">
                    <h6 className="text-[18px] font-medium cursor-default">Utility Pages</h6>
                  </DropdownItem>
                  <DropdownItem textValue="sign up" variant="light">
                    <Link
                      className="text-black font-medium opacity-[60%]"
                      href="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </DropdownItem>
                  <DropdownItem textValue="sign in" variant="light">
                    <Link
                      className="text-black font-medium opacity-[60%]"
                      href="/sign-in"
                    >
                      Sign In
                    </Link>
                  </DropdownItem>
                  <DropdownItem textValue="confirm password" variant="light">
                    <Link
                      className="text-black font-medium opacity-[60%]"
                      href="/confirm-password"
                    >
                      Confirm Password
                    </Link>
                  </DropdownItem>
                  <DropdownItem textValue="confirm email" variant="light">
                    <Link
                      className="text-black font-medium opacity-[60%]"
                      href="/confirm-email"
                    >
                      Confirm Email
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : null}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;