import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export function OpacityEffectAfter(content: React.ReactNode) {
  const headline: BannerLayer = {
    // translateY: [0, 30],
    // scale: [1, 1.05, "easeOutCubic"],
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: content,
  };
  return headline;
}

export function OpacityEffectBefore(content: React.ReactNode) {
  const headline: BannerLayer = {
    // translateY: [0, 30],
    // scale: [1, 1.05, "easeOutCubic"],
    opacity: [1, 0],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: content,
  };
  return headline;
}
