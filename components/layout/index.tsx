import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import TopBar from "./topbar";
import NavBar from "./navbar";

// import { useSignInModal } from "./sign-in-modal";
// import UserDropdown from "./user-dropdown";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  // const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />

      <TopBar />

      <div
        className={`fixed top-12 w-full ${
          scrolled
            ? "iphone-nav top-0 bg-[#010A1B] text-[#fff] opacity-[.7]"
            : "bg-[#000000]"
        } z-30 `}
      >
        <NavBar />
      </div>
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
        <p className="text-gray-500">Footer</p>
      </div>
    </>
  );
}
