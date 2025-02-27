import React, { useState } from "react";
import { Input } from "../../input";
export default function RightSection() {
  return (
    <div className="mt-16 w-full lg:mx-1 mx-auto md:w-[600px] lg:mt-0">
      <div className="text-2xl font-bold lg:text-3xl text-center lg:text-start w-full lg:w-[550px] leading-7 tracking-normal mt-10 lg:mt-20">
        1% on Marketing will guarantee longevity and avoid team/insider trading.
        We are here to stay
      </div>
      <div className="mt-16 transparency-[30%] space-y-8 px-5 bg-[#0c0c0df2] border-2 p-3 border-purple-900 rounded-[5px]">
        <div className="flex justify-start gap-4 items-center">
          <div className="bg-purple-800 w-3 h-3 rounded-full"></div>
          <div className="text-2xl lg:text-3xl">Contracts</div>
        </div>
        <div className="flex w-full items-center gap-7 justify-between">
          <div className="w-[100px]">Token</div>
          <div className="w-full max-w-[450px] relative">
            <Input
              className="bg-black w-full border-2 rounded-[5px] border-purple-900 text-white px-2 py-2 pl-6"
              value={"FvJtwH1vJj9Sk92Gs4pCCqFwrhUUtvQagYFqv5eBy8WL"}
              type="text"
              style={{ outline: "none" }}
            />
            <span className="absolute right-2 bg-black z-10 top-1/2 transform -translate-y-1/2 text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16h8M8 12h8m-7 8h7a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v7m0 4a2 2 0 002 2z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-7 justify-between">
          <div className="w-[100px]">Treasury</div>
          <div className="w-full max-w-[450px] relative">
            <Input
              className="bg-black w-full border-2 rounded-[5px] border-purple-900 text-white py-2 pl-6"
              type="text"
              value={"FvJtwH1vJj9Sk92Gs4pCCqFwrhUUtvQagYFqv5eBy8WL"}
              style={{ outline: "none" }}
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16h8M8 12h8m-7 8h7a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v7m0 4a2 2 0 002 2z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="text-[12px] text-gray-500">
          CertiK audit coming soon
        </div>
      </div>
    </div>
  );
}
