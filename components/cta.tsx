"use client"
import { Button } from "./ui/button"
import { Instagram, Youtube, Linkedin, Github, Send } from "lucide-react"

export default function CTA() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/solanamoneyglitch", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@solanamoneyglitch", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com/company/solanamoneyglitch", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/solanamoneyglitch", label: "GitHub" },
    { icon: Send, href: "https://t.me/solanamoneyglitch", label: "Telegram" },
  ]

  const handleContactClick = () => {
    window.location.href = "mailto:contact@solanamoneyglitch.com"
  }

  const handleSocialClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="max-w-[1400px] mx-auto text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight font-semibold mb-4 md:mb-6 max-w-3xl mx-auto">
          TRUE FAIR LAUNCH DEFLATION MECHANISM
        </h2>

        <p className="text-base md:text-lg mb-6 md:mb-10 max-w-3xl mx-auto">
          100% of supply added to liquidity at launch. No team tokens, no pre-sale, no wallet limits. 5% tax distributed
          as Solana rewards to holders and token burn every 5 minutes.
        </p>

        <Button
          className="bg-white text-black hover:bg-white/90 rounded-none mb-8 md:mb-16 px-6 py-3 w-full sm:w-auto"
          onClick={handleContactClick}
        >
          CONTACT US
        </Button>

        <div className="flex justify-center items-center gap-4 md:gap-8">
          {socialLinks.map((social) => (
            <button
              key={social.label}
              className="text-white hover:text-gray-400 transition-colors cursor-pointer p-2"
              onClick={() => handleSocialClick(social.href)}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

