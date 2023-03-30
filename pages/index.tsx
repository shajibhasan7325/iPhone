import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-scroll ">
        <div className="m-auto max-w-screen-lg ">
          <div className=" z-10 mt-[72px] text-center decoration-[#f5f5f7] ">
            <h1>iPhone 12 Pro</h1>
            <h2>Its a leap year.</h2>
            {/* animation  */}

            <div></div>
          </div>
          {/* animation Img */}
          <div></div>
        </div>
      </div>
    </Layout>
  );
}
