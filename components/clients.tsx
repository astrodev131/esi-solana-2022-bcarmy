"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"

const CaseStudyAccordion = () => {
  const [openCase, setOpenCase] = useState("DEXTOOLS")

  const caseStudies = [
    {
      id: "DEXTOOLS",
      content: `In October 2022, Dextools counts 6m visits each month and almost every crypto user has heard or used Dextools platform. What most users do not know, is that Dextools has a token, $DEXT, which is used in their ecosystem. We increased the number of holders and radically boosted the platform on various social medias.

Check out the full case study here.`,
    },
    {
      id: "SMULIPS",
      content: `SMULIPS is a revolutionary DeFi platform that we helped scale from concept to launch. Our team developed smart contracts, conducted security audits, and implemented innovative tokenomics that attracted over 50,000 users in the first month.

Check out the full case study here.`,
    },
    {
      id: "VINUM TECHNOLOGY",
      content: `Vinum Technology approached us to build a blockchain-based supply chain solution. We developed a custom tracking system using NFTs that increased transparency and reduced counterfeiting by 98%.

Check out the full case study here.`,
    },
    {
      id: "OTHERS",
      content: `We've worked with numerous other blockchain projects across DeFi, GameFi, and Web3 infrastructure. Each project received our full expertise and dedication to excellence.

Contact us to learn more about our other case studies.`,
    },
  ]

  return (
    <div className="space-y-px">
      {caseStudies.map((study) => (
        <div key={study.id} className="bg-black">
          <button
            onClick={() => setOpenCase(openCase === study.id ? "" : study.id)}
            className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left border border-white/20 hover:bg-white/5 transition-colors"
          >
            <span className="text-base md:text-lg font-medium flex items-center gap-2">
              <span className="w-4 inline-block">{openCase === study.id ? "−" : "+"}</span>
              {study.id}
            </span>
            <ChevronDown className={`transform transition-transform ${openCase === study.id ? "rotate-180" : ""}`} />
          </button>
          {openCase === study.id && (
            <div className="px-4 md:px-6 py-3 md:py-4 border-x border-b border-white/20">
              <p className="text-sm md:text-base text-gray-400 whitespace-pre-line">{study.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Clients() {
  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <CaseStudyAccordion />

          <div className="text-center md:text-right space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              BLOCKCHAIN
              <br />
              DEVELOPMENT
              <br />
              CASE STUDIES
            </h2>
            <p className="text-lg md:text-xl">
              SUCCESS STORIES OF ALL THE
              <br />
              COMPANIES WE HELPED WITH
              <br />
              OUR EXPERTISE.
            </p>
            <div>
              <Button className="bg-white text-black hover:bg-gray-200 w-full md:w-auto">CASE STUDIES</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

