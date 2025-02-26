export default function Stats() {
  const stats = [
    { number: "75,000+", label: "TOKENS TRANSACTIONS" },
    { number: "50+", label: "CONTRACTS DEVELOPED" },
    { number: "35,000+", label: "NFTs MINTED" },
    { number: "20,000+", label: "GMs SENT" },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
          WE GET <span className="text-outline">SH</span>IT DONE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-outline">{stat.number}</div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

