"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function WebDevGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Code brackets */}
        <motion.path
          d="M40 60 L20 80 L40 100"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.path
          d="M160 60 L180 80 L160 100"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
        />

        {/* Floating code elements */}
        {[...Array(6)].map((_, i) => (
          <motion.rect
            key={i}
            x={60 + i * 15}
            y={70 + (i % 2) * 10}
            width="8"
            height="3"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  )
}

export function MechanicalGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Rotating gear */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="98"
              y="65"
              width="4"
              height="10"
              fill="currentColor"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
        </motion.g>

        {/* Connecting lines */}
        <motion.line
          x1="50"
          y1="100"
          x2="70"
          y2="100"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.line
          x1="130"
          y1="100"
          x2="150"
          y2="100"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
        />
      </svg>
    </div>
  )
}

export function SEOGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Search magnifying glass */}
        <motion.g animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <circle cx="80" cy="80" r="25" fill="none" stroke="currentColor" strokeWidth="3" />
          <motion.line
            x1="100"
            y1="100"
            x2="120"
            y2="120"
            stroke="currentColor"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </motion.g>

        {/* Rising bars */}
        {[...Array(4)].map((_, i) => (
          <motion.rect
            key={i}
            x={130 + i * 12}
            y={120 - i * 8}
            width="8"
            height={20 + i * 8}
            fill="currentColor"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            style={{ transformOrigin: "bottom" }}
          />
        ))}
      </svg>
    </div>
  )
}

export function PatentGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Shield outline */}
        <motion.path
          d="M100 40 L140 60 L140 120 L100 160 L60 120 L60 60 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Checkmark */}
        <motion.path
          d="M80 100 L95 115 L120 85"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

        {/* Radiating lines */}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            x1="100"
            y1="100"
            x2={100 + Math.cos((i * Math.PI) / 3) * 40}
            y2={100 + Math.sin((i * Math.PI) / 3) * 40}
            stroke="currentColor"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}
      </svg>
    </div>
  )
}

export function IoTGraphic() {
  const [nodes] = useState([
    { x: 100, y: 100 },
    { x: 60, y: 70 },
    { x: 140, y: 70 },
    { x: 60, y: 130 },
    { x: 140, y: 130 },
  ])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Connection lines */}
        {nodes.slice(1).map((node, i) => (
          <motion.line
            key={i}
            x1="100"
            y1="100"
            x2={node.x}
            y2={node.y}
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={i === 0 ? "8" : "4"}
            fill="currentColor"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}

        {/* Data pulses */}
        <motion.circle
          cx="100"
          cy="100"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          animate={{ r: [20, 40, 60], opacity: [1, 0.5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </svg>
    </div>
  )
}

export function DigitalTransformationGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Transformation arrow */}
        <motion.path
          d="M40 100 L160 100"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.path
          d="M150 90 L160 100 L150 110"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

        {/* Before state */}
        <motion.rect
          x="20"
          y="80"
          width="15"
          height="40"
          fill="currentColor"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* After state */}
        <motion.g
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
        >
          <rect x="165" y="85" width="10" height="30" fill="currentColor" />
          <rect x="178" y="90" width="10" height="20" fill="currentColor" />
        </motion.g>
      </svg>
    </div>
  )
}
