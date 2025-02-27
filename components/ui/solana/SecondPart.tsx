"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Logo } from "@/assets/Svg";

gsap.registerPlugin(ScrollTrigger);

const SecondPart = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const textBlocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { x: "-100%", opacity: 0, rotation: 0 },
        {
          x: "0%",
          opacity: 1,
          rotation: 360,
          duration: 1,
          scrollTrigger: {
            trigger: videoRef.current,
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
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="container mt-28 mx-auto">
      <div className="flex lg:flex-row flex-col gap-12 justify-evenly items-center relative p-4">
        <div className="flex lg:flex-col sm:flex-row flex-col lg:gap-28 gap-6">
          <div className="xl:text-2xl text-lg sm:pl-8">
            <div className="flex items-center gap-2 pb-3">
              <div className="w-2 h-2 rounded-full bg-[#5015c9]"></div>
              <p>5% tax on each tx</p>
              <div className="absolute  -mr-[30px] xl:mt-[120px] mt-[110px] lg:block hidden">
                <Image
                  src="/line3.png"
                  width={600}
                  height={100}
                  alt="line1"
                ></Image>
              </div>
            </div>
            <div
              ref={(el) => {
                if (el && !textBlocksRef.current.includes(el)) {
                  textBlocksRef.current[2] = el;
                }
              }}
              className="flex flex-col"
            >
              <span>3% to holders in SOL</span>
              <span>1% bum</span>
              <span>1% marketing</span>
            </div>
          </div>
          <div className="xl:text-2xl text-lg">
            <div className="flex items-center gap-2 pb-3">
              <div className="min-w-2 min-h-2 rounded-full bg-[#5015c9]"></div>
              <p>100% fair launch</p>
              <div className="absolute lg:block hidden -mr-[30px] mt-[20px]">
                <Image
                  src="/line4.png"
                  width={600}
                  height={100}
                  alt="line1"
                ></Image>
              </div>
            </div>
            <div
              ref={(el) => {
                if (el && !textBlocksRef.current.includes(el)) {
                  textBlocksRef.current[3] = el;
                }
              }}
              className="flex flex-col"
            >
              <span>No team tokens1% burn</span>
              <span>No presale</span>
            </div>
          </div>
          <div className="xl:text-2xl text-lg sm:pl-4">
            <div className="flex items-center gap-2 pb-3">
              <div className="w-2 h-2 rounded-full bg-[#5015c9]"></div>
              <p>Automatic rewards</p>
              <div className="absolute lg:block hidden -mr-[30px] xl:-mt-[65px] -mt-[75px]">
                <Image
                  src="/line5.png"
                  width={600}
                  height={100}
                  alt="line1"
                ></Image>
              </div>
            </div>
            <div
              ref={(el) => {
                if (el && !textBlocksRef.current.includes(el)) {
                  textBlocksRef.current[4] = el;
                }
              }}
              className="flex flex-col"
            >
              <span>Receive SOL automatically</span>
              <span>every 5 minutes</span>
            </div>
          </div>
        </div>
        <div
          ref={videoRef}
          className="relative z-10 md:min-w-[400px] md:h-[400px] min-w-[300px] h-[300px] rounded-full overflow-hidden flex items-center justify-center"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center mt-5 text-white text-7xl font-semibold">
            <Logo></Logo>
          </div>{" "}
        </div>
        <div
          ref={textSectionRef}
          className="flex lg:flex-col sm:flex-row flex-col gap-12"
        >
          <div
            ref={(el) => {
              if (el && !textBlocksRef.current.includes(el)) {
                textBlocksRef.current[0] = el;
              }
            }}
            className="xl:text-2xl text-lg sm:pl-8"
          >
            <div className="uppercase  pb-3">how it works?</div>
            <div className="absolute lg:block hidden -ml-[300px] -mt-[45px]">
              <Image
                src="/line1.png"
                width={900}
                height={100}
                alt="line1"
              ></Image>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex p-1 gap-2">
                <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
                <span style={{ fontFamily: "Telegraf" }}>
                  5% tax is collected from every buy <br /> and sell transaction
                </span>
              </div>
              <div className="flex p-1 gap-2">
                <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
                <span>
                  Tax is automatically converted to <br /> Solana
                </span>
              </div>
              <div className="flex p-1 gap-2">
                <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
                <span>
                  Smart contract distributes Solana <br /> to all holders every
                  5 minutes
                </span>
              </div>
              <div className="flex p-1 gap-2">
                <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
                <span>
                  Rewards are proportional
                  <br /> to your token holdings
                </span>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              if (el && !textBlocksRef.current.includes(el)) {
                textBlocksRef.current[1] = el;
              }
            }}
            className="xl:text-2xl lg:mt-20 text-lg"
          >
            <div className="uppercase pb-3">why 3/1/1 partition?</div>
            <div className="absolute lg:block hidden -ml-[380px] -mt-[220px] xl:-mt-[230px]">
              <Image
                src="/line2.png"
                width={700}
                height={100}
                alt="line1"
              ></Image>
            </div>
            <div className="flex space-y-2 flex-col">
              <div className="flex p-1 gap-2">
                <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
                <span>
                  3% is redistributed in order to <br /> incertvize to hold
                </span>
              </div>
              <div className="flex p-1 gap-2">
                <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
                <span>
                  1% is burnt in order to keep the <br /> price stable
                </span>
              </div>
              <div className="flex p-1 gap-2">
                <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
                <span>
                  1% is used to fund marketing <br />
                  and attract new holders
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
