"use client"

import { useEffect, useRef } from "react"

export function SpinningEarth() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let rotation = 0

    const drawEarth = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.25

      // Ensure minimum radius
      if (radius <= 0) return

      // Save context
      ctx.save()

      // Translate to center and rotate
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Draw earth outline
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(16, 185, 129, 0.1)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw continents (simplified shapes) with proper bounds checking
      ctx.fillStyle = "rgba(16, 185, 129, 0.05)"

      // Continent 1
      const cont1RadiusX = Math.max(radius * 0.3, 10)
      const cont1RadiusY = Math.max(radius * 0.2, 10)
      ctx.beginPath()
      ctx.ellipse(-radius * 0.2, -radius * 0.1, cont1RadiusX, cont1RadiusY, 0, 0, Math.PI * 2)
      ctx.fill()

      // Continent 2
      const cont2RadiusX = Math.max(radius * 0.25, 10)
      const cont2RadiusY = Math.max(radius * 0.3, 10)
      ctx.beginPath()
      ctx.ellipse(radius * 0.15, radius * 0.05, cont2RadiusX, cont2RadiusY, Math.PI / 6, 0, Math.PI * 2)
      ctx.fill()

      // Continent 3
      const cont3RadiusX = Math.max(radius * 0.15, 8)
      const cont3RadiusY = Math.max(radius * 0.15, 8)
      ctx.beginPath()
      ctx.ellipse(-radius * 0.05, radius * 0.3, cont3RadiusX, cont3RadiusY, 0, 0, Math.PI * 2)
      ctx.fill()

      // Draw grid lines
      ctx.strokeStyle = "rgba(0, 0, 0, 0.08)"
      ctx.lineWidth = 1

      // Latitude lines (horizontal)
      for (let i = 1; i <= 3; i++) {
        const latRadius = radius * (i / 4)
        if (latRadius > 0) {
          ctx.beginPath()
          ctx.ellipse(0, 0, radius, latRadius, 0, 0, Math.PI * 2)
          ctx.stroke()

          ctx.beginPath()
          ctx.ellipse(0, 0, radius, latRadius, 0, Math.PI, Math.PI * 2)
          ctx.stroke()
        }
      }

      // Longitude lines (vertical)
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 6
        const ellipseRadiusX = Math.abs(radius * Math.cos(angle))
        const ellipseRadiusY = radius

        if (ellipseRadiusX > 0 && ellipseRadiusY > 0) {
          ctx.beginPath()
          ctx.ellipse(0, 0, ellipseRadiusX, ellipseRadiusY, angle, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      ctx.restore()

      // Update rotation
      rotation += 0.003
    }

    const animate = () => {
      drawEarth()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}
