"use client";
// import Hero from "@/components/hero"
// import ParticleBackground from "@/components/particle-background"
// import ScrollingText from "@/components/scrolling-text"
// import Achievements from "@/components/achievements"
// import Clients from "@/components/clients"
// import CTA from "@/components/cta"

import FirstPart from "@/components/ui/solana/FirstPart";
import React, { useRef, useEffect } from "react";
import Header from "@/components/ui/solana/Header";
import SecondPart from "@/components/ui/solana/SecondPart";
import ThirdPart from "@/components/ui/solana/ThirdPart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   return (
//     <main className="relative min-h-screen bg-black text-white overflow-hidden">
//       <div className="absolute inset-0">
//         <ParticleBackground />
//       </div>
//       <Hero />
//       <ScrollingText />
//       <Achievements />
//       <Clients />
//       <CTA />
//     </main>
//   )
// }

export default function Home() {
  const videoRef = useRef<HTMLDivElement>(null);

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
  });
  return (
    <main className="relative min-h-screen p-8">
      <Header />
      <FirstPart />
      <SecondPart />
      <div className="lg:block hidden" ref={videoRef}>
        <Image
          width={300}
          height={500}
          src="/vector.png"
          className="absolute xl:right-20 right-10 "
          alt="vector"
        />
      </div>
      {/* <div className="overflow-hidden">
        <Image
          src="/1.png"
          layout="fill"
          alt="Description of the image"
          className="-z-[1] overflow-hidden left-[20%] absolute"
        />
      </div> */}
      <ThirdPart />
    </main>
  );
}
