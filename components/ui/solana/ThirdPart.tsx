"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const ThirdPart = () => {
  const videoRef1 = useRef<HTMLDivElement>(null);
  const videoRef2 = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const textBlocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (videoRef1.current) {
      gsap.fromTo(
        videoRef1.current,
        { x: "200%", opacity: 0, rotation: 0 },
        {
          x: "0%",
          opacity: 1,
          rotation: 0,
          duration: 4,
          scrollTrigger: {
            trigger: videoRef1.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }

    if (videoRef2.current) {
      gsap.fromTo(
        videoRef2.current,
        { x: "-100%", opacity: 0, rotation: 0 },
        {
          x: "0%",
          opacity: 1,
          rotation: 0,
          duration: 4,
          scrollTrigger: {
            trigger: videoRef2.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }

    if (textSectionRef.current) {
      gsap.fromTo(
        textSectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: textSectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }

    textBlocksRef.current.forEach((textBlock, index) => {
      gsap.fromTo(
        textBlock,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: textBlock,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);
  return (
    <div className="container mx-auto">
      <div className="relative z-10 w-full min-h-screen">
        <div className="relative w-full">
          <Image
            src="/1.png"
            fill
            alt="Description of the image"
            className="-z-[1] -mt-48"
          />
          <div className="flex flex-col lg:flex-row w-[90%] mx-auto items-end gap-10 justify-around">
            <div
              ref={videoRef1}
              className="w-full lg:w-[500px] mt-10 lg:mt-52 bg-[#0c0c0df2] border-2 border-purple-900 rounded-[5px]"
            >
              <div className="px-5 py-7">
                <div className="flex justify-start gap-2 items-center">
                  <div className="bg-purple-800 w-3 h-3 rounded-full"></div>
                  <div className="text-2xl lg:text-5xl">Rewards calculator</div>
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
            <div className="mt-10 w-full lg:w-[500px] lg:mt-0">
              <div
                ref={(el) => (textBlocksRef.current[0] = el!)}
                className="text-xl lg:text-2xl w-full lg:w-[300px]"
              >
                1% Marketing will guarantee longevity and avoid team/insider
                trading. We are here to stay
              </div>
              <div
                ref={videoRef2}
                className="mt-12 space-y-4 px-5 bg-[#0c0c0df2] border-2 p-3 border-purple-900 rounded-[5px]"
              >
                <div className="flex justify-start gap-2 items-center">
                  <div className="bg-purple-800 w-3 h-3 rounded-full"></div>
                  <div className="text-2xl lg:text-3xl">Contracts</div>
                </div>
                <div className="flex w-full items-center gap-7 justify-between">
                  <div>Token</div>
                  <div className="w-full relative">
                    <input
                      className="bg-black w-full border-2 rounded-[5px] border-purple-900 text-white px-2 py-2 pl-6"
                      type="text"
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
                <div className="flex w-full items-center gap-7 justify-between">
                  <div>Token</div>
                  <div className="w-full relative">
                    <input
                      className="bg-black w-full border-2 rounded-[5px] border-purple-900 text-white py-2 pl-6"
                      type="text"
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
