import React, { FC } from "react";

interface SRPCircleProps {
  left?: string;
  size: string;
}

const SRPCircle: FC<SRPCircleProps> = ({ left, size }) => {
  return (
    <div className="relative xl:w-[1000px] lg:w-[800px] xl:h-[742px] lg:h-[600px] ">
      <div className={`absolute ${left} top-0`}>
        <video
          autoPlay
          muted
          loop
          style={{
            WebkitClipPath: `circle(${size} at center)`,
            clipPath: `circle(${size} at center)`,
          }}
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          $SRP
        </div>
      </div>
    </div>
  );
};

export default SRPCircle;
