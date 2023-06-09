import { motion } from "framer-motion";

import Image from "next/image";
import Hero from "./Hero";
import { OpacityEffectAfter, OpacityEffectBefore } from "src/utils/RSParallax";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Surgical from "./Surgical";

interface Props {
  boxVariant: any;
  videoRef: any;
  ref: any;
  boxVariant2: any;
  control: any;
}

// Image up
const Component = () => {
  return (
    <ParallaxBanner
      layers={[{ image: "/waterfall.jpeg", speed: 5 }]}
      className="h-[660px] w-[800px]"
    />
  );
};
// Text Down
const ComponentText = () => {
  return (
    <Parallax className="opacity mt-[18rem] w-full" speed={-15}>
      <div style={{ opacity: 1 }}>
        <h3 className="text-[32px] font-semibold leading-[38px] md:text-[56px] md:leading-[67px]">
          Blows other phones out of the water.
        </h3>
        <p className="text-[17px] font-[600] text-[#a1a1a6] md:text-[21px]">
          Industry‑leading IP68 water resistance
        </p>
      </div>
    </Parallax>
  );
};

const Index = (props: Props) => {
  const { boxVariant, videoRef, ref, boxVariant2, control } = props;
  return (
    <div className="bg-scroll ">
      <div className="m-auto max-w-screen-lg ">
        {/* HERO Section */}
        <Hero boxVariant={boxVariant} videoRef={videoRef} />

        {/* Less bezel */}
        <div className="bg-scroll ">
          <div className="pt-[180px]">
            <div className="m-auto max-w-screen-lg ">
              <ParallaxBanner
                layers={[
                  OpacityEffectAfter(
                    <>
                      <h3 className=" m-auto w-[80%] text-center text-[32px] font-semibold md:w-full md:text-[56px]">
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
          <div className="m-auto max-w-screen-lg ">
            <div className="flex content-center items-center justify-between">
              <div className="hidden h-[250px] w-[200px] md:block">
                <ParallaxBanner
                  layers={[
                    OpacityEffectAfter(
                      <>
                        <div className="text-[22px] font-semibold text-[#fff]">
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
                <video
                  autoPlay
                  muted
                  className=" h-[650px] px-10 md:-mt-6 md:px-0"
                >
                  <source src="/video4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="  hidden h-[250px] w-[200px] md:block">
                <ParallaxBanner
                  layers={[
                    OpacityEffectAfter(
                      <>
                        <div className=" text-[22px] font-semibold text-[#fff]">
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
            <div className="text-center">
              <ParallaxBanner
                layers={[
                  OpacityEffectBefore(
                    <>
                      <button className="learn-more-button hover:bg-[#8F8F8F] hover:text-black">
                        Compare sizes to iPhone 11 Pro
                      </button>
                    </>,
                  ),
                ]}
                className="h-[150px]"
              />
            </div>
          </div>
        </div>
        <div className=" mt-[150px] md:text-center">
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
          <div className="img-for-rote hidden md:block">
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
            <button className=" learn-more-button">Find out how</button>
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
      {/* Surgical-grade */}

      <Surgical />

      {/*  Blows other phones */}

      <div className="bg-scroll pb-[150px]">
        <div className="flex items-center ">
          <div className=" w-[40%] md:w-[30%]">
            <ComponentText />
          </div>

          <div className=" w-[60%] md:w-[70%]">
            <Component />
          </div>
        </div>
      </div>

      <div className="text-center">
        <video autoPlay muted width={1000} className="mx-auto">
          <source src="/iphone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <ParallaxBanner
          layers={[
            OpacityEffectBefore(
              <>
                <h3 className="mt-[55px] text-[32px] font-semibold md:text-[56px] md:leading-[67px]">
                  Four finishing touches.
                </h3>
                <p className=" mt-[24px] hidden text-[21px] font-semibold leading-[25px] text-[#a1a1a6] md:block">
                  Pacific Blue, Gold, Silver, and Graphite
                </p>
                <p className=" mt-[17px] mr-[9rem] text-[21px] font-semibold  text-[#a1a1a6] md:hidden">
                  Pacific Blue, Gold,
                  <br /> Silver, and Graphite
                </p>
              </>,
            ),
          ]}
          className=" h-[300px]"
        />
      </div>
      <div className="mt-[425px] text-center">
        <div className="mb-[40px] md:mb-[115px]">
          <ParallaxBanner
            layers={[
              OpacityEffectAfter(
                <>
                  <h3 className="text-5xl font-semibold text-[#6e6e73] md:text-[80px] md:leading-[96px]">
                    Superfast wireless
                  </h3>
                  <h3 className="text-5xl font-semibold leading-[96px] text-[#fff] md:text-[80px]">
                    Hello 5G.
                  </h3>
                </>,
              ),
            ]}
            className="h-[200px] "
          />
        </div>

        <div className="relative">
          <img
            src="/frame.jpeg"
            className="mx-auto w-[80%] object-cover"
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
                className="box flex items-center"
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
