import React from "react";

type Props = {};

const Surgical = (props: Props) => {
  return (
    <div className="relative my-[225px]">
      <h3 className="absolute top-[10rem] rotate-90 text-4xl font-semibold sm:left-0 md:top-64 md:left-48 md:text-[56px]">
        Surgical-grade
      </h3>
      <img src="/canvas.png" className="mx-auto w-1/6" alt="" />
      <h3 className="absolute left-36 top-[18rem] right-0 rotate-90 text-4xl font-semibold md:left-[22rem] md:top-[52rem] md:text-[56px]">
        stainless steel.
      </h3>
    </div>
  );
};

export default Surgical;
