"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Robot parameters
    const robotWidth = 60
    const robotHeight = 30
    const panelWidth = canvas.width * 0.8
    const panelHeight = canvas.height * 0.6
    const panelX = (canvas.width - panelWidth) / 2
    const panelY = (canvas.height - panelHeight) / 2

    // Robot position
    let robotX = panelX
    const robotY = panelY
    let direction = 1 // 1 for right, -1 for left
    let row = 0
    const rowHeight = 40
    const maxRows = Math.floor(panelHeight / rowHeight)

    // Animation
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw dark overlay
      ctx.fillStyle = "rgba(0, 30, 60, 0.85)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw solar panel grid
      ctx.fillStyle = "#1a5276"
      ctx.fillRect(panelX, panelY, panelWidth, panelHeight)

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = 1

      // Vertical grid lines
      const cellWidth = 80
      for (let x = panelX; x <= panelX + panelWidth; x += cellWidth) {
        ctx.beginPath()
        ctx.moveTo(x, panelY)
        ctx.lineTo(x, panelY + panelHeight)
        ctx.stroke()
      }

      // Horizontal grid lines
      for (let y = panelY; y <= panelY + panelHeight; y += rowHeight) {
        ctx.beginPath()
        ctx.moveTo(panelX, y)
        ctx.lineTo(panelX + panelWidth, y)
        ctx.stroke()
      }

      // Draw "cleaned" area
      ctx.fillStyle = "#2980b9"
      for (let r = 0; r < row; r++) {
        ctx.fillRect(panelX, panelY + r * rowHeight, panelWidth, rowHeight)
      }

      // Draw partially cleaned current row
      const cleanWidth = direction > 0 ? robotX - panelX : panelX + panelWidth - robotX
      ctx.fillRect(direction > 0 ? panelX : robotX, panelY + row * rowHeight, cleanWidth, rowHeight)

      // Draw robot
      ctx.fillStyle = "#e74c3c"
      ctx.fillRect(robotX, robotY + row * rowHeight - 5, robotWidth, robotHeight)

      // Draw robot details
      ctx.fillStyle = "#ecf0f1"
      ctx.fillRect(robotX + 10, robotY + row * rowHeight + 15, robotWidth - 20, 5)
      ctx.fillRect(robotX + 5, robotY + row * rowHeight, 5, 5)
      ctx.fillRect(robotX + robotWidth - 10, robotY + row * rowHeight, 5, 5)

      // Update robot position
      robotX += direction * 2

      // Change direction or move to next row
      if (direction > 0 && robotX + robotWidth > panelX + panelWidth) {
        direction = -1
        row += 0.5
      } else if (direction < 0 && robotX < panelX) {
        direction = 1
        row += 0.5
      }

      // Reset to top if reached bottom
      if (row >= maxRows) {
        row = 0
        robotX = panelX
        direction = 1
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-cover"
      style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)" }}
    />
  )
}
