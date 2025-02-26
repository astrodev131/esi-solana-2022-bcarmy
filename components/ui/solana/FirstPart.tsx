import React from "react";
import SRPCircle from "./SRPCircle";

const FirstPart = () => {
  return (
    <div className="xl:px-10 px-4">
      <div className="relative w-full">
        <SRPCircle size="240px" left="-left-96" />
        <div className="absolute bottom-1/2 max-w-[700px] translate-y-1/2 right-0 p-4">
          <div className="text-4xl">
            The first alto-mamas rewards protocol on Solama
          </div>
          <div className="py-4 text-2xl">
            Hold $SRP and earn SOL every 5 minutes
          </div>
          <div className="flex py-2 gap-4">
            <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-md border-gray-600 border hover:bg-[#000000]">
              Buy Now
            </button>
            <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-md border-gray-600 border hover:bg-[#000000]">
              Chart
            </button>
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
