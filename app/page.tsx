"use client";
// import Hero from "@/components/hero"
// import ParticleBackground from "@/components/particle-background"
// import ScrollingText from "@/components/scrolling-text"
// import Achievements from "@/components/achievements"
// import Clients from "@/components/clients"
// import CTA from "@/components/cta"

import FirstPart from "@/components/ui/solana/FirstPart";
import React from "react";
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
  return (
    <main className="relative min-h-screen p-8">
      <Header />
      <FirstPart />
      <SecondPart />
      <div className="lg:block z-10 hidden">
        <Image
          width={180}
          height={250}
          src="/vector.png"
          className="absolute -mt-9 z-10 xl:right-20 right-8 "
          alt="vector"
        />
      </div>
      <ThirdPart />
    </main>
  );
}
