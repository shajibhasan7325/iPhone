import Link from "next/link";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="m-auto max-w-screen-lg ">
      <div className=" flex items-center justify-between pl-[16px] pr-[16px] md:pt-3 md:pl-[12px] md:pr-[12px]">
        <Link href="/" className="nav-link hover:opacity-70 md:hidden">
          <HiOutlineMenuAlt4 size={22} />
        </Link>
        <Link href="/" className="nav-link hover:opacity-70">
          <AiFillApple size={22} />
        </Link>
        <Link href="/" className="nav-link hidden hover:opacity-70 md:block">
          Mac
        </Link>
        <Link href="/" className="nav-link hidden hover:opacity-70 md:block">
          iPad
        </Link>
        <Link href="/" className="nav-link hidden hover:opacity-70 md:block">
          iPhone
        </Link>
        <Link href="/" className="nav-link hidden hover:opacity-70 md:block">
          Watch
        </Link>
        <Link href="/" className="nav-link hidden hover:opacity-70 md:block">
          TV
        </Link>
        <Link href="/" className="nav-link hidden hover:opacity-70 md:block">
          Music
        </Link>
        <Link href="/" className="nav-link hidden hover:opacity-70 md:block">
          Support
        </Link>

        <Link href="/" className="nav-link hidden hover:opacity-70 md:block">
          <AiOutlineSearch size={22} />
        </Link>
        <Link href="/" className="nav-link hover:opacity-70">
          <BsBag size={22} />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
