"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown, ChevronUp, Sparkles, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type ProfileData = {
  service?: string
  businessName?: string
  businessType?: string
  companySize?: string
  budget?: string
  timeline?: string
  contactName?: string
  email?: string
}

export function BusinessProfileHeader() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({})
  const [pulseAnimation, setPulseAnimation] = useState(false)

  useEffect(() => {
    const handleShow = (e: any) => {
      setIsVisible(true)
      setPulseAnimation(true)
      setTimeout(() => setPulseAnimation(false), 1000)
      if (e.detail?.service) {
        setProfileData((prev) => ({ ...prev, service: e.detail.service }))
      }
    }

    const handleHide = () => {
      setIsVisible(false)
      setIsExpanded(false)
    }

    const handleUpdate = (e: any) => {
      setProfileData((prev) => ({ ...prev, ...e.detail }))
      setPulseAnimation(true)
      setTimeout(() => setPulseAnimation(false), 500)
    }

    window.addEventListener("showProfileDropdown", handleShow)
    window.addEventListener("hideProfileDropdown", handleHide)
    window.addEventListener("updateProfileDropdown", handleUpdate)

    return () => {
      window.removeEventListener("showProfileDropdown", handleShow)
      window.removeEventListener("hideProfileDropdown", handleHide)
      window.removeEventListener("updateProfileDropdown", handleUpdate)
    }
  }, [])

  const getCompletionPercentage = () => {
    const totalFields = 8
    const filledFields = Object.values(profileData).filter((value) => value && value.trim() !== "").length
    return Math.round((filledFields / totalFields) * 100)
  }

  const completionPercentage = getCompletionPercentage()

  const getDisplayEntries = () => {
    const entries = []
    if (profileData.service) entries.push({ label: "Service", value: profileData.service, color: "text-emerald-400" })
    if (profileData.businessName)
      entries.push({ label: "Business", value: profileData.businessName, color: "text-blue-400" })
    if (profileData.businessType)
      entries.push({ label: "Type", value: profileData.businessType, color: "text-purple-400" })
    if (profileData.budget) entries.push({ label: "Budget", value: profileData.budget, color: "text-yellow-400" })
    if (profileData.timeline) entries.push({ label: "Timeline", value: profileData.timeline, color: "text-cyan-400" })
    if (profileData.contactName)
      entries.push({ label: "Contact", value: profileData.contactName, color: "text-pink-400" })
    return entries
  }

  const displayEntries = getDisplayEntries()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0, y: -20 }}
          animate={{ height: "auto", opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-16 left-0 right-0 z-40 bg-black/20 backdrop-blur-2xl border-b border-emerald-500/20 shadow-xl"
        >
          {/* Subtle animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/3 to-blue-500/3"
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(16,185,129,0.03) 0%, rgba(59,130,246,0.03) 100%)",
                  "linear-gradient(90deg, rgba(59,130,246,0.03) 0%, rgba(147,51,234,0.03) 100%)",
                  "linear-gradient(90deg, rgba(147,51,234,0.03) 0%, rgba(16,185,129,0.03) 100%)",
                  "linear-gradient(90deg, rgba(16,185,129,0.03) 0%, rgba(59,130,246,0.03) 100%)",
                ],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>

          <div className="relative">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="py-3 sm:py-4">
                {/* Main Profile Display */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    {/* Compact Progress Ring */}
                    <motion.div
                      className="relative w-12 h-12 flex-shrink-0"
                      animate={pulseAnimation ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="20" stroke="rgba(75, 85, 99, 0.3)" strokeWidth="3" fill="none" />
                        <motion.circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke="url(#progressGradient)"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 20}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                          animate={{ strokeDashoffset: 2 * Math.PI * 20 * (1 - completionPercentage / 100) }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="text-white font-bold text-xs"
                          animate={{ scale: pulseAnimation ? [1, 1.2, 1] : 1 }}
                        >
                          {completionPercentage}%
                        </motion.div>
                      </div>
                      {completionPercentage >= 100 && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-white" />
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Compact Entries Display */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        {displayEntries.slice(0, 4).map((entry, index) => (
                          <motion.div
                            key={entry.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-1.5 px-2.5 py-1 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-700/30 hover:border-emerald-500/20 transition-all duration-300"
                          >
                            <span className="text-xs text-gray-400 font-medium">{entry.label}:</span>
                            <span className={`text-xs font-semibold ${entry.color} truncate max-w-20`}>
                              {entry.value}
                            </span>
                          </motion.div>
                        ))}
                        {displayEntries.length > 4 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="px-2.5 py-1 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 backdrop-blur-sm rounded-full border border-emerald-500/20"
                          >
                            <span className="text-xs text-emerald-400 font-semibold">+{displayEntries.length - 4}</span>
                          </motion.div>
                        )}
                      </div>

                      {/* Compact Status Indicator */}
                      <div className="flex items-center space-x-2">
                        <motion.div
                          className={`flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            completionPercentage >= 100
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                              : completionPercentage >= 50
                                ? "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                                : "bg-gray-500/15 text-gray-400 border border-gray-500/20"
                          }`}
                          animate={pulseAnimation ? { scale: [1, 1.05, 1] } : {}}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              completionPercentage >= 100
                                ? "bg-emerald-400"
                                : completionPercentage >= 50
                                  ? "bg-blue-400"
                                  : "bg-gray-400"
                            }`}
                          />
                          <span>
                            {completionPercentage >= 100
                              ? "Complete"
                              : completionPercentage >= 50
                                ? "In Progress"
                                : "Starting"}
                          </span>
                        </motion.div>

                        {completionPercentage >= 100 && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-1 text-emerald-400"
                          >
                            <TrendingUp className="w-3 h-3" />
                            <span className="text-xs font-medium">Ready</span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600/30 bg-gray-800/20 text-gray-300 hover:bg-gray-700/30 text-xs backdrop-blur-sm h-7 px-2"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600/30 bg-gray-800/20 text-gray-300 hover:bg-gray-700/30 text-xs backdrop-blur-sm h-7 px-3 flex items-center space-x-1"
                      onClick={() => (window.location.href = "/consultation")}
                    >
                      <span>Schedule</span>
                      <ArrowRight className="w-3 h-3" />
                    </Button>

                    <motion.button
                      onClick={() => setIsVisible(false)}
                      className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-800/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-700/20"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {displayEntries.map((entry, index) => (
                          <motion.div
                            key={entry.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-gray-800/15 backdrop-blur-sm rounded-lg p-3 border border-gray-700/20 hover:border-emerald-500/20 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs text-gray-400 font-medium">{entry.label}</span>
                              <div className={`w-1.5 h-1.5 rounded-full ${entry.color.replace("text-", "bg-")}`} />
                            </div>
                            <p className={`text-sm font-semibold ${entry.color} truncate`} title={entry.value}>
                              {entry.value}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
