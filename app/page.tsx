// import Hero from "@/components/hero"
// import ParticleBackground from "@/components/particle-background"
// import ScrollingText from "@/components/scrolling-text"
// import Achievements from "@/components/achievements"
// import Clients from "@/components/clients"
// import CTA from "@/components/cta"

import FirstPart from "@/components/ui/solana/FirstPart";
import Footer from "@/components/ui/solana/Footer";
import Header from "@/components/ui/solana/Header";
import SecondPart from "@/components/ui/solana/SecondPart";
import ThirdPart from "@/components/ui/solana/ThirdPart";

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
    <div className="w-full">
      <main className="relative min-h-screen p-8">
        <Header />
        <FirstPart />
        <SecondPart />
        <ThirdPart />
      </main>
      <Footer></Footer>
    </div>
  );
}
