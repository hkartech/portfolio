'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number; y: number; id: number }>>([])
  
  const colors = [
    '#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ffd5', '#002bff', '#7a00ff', '#ff00c8'
  ]

  useEffect(() => {
    let trailArray: Array<{ x: number; y: number; id: number }> = []
    let frameId: number

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const animateTrail = () => {
      trailArray = [
        { x: mousePosition.x, y: mousePosition.y, id: Date.now() + Math.random() },
        ...trailArray.slice(0, 15)
      ]
      setTrailPositions(trailArray)
      frameId = requestAnimationFrame(animateTrail)
    }

    window.addEventListener('mousemove', updateMousePosition)
    frameId = requestAnimationFrame(animateTrail)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      cancelAnimationFrame(frameId)
    }
  }, [mousePosition])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trailPositions.map((pos, index) => (
        <motion.div
          key={pos.id}
          className="absolute w-3 h-3 rounded-full"
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: 0,
            opacity: 0,
            x: pos.x - 6,
            y: pos.y - 6,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          style={{
            backgroundColor: colors[index % colors.length],
            filter: 'blur(2px)',
          }}
        />
      ))}
    </div>
  )
}

export default CursorTrail