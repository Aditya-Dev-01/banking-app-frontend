"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bankLogo from "../../../public/bank.png";
const Header: React.FC = () => {
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  return (
    <nav className="bg-[#872a41] text-white shadow-md">
      <div className="flex justify-between h-16 px-5">
        <div className="flex-shrink-0 flex items-center gap-3">
          <Image className="w-12" src={bankLogo} alt="bank-logo" />
          <h1 className="text-2xl font-semibold">Banking App</h1>
        </div>
        <div className="hidden text-white md:flex md:items-center md:space-x-4">
          {navLinks.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className=" hover:text-[#b88692] px-3 py-2 rounded-md text-lg font-semibold"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
