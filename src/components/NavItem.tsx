"use client";

import { useState } from "react";
import { nav } from "@/lib/data";
import Link from "next/link";
import Hamburger from "hamburger-react";

export function NavItem() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="md:hidden block bg-primary-100">
        <Hamburger
          hideOutline
          size={28}
          color="white"
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>

      {/* desktop */}

      <nav className="md:block hidden">
        <ul className="flex items-center gap-x-10">
          {nav.map(({ id, name, href, icon: Icon, dropdown }) => (
            <li key={id} className="dropdown">
              <Link
                className="text-black md:text-[18px]
                text-base font-normal flex items-center"
                href={href}
              >
                <span className="inline-flex group dropbtn">
                  {name}

                  {Icon && (
                    <Icon
                      size={20}
                      className="icon ml-1 transform group-hover:rotate-[180deg] duration-300 opacity-[50%]"
                    />
                  )}
                </span>
              </Link>
              {Icon ? (
                <div className="dropdown relative">
                  <div className="dropdown-content pt-[15px] hidden absolute min-w-[200px] -right-14 z-[1]">
                    <div className="bg-white shadow-md border p-4 flex flex-col gap-y-4">
                      <h6 className="text-primary-200 font-semibold text-[18px]">
                        Utility Pages
                      </h6>
                      {dropdown.map(({ id, text, href }) => (
                        <Link key={id} href={href}>
                          <p className="font-semibold opacity-[60%]">{text}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile */}

      <div
      className={`fixed md:hidden bg-white border-b border-t border-black z-[1] left-0 
        right-0 top-[96px] flex justify-start items-center
        transition-transform duration-500 ease-in-out ${
          !isOpen ? "hidden" : "block"
        }`}
    >
      <nav>
        <ul className="px-4">
          {nav.map(({ id, name, href, icon: Icon, dropdown }) => (
            <li key={id} className="dropdown">
              <Link
                className="text-black font-normal"
                href={href} 
                onClick={href === "/" ? () => setIsOpen(false) : undefined}
              >
                <span className="relative my-[11px] inline-flex group">
                  {name}
                  {Icon && (
                    <Icon
                      size={20}
                      className="icon ml-1 transform group-hover:rotate-[180deg] duration-300 opacity-[50%]"
                    />
                  )}
                </span>
              </Link>
              {Icon ? (
                <div className="dropdown relative">
                  <div className={`dropdown-content hidden z-[1]`}>
                    <div className="bg-white shadow-md border p-4 flex flex-col gap-y-3">
                    <h6 className="text-primary-200 tracking-[0.5px] font-semibold text-[18px]">
                        Utility Pages
                      </h6>
                      {dropdown.map(({ id, text, href }) => (
                        <Link key={id} href={href}>
                          <p className="font-semibold opacity-[60%]">
                            {text}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </>
  );
}

export default NavItem;
