"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Monitor, Users, Lock } from "lucide-react"
import Link from "next/link"

export function CorporateTvIcon() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      <Link
        href="/corporate-login"
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-border/50 bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <Monitor className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </Link>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-xl z-50 whitespace-nowrap"
        >
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Corporate Partners</span>
            <Lock className="w-3 h-3 text-muted-foreground" />
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border/50"></div>
        </motion.div>
      )}
    </div>
  )
}
