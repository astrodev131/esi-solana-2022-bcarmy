import React from "react";
import Image from "next/image";

const FirstPart = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex lg:flex-row flex-col justify-around w-full items-center">
        <div className="relative sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] w-[350px] h-[350px] rounded-full overflow-hidden flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <Image src="/SRP.png" layout="fill" alt="SRP" />
        </div>
      </div>
      <div className="xl:max-w-[700px] max-w-[500px] p-4">
        <div className="sm:text-4xl text-2xl">
          The first alto-mamas rewards protocol on Solana
        </div>
        <div className="py-4 text-2xl">
          Hold $SRP and earn SOL every 5 minutes
        </div>
        <div className="flex sm:flex-row flex-col items-center py-2 gap-4">
          <div className="flex gap-4">
            <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-md border-gray-600 border hover:bg-[#000000]">
              Buy Now
            </button>
            <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-md border-gray-600 border hover:bg-[#000000]">
              Chart
            </button>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-md border-gray-600 border hover:bg-[#000000]">
              twitter
            </button>
            <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-md border-gray-600 border hover:bg-[#000000]">
              telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
