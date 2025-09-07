"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Copy } from "lucide-react"
import { motion, AnimatePresence, useMotionValue, useTransform, animate, MotionConfig } from "framer-motion"

function isValidEthAddress(addr: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(addr.trim())
}

export default function Home() {
  const [address, setAddress] = useState("")
  const [balance, setBalance] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const valueMV = useMotionValue(0)
  const rounded = useTransform(valueMV, (v) => {
    const num = Number.isFinite(v) ? (v as number) : 0
    return num.toFixed(5)
  })

  async function handleCheck() {
    setError(null)
    setBalance(null)
    valueMV.set(0)
    if (!isValidEthAddress(address)) {
      setError("Please enter a valid Ethereum address (0x... with 40 hex characters).")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/balance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data?.error || "Failed to fetch balance.")
      } else {
        setBalance(data.balanceEther)
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (balance !== null) {
      const target = Number.parseFloat(balance)
      if (Number.isFinite(target)) {
        animate(valueMV, target, { duration: 0.6, ease: [0.22, 1, 0.36, 1] })
      }
    }
  }, [balance, valueMV])

  async function handlePaste() {
    try {
      const text = await navigator.clipboard.readText()
      if (text) setAddress(text.trim())
    } catch {
      setError("Clipboard access blocked. Paste manually with Ctrl/⌘+V.")
    }
  }

  async function handleCopyBalance() {
    try {
      if (balance) {
        await navigator.clipboard.writeText(balance)
      }
    } catch {
      setError("Clipboard write blocked. Copy manually.")
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !loading && address) {
      void handleCheck()
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.main
        className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-foreground"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full max-w-xl">
          <motion.div
            className="text-center mb-8 py-12 rounded-3xl shadow-xl bg-white/80 backdrop-blur-md"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.35 }}
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">ETH Balance Checker</h1>
            <p className="text-lg text-gray-700 mb-6">Check your Ethereum wallet balance instantly and securely.</p>
            {/* <Button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
              Check ETH Balance
            </Button> */}
          </motion.div>

          <motion.div
            className="will-change-transform"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.995 }}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl">Check Balance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="eth-address" className="text-sm text-muted-foreground">
                    Ethereum Address
                  </label>
                  <motion.div
                    className="group flex items-center gap-2 rounded-md ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/40 transition"
                    animate={error ? { x: [0, -4, 4, -3, 3, -2, 2, 0] } : { x: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Input
                      id="eth-address"
                      placeholder="0x0000000000000000000000000000000000000000"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      onKeyDown={handleKeyDown}
                      aria-invalid={!!error}
                      aria-describedby={error ? "eth-error" : undefined}
                      className="transition focus-visible:ring-2 focus-visible:ring-primary/50 flex-1"
                    />
                    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                      <Button type="button" variant="secondary" size="sm" onClick={handlePaste}>
                        Paste
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                    <Button onClick={handleCheck} disabled={loading || !address} className="min-w-36 transition">
                      {loading ? (
                        <span className="inline-flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Checking...
                        </span>
                      ) : (
                        "Check Balance"
                      )}
                    </Button>
                  </motion.div>

                  {loading && (
                    <motion.span
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Fetching from Etherscan...
                    </motion.span>
                  )}
                </div>

                <div aria-live="polite" className="min-h-10">
                  <AnimatePresence mode="popLayout">
                    {error && (
                      <motion.p
                        id="eth-error"
                        role="alert"
                        className="text-sm text-red-500"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {balance !== null && !error && !loading && (
                      <motion.div
                        key="balance-result"
                        className="rounded-md border border-border bg-background p-4"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="text-sm text-muted-foreground">Balance</p>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-semibold">
                            <motion.span>{rounded}</motion.span> ETH
                          </p>
                          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              aria-label="Copy balance"
                              onClick={handleCopyBalance}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.main>
    </MotionConfig>
  )
}
