"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  size: number
  color: string
  opacity: number
  isEdge: boolean
  angle: number
  speed: number
}

export default function PointAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      const size = Math.min(window.innerWidth * 0.52, 650)
      canvas.width = size
      canvas.height = size
      setDimensions({ width: size, height: size })
    }
    updateSize()

    // Create particles from text
    const createParticles = () => {
      const tempCanvas = document.createElement("canvas")
      const tempCtx = tempCanvas.getContext("2d")
      if (!tempCtx) return

      tempCanvas.width = canvas.width
      tempCanvas.height = canvas.height

      // Set up text rendering
      const fontSize = canvas.width * 0.26
      tempCtx.font = `bold ${fontSize}px Arial`
      tempCtx.fillStyle = "white"
      tempCtx.textAlign = "center"
      tempCtx.textBaseline = "middle"

      // Draw text
      const text = ">SRP"
      tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2)

      // Get image data
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height)
      const data = imageData.data

      const newParticles: Particle[] = []
      const gap = 4 // Space between particles

      // Helper function to check if a pixel is on the edge
      const isEdgePixel = (x: number, y: number) => {
        const checkRadius = gap * 1.5 // Increased check radius for wider edge detection
        let hasEmpty = false
        let hasFilled = false

        for (let dy = -checkRadius; dy <= checkRadius; dy++) {
          for (let dx = -checkRadius; dx <= checkRadius; dx++) {
            const checkX = x + dx
            const checkY = y + dy

            if (checkX >= 0 && checkX < canvas.width && checkY >= 0 && checkY < canvas.height) {
              const i = (checkY * canvas.width + checkX) * 4
              const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3

              if (brightness > 128) {
                hasFilled = true
              } else {
                hasEmpty = true
              }

              if (hasFilled && hasEmpty) {
                return true
              }
            }
          }
        }
        return false
      }

      // Create particles
      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const i = (y * canvas.width + x) * 4
          const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3

          if (brightness > 128) {
            const isEdge = isEdgePixel(x, y)
            const angle = Math.atan2(y - canvas.height / 2, x - canvas.width / 2)
            newParticles.push({
              x,
              y,
              originX: x,
              originY: y,
              size: isEdge ? 1 : 2, // Increased edge particle size
              color: isEdge ? "#ffffff" : "#cccccc",
              opacity: isEdge ? 1 : 0.8,
              isEdge,
              angle,
              speed: isEdge ? 0.1 + Math.random() * 0.1 : 0, // Reduced speed for slower animation
            })
          }
        }
      }

      setParticles(newParticles)
    }

    createParticles()
    window.addEventListener("resize", updateSize)

    return () => {
      window.removeEventListener("resize", updateSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || particles.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      particles.forEach((particle, index) => {
        if (particle.isEdge) {
          // Create slower wave-like motion for edge particles
          const wave = Math.sin(frame * 0.02 + index * 0.05) * 0.15 + 0.05 // Slowed down wave speed
          const currentSpeed = particle.speed * (1 + wave)

          // Move particle outward
          particle.x += Math.cos(particle.angle) * currentSpeed
          particle.y += Math.sin(particle.angle) * currentSpeed

          // Reset position when too far
          const dx = particle.x - particle.originX
          const dy = particle.y - particle.originY
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance > 30) {
            // Increased reset distance for wider effect
            particle.x = particle.originX
            particle.y = particle.originY
          }

          // Add wider glow effect
          const glowRadius = particle.size * 1 // Increased glow radius
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowRadius)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * wave * 0.2})`)
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }

        // Draw base particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [particles])

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: dimensions.width, height: dimensions.height }}
      />
    </div>
  )
}

