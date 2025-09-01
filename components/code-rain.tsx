"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window with proper pixel ratio
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix code characters
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

    // Column setup
    const fontSize = 14
    const columns = Math.floor(window.innerWidth / fontSize)

    // Store character trails for each column
    const trails: Array<Array<{ char: string; y: number; opacity: number }>> = []
    for (let i = 0; i < columns; i++) {
      trails[i] = []
    }

    // Initialize drops at random positions
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const isMobile = window.innerWidth <= 768

    // Drawing function
    const draw = () => {
      const isDark = theme === "dark" || (theme === "system" && resolvedTheme === "dark")

      // Check if we're on the home page for different opacity levels
      const isHomePage = typeof window !== "undefined" && window.location.pathname === "/"

      // Clear the entire canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Set background
      ctx.fillStyle = isDark ? "#000000" : "#ffffff"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Update and draw trails
      for (let i = 0; i < columns; i++) {
        const x = i * fontSize

        // Add new character to trail
        if (drops[i] >= 0) {
          const char = characters.charAt(Math.floor(Math.random() * characters.length))
          trails[i].push({
            char: char,
            y: drops[i] * fontSize,
            opacity: 1,
          })
        }

        // Update trail opacities and remove old characters
        trails[i] = trails[i].filter((item) => {
          item.opacity -= isHomePage ? 0.05 : 0.08
          return item.opacity > 0
        })

        // Draw trail
        trails[i].forEach((item, index) => {
          const isHead = index === trails[i].length - 1
          let color

          if (isDark) {
            if (isMobile) {
              if (isHomePage) {
                color = isHead ? `rgba(0, 255, 65, ${item.opacity * 1.15})` : `rgba(0, 255, 65, ${item.opacity * 0.7})`
              } else {
                color = isHead ? `rgba(0, 255, 65, ${item.opacity * 0.4})` : `rgba(0, 255, 65, ${item.opacity * 0.2})`
              }
            } else {
              if (isHomePage) {
                color = isHead
                  ? `rgba(10, 230, 100, ${item.opacity * 1.2})`
                  : `rgba(10, 230, 100, ${item.opacity * 0.75})`
              } else {
                color = isHead
                  ? `rgba(10, 230, 100, ${item.opacity * 0.3})`
                  : `rgba(10, 230, 100, ${item.opacity * 0.15})`
              }
            }
          } else {
            if (isMobile) {
              if (isHomePage) {
                color = isHead
                  ? `rgba(13, 124, 45, ${item.opacity * 1.15})`
                  : `rgba(13, 124, 45, ${item.opacity * 0.7})`
              } else {
                color = isHead ? `rgba(13, 124, 45, ${item.opacity * 0.4})` : `rgba(13, 124, 45, ${item.opacity * 0.2})`
              }
            } else {
              if (isHomePage) {
                color = isHead ? `rgba(10, 90, 58, ${item.opacity * 1.2})` : `rgba(10, 90, 58, ${item.opacity * 0.75})`
              } else {
                color = isHead ? `rgba(10, 90, 58, ${item.opacity * 0.3})` : `rgba(10, 90, 58, ${item.opacity * 0.15})`
              }
            }
          }

          ctx.fillStyle = color
          ctx.font = `${fontSize}px monospace`
          ctx.fillText(item.char, x, item.y)
        })

        // Move drop down
        drops[i]++

        // Reset drop position if it's below canvas or randomly
        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
          drops[i] = -Math.random() * 100
          trails[i] = [] // Clear trail when resetting
        }
      }
    }

    // Animation loop
    const interval = setInterval(draw, 50)

    // Cleanup
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme, resolvedTheme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
