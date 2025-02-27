import React from "react";
import Image from "next/image";
const FirstPart = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex lg:flex-row flex-col justify-around w-full items-center mt-14">
        <div className="relative sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] w-[300px] h-[300px] rounded-full overflow-hidden flex items-center justify-center">
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
            <Image src="/SRP.png" layout="fill" alt="SRP" />
          </div>
        </div>
        <div className="xl:max-w-[700px] justify-center lg:justify-start flex flex-col max-w-[500px] p-4">
          <div className="sm:text-4xl text-2xl  text-center lg:text-start">
            The first alto-mamas rewards protocol on Solana
          </div>
          <div className="py-4  text-center lg:text-start text-2xl">
            Hold $SRP and earn SOL every 5 minutes
          </div>
          <div className="flex sm:flex-row flex-col justify-center lg:justify-start items-center py-2 gap-4">
            <div className="flex gap-4">
              <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-[10px] border-gray-600 border hover:bg-[#000000]">
                Buy Now
              </button>
              <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-[10px] border-gray-600 border hover:bg-[#000000]">
                Chart
              </button>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-[10px] border-gray-600 border hover:bg-[#000000] flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                </svg>
              </button>
              <button className="px-4 py-2 cursor-pointer text-xl bg-[#000000ad] rounded-[10px] border-gray-600 border hover:bg-[#000000] flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.64 8.64l-1.92 9.12c-.14.64-.52.8-1.04.52l-2.88-2.12-1.4 1.36c-.16.16-.28.28-.56.28l.2-2.84 5.16-4.68c.24-.2-.04-.32-.36-.12l-6.36 4.04-2.76-.88c-.6-.2-.6-.6.12-.88l10.76-4.16c.48-.2.92.12.76.88z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
