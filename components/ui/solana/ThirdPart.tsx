"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import { Input } from "../../ui/input";
gsap.registerPlugin(ScrollTrigger);

const ThirdPart = () => {
  const [volume, setVolume] = useState("");
  const [holdings, setHoldings] = useState("");

  // Calculate values
  const volumeNum = Number(volume) || 0;
  const holdingsNum = Number(holdings) || 0;

  // Calculations based on the example values
  const dailyRewardsPool = Math.floor(volumeNum * 0.05);
  const tokenBurn = Math.floor(volumeNum * 0.01);
  const dailyEarnings = Number(((holdingsNum / 4500) * 0.11).toFixed(2));
  return (
    <div className="mx-auto pb-40 overflow-hidden">
      <div className="relative z-10 w-full">
        <div className="relative w-full">
          <Image
            src="/1.png"
            width={1500}
            height={500}
            alt="Description of the image"
            className="-z-[1] right-40 absolute"
          />
          <div className="flex flex-col lg:flex-row  mx-auto items-end gap-20 justify-center">
            <div className="w-full lg:w-[600px] mt-14 lg:mt-20 bg-[#0c0c0df2] border-2 border-purple-900 rounded-[5px]">
              <div className="px-5 py-7">
                <div className="flex justify-start gap-2 items-center">
                  <div className="bg-purple-800 w-3 h-3 rounded-full"></div>
                  <div className="text-2xl lg:text-5xl">Rewards calculator</div>
                </div>
                <div className="flex justify-start flex-col gap-2 mt-5">
                  <div className="text-purple-900">no information</div>
                  <div className="relative">
                    <Input
                      className="bg-black w-full border-2 border-purple-900 rounded-[5px] text-white px-2 py-2 pl-6"
                      type="number"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      placeholder="0"
                      style={{ outline: "none" }}
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
                      $
                    </span>

                    <span className="absolute right-2 top-1/2 text-purple-900 transform -translate-y-1/2">
                      USD
                    </span>
                  </div>
                </div>
                <div className="flex justify-start flex-col gap-2 mt-5">
                  <div className="text-purple-900">no information</div>
                  <div className="relative">
                    <Input
                      className="bg-black w-full border-2 rounded-[5px] border-purple-900 text-white px-2 py-2 pl-6"
                      type="number"
                      value={holdings}
                      onChange={(e) => setHoldings(e.target.value)}
                      placeholder="0"
                      style={{ outline: "none" }}
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
                      $
                    </span>
                  </div>
                </div>
                <div className="border-2 bg-black p-3 border-purple-900 rounded-[5px] mt-10">
                  <div className="flex justify-between items-center py-3 border-b border-purple-900">
                    <div>No information</div>
                    <div className="text-purple-800 text-3xl">
                      {" "}
                      ${dailyRewardsPool.toLocaleString()}
                    </div>
                  </div>{" "}
                  <div className="flex justify-between items-start py-3 border-b border-purple-900">
                    <div>No information</div>
                    <div className="text-purple-800 flex flex-col items-end">
                      <div className="text-3xl">
                        {" "}
                        ${dailyEarnings.toLocaleString()}
                      </div>
                      <div>No information</div>
                    </div>
                  </div>{" "}
                  <div className="flex justify-between items-start py-3">
                    <div>No information</div>
                    <div className="text-purple-800 flex flex-col items-end">
                      <div className="text-3xl">
                        {" "}
                        ${tokenBurn.toLocaleString()}
                      </div>
                      <div>No information</div>
                    </div>
                  </div>{" "}
                </div>
                <div className="flex justify-between mt-3">
                  <div>no information</div>
                  <div className="flex justify center gap-4 text-purple-900">
                    <div>no information</div>
                    <div>no information</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 w-full lg:w-[600px] lg:mt-0">
              <div className="text-xl lg:text-2xl w-full lg:w-[400px]">
                1% Marketing will guarantee longevity and avoid team/insider
                trading. We are here to stay
              </div>
              <div className="mt-12 space-y-4 px-5 bg-[#0c0c0df2] border-2 p-3 border-purple-900 rounded-[5px]">
                <div className="flex justify-start gap-4 items-center">
                  <div className="bg-purple-800 w-3 h-3 rounded-full"></div>
                  <div className="text-2xl lg:text-3xl">Contracts</div>
                </div>
                <div className="flex w-full items-center gap-7 justify-between">
                  <div>Token</div>
                  <div className="w-full relative">
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
                  <div>Token</div>
                  <div className="w-full relative">
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
                <div className="text-[12px] text-gray-500">Contracts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
