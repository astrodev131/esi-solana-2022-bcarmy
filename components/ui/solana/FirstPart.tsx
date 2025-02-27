import React from "react";
import Image from "next/image";
import { Logo, TelegramIcon, TwitterIcon } from "@/assets/Svg";
const FirstPart = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex xl:flex-row flex-col justify-around w-full items-center mt-14">
        <div className="relative z-10 sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] w-[300px] h-[300px] rounded-full overflow-hidden flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute mt-5 inset-0 flex items-center justify-center text-white text-8xl font-semibold">
            {" "}
            <Logo></Logo>
          </div>
        </div>
        <div className="xl:max-w-[700px] justify-center lg:justify-start flex flex-col max-w-[500px] p-4">
          <div className="sm:text-4xl text-2xl  text-center lg:text-start">
            The first self-sustaining rewards protocol on Solana
          </div>
          <div className="py-4  text-center lg:text-start text-2xl">
            Hold $SRP and earn SOL every 5 minutes
          </div>
          <div className="flex sm:flex-row flex-col justify-center lg:justify-start items-center py-2 gap-4">
            <div className="flex gap-4">
              <button className="px-4 py-2 z-10 hover:cursor-pointer text-xl bg-[#000000ad] rounded-[10px] border-gray-600 border hover:bg-[#000000]">
                Buy Now
              </button>
              <button className="px-4 py-2 z-10 hover:cursor-pointer text-xl bg-[#000000ad] rounded-[10px] border-gray-600 border hover:bg-[#000000]">
                Chart
              </button>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 z-10 hover:cursor-pointer text-xl bg-[#000000ad] rounded-[10px] border-gray-600 border hover:bg-[#000000] flex items-center">
                <TwitterIcon />
              </button>
              <button className="px-4 py-2 z-10 hover:cursor-pointer text-xl bg-[#000000ad] rounded-[10px] border-gray-600 border hover:bg-[#000000] flex items-center">
                <TelegramIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
