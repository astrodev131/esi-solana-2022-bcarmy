import { Button } from "@/components/ui/button"
import PointAnimation from "./point-animation"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start pt-16 md:pt-20 p-6 md:p-16">
      <div className="max-w-[2000px] w-full mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.3fr] gap-16 md:gap-32 items-center">
          {/* Left side content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-4 md:mb-6">
              SOLANA MONEY GLITCH
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-2 md:mb-4 text-gray-400">
              First Deflationary Solana Reward Token
            </p>
            <p className="text-lg sm:text-xl mb-6 md:mb-8">
              Earn Solana rewards every 5 minutes just by holding $SMG tokens
            </p>
            <Button className="bg-white text-black hover:bg-white/90 rounded-none h-12 md:h-[56px] px-6 md:px-8 text-sm font-normal w-full sm:w-auto">
              WHAT WE DO
            </Button>
          </div>

          {/* Right side animation */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[350px] md:max-w-[650px] aspect-square">
              <PointAnimation />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#00ff00]/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

