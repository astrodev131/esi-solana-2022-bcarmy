"use client"

import { useEffect, useRef } from "react"

export default function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return

    // Create a duplicate of the text for seamless scrolling
    const textWidth = text.offsetWidth
    const clonedText = text.cloneNode(true) as HTMLDivElement
    container.appendChild(clonedText)

    // Set the animation
    let position = 0
    const speed = 1 // Adjust speed as needed

    const animate = () => {
      position -= speed

      // Reset position when first text is out of view
      if (position <= -textWidth) {
        position = 0
      }

      container.style.transform = `translateX(${position}px)`
      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animation)
    }
  }, [])

  return (
    <div className="w-screen overflow-hidden bg-black -mt-20 md:-mt-40">
      <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[48rem]">
        <div ref={containerRef} className="flex whitespace-nowrap">
          <div
            ref={textRef}
            className="text-[8vw] font-bold text-transparent leading-none tracking-tight w-screen"
            style={{ WebkitTextStroke: "1px white" }}
          >
            OUR WAY OR THE HIGHWAY
          </div>
        </div>
      </div>
    </div>
  )
}

