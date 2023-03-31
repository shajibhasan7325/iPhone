import {
  motion,
  useAnimation,
  useTransform,
  useScroll,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Layout from "@/components/layout";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// animation
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 4.5 } },
  hidden: { opacity: 0, scale: 0.6 },
};
const boxVariant2 = {
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  hidden: { opacity: 0 },
};

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video: any = videoRef.current;

    const rotateAfterSeconds = 1.86;
    const rotateAngle = -65;

    const handleTimeUpdate = () => {
      if (video.currentTime >= rotateAfterSeconds) {
        video.style.transform = `rotateZ(${rotateAngle}deg) `;
        // video.style.transform = `rotateX(-45deg) `;
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-scroll ">
        <div className="max-w-screen-lg m-auto ">
          <div className="  text-center decoration-[#f5f5f7] ">
            <motion.div
              variants={boxVariant}
              initial="hidden"
              animate="visible"
            >
              <h1 className=" mb-2 font-semibold leading-[29px] text-[#f5f5f5] md:text-[24px]">
                iPhone 12 Pro
              </h1>
              <h2 className=" text-[56px] font-semibold leading-[88px] text-[#f5f5f5] md:text-[80px]">
                Its a leap year.
              </h2>
            </motion.div>

            <div
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative overflow-hidden"
            >
              <video
                autoPlay
                muted
                width={2000}
                ref={videoRef}
                // style={{ transform: "rotateZ(-65deg)" }}
                style={{
                  transition: "transform 0.5s ease",
                  // transform: "rotateX(45deg)",
                }}
                className="mx-auto hero-video-wrap md:-mt-32"
                src="/hero.mp4"
                // type="video/mp4"
              />
            </div>

            <h3 className="mx-auto w-4/6 text-2xl font-semibold text-[#a1a1a6]">
              5G goes Pro. A14 Bionic rockets past every other smartphone chip.
              The Pro camera system takes low-light photography to the next
              level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic
              Shield delivers four times better drop performance. Let’s see what
              this thing can do.
            </h3>

            <h3 className="mx-auto mt-[50px] w-4/6 text-xl font-semibold text-[#a1a1a6]">
              iPhone 12 Pro available 10.23 | Pre-order iPhone 12 Pro Max 11.6
            </h3>
            <h3 className="mx-auto mt-[50px] w-4/6 text-xl font-semibold text-[#a1a1a6]">
              From $41.62/mo. or $999 before trade‑in
            </h3>
          </div>
          {/* Hasans code will be here */}
          {/* Less bezel */}
          <div className="bg-scroll ">
            <div className="pt-[180px]">
              <div className="max-w-screen-lg m-auto ">
                <motion.div
                  ref={ref}
                  variants={boxVariant2}
                  initial="hidden"
                  animate={control}
                >
                  <h3 className=" text-center text-[32px] font-semibold md:text-[56px]">
                    Less bezel, more screen.
                  </h3>
                </motion.div>
                <Image
                  className="shadow-[0 -20px 30px 0 #000] mx-auto mt-[62px]"
                  src="/less.jpg"
                  width={750}
                  height={600}
                  alt="img"
                />
              </div>
            </div>
          </div>
          {/* video 3  */}
          <div className="bg-scroll pb-[10rem]">
            <div className="max-w-screen-lg m-auto ">
              <div className="flex items-center justify-between">
                <motion.div
                  className=" hidden text-[17px] font-semibold text-[#fff] md:block"
                  ref={ref}
                  variants={boxVariant2}
                  initial="hidden"
                  animate={control}
                >
                  iPhone 12 Pro Max
                  <div className=" text-[#aaa]">
                    6.7” Super Retina <br />
                    XDR display
                  </div>
                </motion.div>
                <div>
                  <video autoPlay muted className=" h-[650px] px-10 md:px-0">
                    <source src="/video4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <motion.div
                  className=" hidden text-[17px] font-semibold text-[#fff] md:block"
                  ref={ref}
                  variants={boxVariant2}
                  initial="hidden"
                  animate={control}
                >
                  iPhone 12 Pro Max
                  <div className=" text-[#aaa]">
                    6.7” Super Retina <br />
                    XDR display
                  </div>
                </motion.div>
              </div>
              {/* Mobile View only */}
              <div className="flex justify-between p-10 md:hidden">
                <div className="  text-[14px] font-semibold text-[#fff] ">
                  iPhone 12 Pro Max
                  <div className=" text-[#aaa]">
                    6.7” Super Retina <br />
                    XDR display
                  </div>
                </div>
                <div className=" text-[14px] font-semibold text-[#fff] ">
                  iPhone 12 Pro Max
                  <div className=" text-[#aaa]">
                    6.7” Super Retina <br />
                    XDR display
                  </div>
                </div>
              </div>
              {/* button */}
              <div className="text-center">
                <button className="learn-more-button hover:bg-[#8F8F8F] hover:text-black">
                  Compare sizes to iPhone 11 Pro
                </button>
              </div>
            </div>
          </div>
          {/* Hasans code will be here */}
          <div className=" mt-[150px] text-center">
            <h3 className="text-center text-[56px] font-semibold ">
              Kicks glass.
            </h3>
            <div className="img-for-rote">
              <Image
                src="/mobile.jpeg"
                width={1500}
                height={1000}
                alt=""
                className=" my-[45px] mx-auto hidden md:block"
              />
            </div>

            <p className="design-glass-subheading ">
              Ceramic Shield, tougher than any smartphone glass
            </p>
            <button className="learn-more-button">Find out how</button>
          </div>
        </div>
        <div className="relative my-[225px]">
          <h3 className="absolute top-64 left-48 rotate-90 text-4xl font-semibold md:text-[56px]">
            Surgical-grade
          </h3>
          <img src="/canvas.png" className="w-1/6 mx-auto" alt="" />
          <h3 className="absolute top-[40rem] right-48 rotate-90 text-4xl font-semibold md:text-[56px]">
            stainless steel.
          </h3>
        </div>
        <div className="bg-scroll pb-[150px]">
          <div className="max-w-screen-lg m-auto ">
            <div className="container flex items-center ">
              <div className="w-1/3">
                <h3 className="text-[56px] font-semibold leading-[67px]">
                  Blows other phones out of the water.
                </h3>
                <p className=" text-[21px] font-[600] text-[#a1a1a6]">
                  Industry‑leading IP68 water resistance
                </p>
              </div>
              <div className="w-2/3 -mt-5">
                <Image
                  width={1000}
                  height={800}
                  src="/waterfall.jpeg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <video autoPlay muted width={1000} className="mx-auto">
            <source src="/iphone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="mt-[55px] text-[56px] font-semibold leading-[67px]">
            Four finishing touches.
          </h3>
          <p className="mt-[24px] text-[21px] font-semibold leading-[25px] text-[#a1a1a6]">
            Pacific Blue, Gold, Silver, and Graphite
          </p>
        </div>
        <div className="mt-[425px] text-center">
          <div className="mb-[115px]">
            <h3 className="text-5xl font-semibold leading-[96px] text-[#6e6e73] md:text-[80px]">
              Superfast wireless
            </h3>
            <h3 className="text-5xl font-semibold leading-[96px] text-[#fff] md:text-[80px]">
              Hello 5G.
            </h3>
          </div>

          <div className="relative">
            <img
              src="/frame.jpeg"
              className="mx-auto w-[70%] object-cover"
              alt=""
            />
            <img
              src="/topscreen.jpg"
              className="absolute top-12 left-1/2 w-[14rem] -translate-x-1/2 md:w-[34rem]"
              alt=""
            />
            <ul className="absolute top-2 left-1/2 -translate-x-1/2 translate-y-1/2 space-y-4 md:w-[34rem]">
              <motion.li
                className="flex items-center box"
                initial={{ opacity: 0, scale: 1.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <img src="/list-item-1.jpeg" className="" alt="" />
                <img src="/arrow.jpg" className="w-6" alt="" />
              </motion.li>
              <motion.li
                className="flex items-center box"
                // transition={{ duration: 0.5 }}
                initial={{ opacity: 0, scale: 1.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <img src="/list-item-1.jpeg" className="" alt="" />
                <img src="/arrow.jpg" className="w-6" alt="" />
              </motion.li>
              <motion.li
                className="flex items-center box"
                initial={{ opacity: 0, scale: 1.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <img src="/list-item-1.jpeg" className="" alt="" />
                <img src="/arrow.jpg" className="w-6" alt="" />
              </motion.li>
              <motion.li
                className="flex items-center box"
                // transition={{ duration: 0.5 }}
                initial={{ opacity: 0, scale: 1.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <img src="/list-item-1.jpeg" className="" alt="" />
                <img src="/arrow.jpg" className="w-6" alt="" />
              </motion.li>
              <motion.li
                className="flex items-center box"
                transition={{ duration: 0.5 }}
                initial={{ y: 30, opacity: 0, scale: 1.4 }}
                // animate={{ y: 0 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
              >
                <img src="/list-item-1.jpeg" className="" alt="" />
                <img src="/arrow.jpg" className="w-6" alt="" />
              </motion.li>
              <motion.li
                className="flex items-center box"
                transition={{ duration: 0.5 }}
                initial={{ y: 60, opacity: 0, scale: 1.4 }}
                // animate={{ y: 0 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
              >
                <img src="/list-item-1.jpeg" className="" alt="" />
                <img src="/arrow.jpg" className="w-6" alt="" />
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
