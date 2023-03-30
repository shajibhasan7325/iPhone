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
            <h1 className=" mb-2 font-semibold md:text-[24px]">
              iPhone 12 Pro
            </h1>
            <h2 className=" text-[56px] font-semibold md:text-[80px]">
              Its a leap year.
            </h2>
            <video autoPlay muted width={1000}>
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <h3 className="mx-auto w-4/6 text-2xl font-bold text-gray-400">
              5G goes Pro. A14 Bionic rockets past every other smartphone chip.
              The Pro camera system takes low-light photography to the next
              level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic
              Shield delivers four times better drop performance. Let’s see what
              this thing can do.
            </h3>

            <h3 className="mx-auto my-4 w-4/6 text-xl font-bold text-gray-400">
              iPhone 12 Pro available 10.23 | Pre-order iPhone 12 Pro Max 11.6
            </h3>
            <h3 className="mx-auto my-4 w-4/6 text-xl font-bold text-gray-400">
              From $41.62/mo. or $999 before trade‑in
            </h3>
          </div>
          {/* Hasans code will be here */}
          <div>
            <h3 className="mx-auto my-4 w-4/6 text-center text-2xl font-bold ">
              Kicks glass.
            </h3>
            <img src="/mobile.jpeg" className="mx-auto" alt="" />
            <h3 className="mx-auto my-4 w-4/6 text-center text-2xl font-bold ">
              Ceramic Shield, tougher than any smartphone glass
            </h3>
            <button className="mx-auto rounded-full border bg-transparent px-4">
              Find out how
            </button>
          </div>
        </div>
        <div className="relative">
          <h3 className="absolute top-64 left-48 rotate-90 text-4xl font-bold">
            Surgical-grade
          </h3>
          <img src="/canvas.png" className="mx-auto" alt="" />
          <h3 className="absolute top-[40rem] right-48 rotate-90 text-4xl font-bold">
            stainless steel.
          </h3>
        </div>
        <div className="container flex items-center">
          <div className="w-1/3">
            <h3 className="text-4xl font-bold">
              Blows other phones out of the water.
            </h3>
            <p>Industry‑leading IP68 water resistance</p>
          </div>
          <div className="w-2/3">
            <img src="/waterfall.jpeg" alt="" />
          </div>
        </div>
        <div className="text-center">
          <video autoPlay muted width={1000} className="mx-auto">
            <source src="/iphone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="text-4xl font-bold">Four finishing touches.</h3>
          <p className=" text-2xl leading-loose text-gray-400">
            Pacific Blue, Gold, Silver, and Graphite
          </p>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-6xl font-bold text-gray-400">
            Superfast wireless{" "}
          </h3>
          <h3 className="text-6xl font-bold  leading-loose">Hello 5G.</h3>
          <div className="relative">
            <img
              src="/frame.jpeg"
              className="mx-auto w-1/2 object-cover"
              alt=""
            />
            <img
              src="/topscreen.jpg"
              className="absolute top-20 left-1/2  w-[34rem] -translate-x-1/2"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Less bezel */}
      <div className="bg-scroll ">
        <div className="pt-[180px]">
          <div className="m-auto max-w-screen-lg ">
            <div>
              <h3 className=" text-center text-[32px] font-semibold md:text-[56px]">
                Less bezel, more screen.
              </h3>
            </div>
            <Image
              className=" shadow-[0 -20px 30px 0 #000] mt-[62px]"
              src="/less.jpg"
              width={1000}
              height={600}
              alt="img"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
