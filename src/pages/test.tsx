import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

const Component = () => {
  const background: BannerLayer = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateX: [0, 5],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-thin text-white md:text-8xl">
          Hello World!
        </h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <>
      <ParallaxBanner
        layers={[headline]}
        className="aspect-[2/1] bg-gray-900"
      />
      <div className="mx-auto w-[300px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste
        quibusdam aut fugit placeat provident illum molestiae eaque consequatur
        molestias repellendus quasi distinctio laborum et nulla, maiores odio
        rerum suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat iste quibusdam aut fugit placeat provident illum molestiae
        eaque consequatur molestias repellendus quasi distinctio laborum et
        nulla, maiores odio rerum suscipit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellat iste quibusdam aut fugit placeat
        provident illum molestiae eaque consequatur molestias repellendus quasi
        distinctio laborum et nulla, maiores odio rerum suscipit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Repellat iste quibusdam aut
        fugit placeat provident illum molestiae eaque consequatur molestias
        repellendus quasi distinctio laborum et nulla, maiores odio rerum
        suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat iste quibusdam aut fugit placeat provident illum molestiae
        eaque consequatur molestias repellendus quasi distinctio laborum et
        nulla, maiores odio rerum suscipit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellat iste quibusdam aut fugit placeat
        provident illum molestiae eaque consequatur molestias repellendus quasi
        distinctio laborum et nulla, maiores odio rerum suscipit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Repellat iste quibusdam aut
        fugit placeat provident illum molestiae eaque consequatur molestias
        repellendus quasi distinctio laborum et nulla, maiores odio rerum
        suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat iste quibusdam aut fugit placeat provident illum molestiae
        eaque consequatur molestias repellendus quasi distinctio laborum et
        nulla, maiores odio rerum suscipit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellat iste quibusdam aut fugit placeat
        provident illum molestiae eaque consequatur molestias repellendus quasi
        distinctio laborum et nulla, maiores odio rerum suscipit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Repellat iste quibusdam aut
        fugit placeat provident illum molestiae eaque consequatur molestias
        repellendus quasi distinctio laborum et nulla, maiores odio rerum
        suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat iste quibusdam aut fugit placeat provident illum molestiae
        eaque consequatur molestias repellendus quasi distinctio laborum et
        nulla, maiores odio rerum suscipit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellat iste quibusdam aut fugit placeat
        provident illum molestiae eaque consequatur molestias repellendus quasi
        distinctio laborum et nulla, maiores odio rerum suscipit.
      </div>
    </>
  );
};

export default Component;
