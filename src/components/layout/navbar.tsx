import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="max-w-screen-lg m-auto ">
      <div className=" flex h-[52px] items-center justify-between pl-[16px] pr-[16px]  md:pt-3 md:pl-[12px] md:pr-[12px]">
        <Link href="/" className=" text-[17px] font-semibold md:text-[21px]">
          {" "}
          iPhone 12 Pro
        </Link>
        <div>
          <Link
            className=" ml-[24px] hidden text-[12px] decoration-[#aaa] md:inline-block"
            href="/"
          >
            Overview
          </Link>
          <Link
            className=" ml-[24px] hidden text-[12px] decoration-[#ececec] md:inline-block"
            href="/"
          >
            Tech Specs
          </Link>
          <Link
            className=" ml-[24px] rounded-[50px] bg-[#0071e3] py-[4px] px-[11px] text-[12px] decoration-[#fff]"
            href="/"
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
