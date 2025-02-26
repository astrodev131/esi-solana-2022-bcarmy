import Image from "next/image";
import React from "react";

const ThirdPart = () => {
  return (
    <div>
      <div className="relative w-full h-[1000px]">
        <Image
          src="/1.png"
          fill
          alt="Description of the image"
          className="-z-50"
        />
        <div className="flex w-[70%] mx-auto items-end justify-between">
          <div className="w-[500px] mt-52 bg-[#0c0c0df2] border-2 border-purple-900 rounded-[5px]">
            <div className="px-5 py-7">
              <div className="flex justify-start gap-2 items-center">
                <div className="bg-purple-800 w-3 h-3 rounded-full"></div>
                <div className="text-5xl">Rewards calculator</div>
              </div>
              <div className="flex justify-start flex-col gap-2 mt-5">
                <div className="text-purple-900">no information</div>
                <div className="relative">
                  <input
                    className="bg-black w-full border-2 border-purple-900 rounded-[5px] text-white px-2 py-2 pl-6"
                    type="text"
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
                  <input
                    className="bg-black w-full border-2 rounded-[5px] border-purple-900 text-white px-2 py-2 pl-6"
                    type="text"
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
                  <div className="text-purple-800">$300000</div>
                </div>{" "}
                <div className="flex justify-between items-start py-3 border-b border-purple-900">
                  <div>No information</div>
                  <div className="text-purple-800 flex flex-col items-end">
                    <div>$300000</div>
                    <div>No information</div>
                  </div>
                </div>{" "}
                <div className="flex justify-between items-start py-3">
                  <div>No information</div>
                  <div className="text-purple-800 flex flex-col items-end">
                    <div>$300000</div>
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
          <div>
            <div>
              1% Marketing will guarantee longevity and avoid team/insider
              trading. We are here to stay
            </div>
            <div className="w-[500px] mt-52 bg-[#0c0c0df2] border-2 p-3 border-purple-900 rounded-[5px]">
              <div className="flex justify-start gap-2 items-center">
                <div className="bg-purple-800 w-3 h-3 rounded-full"></div>
                <div className="text-3xl">Contracts</div>
              </div>
              <div className="flex w-full items-center gap-7 justify-between">
                <div>Token</div>
                <div className="w-full relative">
                  <input
                    className="bg-black w-full border-2 rounded-[5px] border-purple-900 text-white px-2 py-2 pl-6"
                    type="text"
                    style={{ outline: "none" }}
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
                    $
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
