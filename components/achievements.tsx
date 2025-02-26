"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import RewardsCalculator from "./rewards-calculator"

const InfoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-black/50 border border-white/10 p-4 md:p-6 h-full">
    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{title}</h3>
    {children}
  </div>
)

export default function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const speed = 1 // Reduced speed for mobile

    const scroll = () => {
      scrollAmount -= speed
      scrollContainer.style.transform = `translateX(${scrollAmount}px)`

      if (Math.abs(scrollAmount) >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }

      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  const columns = [
    {
      title: "How It Works",
      content: (
        <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-400">
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>5% tax collected from every buy/sell</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>1% used for auto token burn</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>4% tax auto-converted to Solana</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>Smart contract distributes Solana every 5 mins</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>Rewards proportional to holdings</span>
          </div>
        </div>
      ),
    },
    {
      title: "Benefits",
      content: (
        <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-400">
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>Earn passive Solana income</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>Deflationary token model</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>Automatic rewards, no claiming</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>Frequent 5-minute cycles</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">{">"}</span>
            <span>More volume, more rewards, more token burns</span>
          </div>
        </div>
      ),
    },
    {
      title: "REWARDS CALCULATOR",
      content: <RewardsCalculator />,
    },
  ]

  const stats = [
    { number: "1B", label: "TOTAL SUPPLY" },
    { number: "100%", label: "INITIAL LIQUIDITY" },
    { number: "5%", label: "TAX" },
    { number: "100%", label: "FAIR LAUNCH" },
  ]

  const whyChoose = [
    { title: "5% Tax Distribution", description: "Every transaction fuels the reward pool" },
    { title: "Auto-Claim System", description: "Rewards every 5 minutes, hassle-free" },
    { title: "Solana Rewards", description: "Earn Solana by simply holding" },
    { title: "Fair Token Launch", description: "100% fair, no pre-sale or team tokens" },
  ]

  const partners = [
    {
      name: "AVALANCHE",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_3-5MbQlkisaMiafkRWZjZsJa9ZUjpnRg.png",
    },
    {
      name: "BNB CHAIN",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-5jmUBnyRgTfbdordCRcvZahLC5KIHx.png",
    },
    {
      name: "DEXTOOLS",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-jMcuAhYsSw2IEskpI9d5t4A0DRoMUY.png",
    },
    {
      name: "POLYGON",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_4-xr7PSuhWn0IIMZyVFXIY6h5OXdgqD2.png",
    },
    {
      name: "ALGORAND",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2-0IIHGXB4txPw4us2XJnoY4hJtJ9gAr.png",
    },
    {
      name: "BANANAGUN",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_6-Gsm15YgKWeec5Mus1pkmErk5hyGw13.png",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4">AUTOMATIC SOLANA REWARDS</h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Every 5 minutes, holders receive Solana rewards automatically distributed to their wallets
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {columns.map((column, index) => (
            <InfoCard key={index} title={column.title}>
              {column.content}
            </InfoCard>
          ))}
        </div>

        {/* Tokenomics */}
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-6 md:mb-8">
          <span className="text-outline">TOKENOMICS</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-12 md:mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-outline">{stat.number}</div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose $SMG */}
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-8 md:mb-12">
          <span className="text-outline">WHY CHOOSE $SMG?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-32 md:gap-y-16 text-center mb-12 md:mb-20 px-4 md:px-20">
          {whyChoose.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{item.title}</div>
              <div className="text-sm md:text-base lg:text-lg text-gray-400">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
            TRUSTED BY THE
            <br />
            INDUSTRY LEADERS
          </h3>
          <div className="flex-1 overflow-hidden">
            <div ref={scrollRef} className="flex items-center gap-4 md:gap-8 py-4 md:py-8">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-8">
                  {partners.map((partner, index) => (
                    <div
                      key={`${partner.name}-${i}-${index}`}
                      className="flex flex-col items-center justify-center bg-[#0A0A0A] p-3 md:p-6 rounded-lg shadow-lg min-w-[120px] md:min-w-[200px]"
                    >
                      <img
                        src={partner.imageSrc || "/placeholder.svg"}
                        alt={`${partner.name} Logo`}
                        className="h-6 md:h-8 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

