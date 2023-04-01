import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Layout from "@/components/layout";

import { useEffect, useRef } from "react";
import Index from "@/components/home";

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
      <Index
        boxVariant={boxVariant}
        videoRef={videoRef}
        ref={ref}
        boxVariant2={boxVariant2}
        control={control}
      />
    </Layout>
  );
}
