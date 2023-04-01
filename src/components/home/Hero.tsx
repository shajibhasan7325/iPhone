import { motion } from "framer-motion";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { OpacityEffectAfter } from "src/utils/RSParallax";

type Props = {
  boxVariant: any;
  videoRef: any;
};

function Hero({ boxVariant, videoRef }: Props) {
  return (
    <div className="text-center decoration-[#f5f5f7]">
      <motion.div variants={boxVariant} initial="hidden" animate="visible">
        <h1 className=" mb-2 text-[24px] font-semibold leading-[29px] text-[#f5f5f5]">
          iPhone 12 Pro
        </h1>
        <h2 className=" text-[56px] font-semibold text-[#f5f5f5] md:text-[80px] md:leading-[88px]">
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
          style={{
            transition: "transform 0.5s ease",
          }}
          className="mx-auto hero-video-wrap md:-mt-32"
          src="/hero.mp4"
        />
      </div>

      <ParallaxBanner
        layers={[
          OpacityEffectAfter(
            <>
              <h3 className="w-4/6 mx-auto text-2xl font-semibold text-white">
                5G goes Pro. A14 Bionic rockets past every other smartphone
                chip. The Pro camera system takes low-light photography to the
                next level — with an even bigger jump on iPhone 12 Pro Max. And
                Ceramic Shield delivers four times better drop performance.
                Let’s see what this thing can do.
              </h3>

              <h3 className="mx-auto mt-[50px] w-4/6 text-xl font-semibold text-white">
                iPhone 12 Pro available 10.23 | Pre-order iPhone 12 Pro Max 11.6
              </h3>
              <h3 className="mx-auto mt-[50px] w-4/6 text-xl font-semibold text-white">
                From $41.62/mo. or $999 before trade‑in
              </h3>
            </>,
          ),
        ]}
        className="aspect-[3/1]"
      />
    </div>
  );
}

export default Hero;
