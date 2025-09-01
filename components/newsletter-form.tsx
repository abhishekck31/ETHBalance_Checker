"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setEmail("")
    }, 500)
  }

  return (
    <div className="max-w-sm">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="bg-background/30 border border-border/50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-full"
          />
          <button
            type="submit"
            className="p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <p className="text-sm text-primary">Thanks for subscribing!</p>
      )}
    </div>
  )
}
