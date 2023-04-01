import { motion } from "framer-motion";

import Image from "next/image";
import Hero from "./Hero";
import { OpacityEffectAfter, OpacityEffectBefore } from "src/utils/RSParallax";
import { ParallaxBanner } from "react-scroll-parallax";

interface Props {
  boxVariant: any;
  videoRef: any;
  ref: any;
  boxVariant2: any;
  control: any;
}

const Index = (props: Props) => {
  const { boxVariant, videoRef, ref, boxVariant2, control } = props;
  return (
    <div className="bg-scroll ">
      <div className="max-w-screen-lg m-auto ">
        {/* HERO Section */}
        <Hero boxVariant={boxVariant} videoRef={videoRef} />

        {/* Less bezel */}
        <div className="bg-scroll ">
          <div className="pt-[180px]">
            <div className="max-w-screen-lg m-auto ">
              <ParallaxBanner
                layers={[
                  OpacityEffectAfter(
                    <>
                      <h3 className=" text-center text-[32px] font-semibold md:text-[56px]">
                        Less bezel, more screen.
                      </h3>
                    </>,
                  ),
                ]}
                className="h-[100px]"
              />
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
              {/* <div
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
              </div> */}

              <div className="h-[150px] w-96">
                <ParallaxBanner
                  layers={[
                    OpacityEffectAfter(
                      <>
                        <div className=" hidden text-[17px] font-semibold text-[#fff] md:block">
                          iPhone 12 Pro Max
                          <div className=" text-[#aaa]">
                            6.7” Super Retina <br />
                            XDR display
                          </div>
                        </div>
                      </>,
                    ),
                  ]}
                  className="h-[150px]"
                />
              </div>

              <div>
                <video autoPlay muted className=" h-[650px] px-10 md:px-0">
                  <source src="/video4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex h-[150px] w-96 justify-end">
                <ParallaxBanner
                  layers={[
                    OpacityEffectAfter(
                      <>
                        <div className=" hidden text-[17px] font-semibold text-[#fff] md:block">
                          iPhone 12 Pro Max
                          <div className=" text-[#aaa]">
                            6.7” Super Retina <br />
                            XDR display
                          </div>
                        </div>
                      </>,
                    ),
                  ]}
                  className="h-[150px]"
                />
              </div>
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
            <ParallaxBanner
              layers={[
                OpacityEffectBefore(
                  <>
                    <div className="text-center">
                      <button className="learn-more-button hover:bg-[#8F8F8F] hover:text-black">
                        Compare sizes to iPhone 11 Pro
                      </button>
                    </div>
                  </>,
                ),
              ]}
              className="h-[150px]"
            />
          </div>
        </div>
        <div className=" mt-[150px] md:text-center">
          {/* <h3 className="hidden text-center text-[56px] font-semibold md:block ">
            Kicks glass.
          </h3> */}

          <ParallaxBanner
            layers={[
              OpacityEffectAfter(
                <>
                  <h3 className="hidden text-center text-[56px] font-semibold md:block ">
                    Kicks glass.
                  </h3>
                </>,
              ),
            ]}
            className=" h-[80px]"
          />
          <div className="hidden img-for-rote md:block">
            <Image
              src="/mobile.jpeg"
              width={1500}
              height={1000}
              alt=""
              className=" my-[45px] mx-auto"
            />
          </div>
          {/* image for mobile */}
          <div className="mt-[45px] px-10 md:hidden">
            <Image src="/pn.jpg" width={433} height={683} alt="" />

            <h3 className="text-[32px] font-semibold  ">Kicks glass.</h3>
            <p className="design-glass-subheading-phone ">
              Ceramic Shield, tougher than any smartphone glass
            </p>
            <button className="learn-more-button">Find out how</button>
          </div>
          {/* end for mobile */}

          <ParallaxBanner
            layers={[
              OpacityEffectBefore(
                <>
                  <div className="hidden md:block">
                    <p className=" design-glass-subheading">
                      Ceramic Shield, tougher than any smartphone glass
                    </p>
                    <button className="learn-more-button mt-[64px]">
                      Find out how
                    </button>
                  </div>
                </>,
              ),
            ]}
            className="h-[200px]"
          />
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
            {[1, 2, 3, 4, 5, 6].map((x) => (
              <motion.li
                key={x}
                className="flex items-center box"
                initial={{ opacity: 0, scale: 1.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "linear", stiffness: 700 }}
              >
                <img src="/list-item-1.jpeg" className="" alt="" />
                <img src="/arrow.jpg" className="w-6" alt="" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
