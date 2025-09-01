"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Building, DollarSign, Users, Target, X, ChevronDown, ChevronUp } from "lucide-react"

type ProfileData = {
  businessName?: string
  businessType?: string
  industry?: string
  companySize?: string
  location?: string
  contactName?: string
  email?: string
  phone?: string
  website?: string
  budget?: string
  timeline?: string
  projectType?: string
  currentChallenges?: string
  goals?: string
}

export function ProfileDropdown() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({})

  useEffect(() => {
    const handleShow = (e: any) => {
      setIsVisible(true)
      if (e.detail?.service) {
        setProfileData((prev) => ({ ...prev, projectType: e.detail.service }))
      }
    }

    const handleHide = () => {
      setIsVisible(false)
      setIsExpanded(false)
    }

    const handleUpdate = (e: any) => {
      setProfileData((prev) => ({ ...prev, ...e.detail }))
    }

    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener("showProfileDropdown", handleShow)
    window.addEventListener("hideProfileDropdown", handleHide)
    window.addEventListener("updateProfileDropdown", handleUpdate)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("showProfileDropdown", handleShow)
      window.removeEventListener("hideProfileDropdown", handleHide)
      window.removeEventListener("updateProfileDropdown", handleUpdate)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const getCompletionPercentage = () => {
    const totalFields = 13
    const filledFields = Object.values(profileData).filter((value) => value && value.trim() !== "").length
    return Math.round((filledFields / totalFields) * 100)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-16 left-4 right-4 md:left-auto md:right-4 md:w-96 z-40 backdrop-blur-xl bg-black/90 border border-gray-800 rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="p-4">
            {/* Header - Always Visible */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <img src="/images/weltivation-logo.png" alt="Weltivation" className="w-6 h-6" />
                <div>
                  <h3 className="text-sm font-bold text-white">Business Profile</h3>
                  <p className="text-xs text-gray-400">
                    {profileData.projectType ? `${profileData.projectType}` : "Project"} • {getCompletionPercentage()}%
                    complete
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-1.5 mb-3">
              <div
                className="bg-primary h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${getCompletionPercentage()}%` }}
              />
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <ProfileItem
                      label="Business"
                      value={profileData.businessName || "Not provided"}
                      icon={<Building className="w-3 h-3" />}
                    />
                    <ProfileItem
                      label="Type"
                      value={profileData.businessType || "Not specified"}
                      icon={<Target className="w-3 h-3" />}
                    />
                    <ProfileItem
                      label="Size"
                      value={profileData.companySize || "Not specified"}
                      icon={<Users className="w-3 h-3" />}
                    />
                    <ProfileItem
                      label="Budget"
                      value={profileData.budget || "Not specified"}
                      icon={<DollarSign className="w-3 h-3" />}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Actions - Always Visible */}
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("openProfileForm"))
                }}
                className="flex-1 px-3 py-1.5 bg-gray-800 text-white border border-gray-700 rounded-md hover:bg-gray-700 transition-all text-xs font-medium"
              >
                Complete
              </button>
              <button
                onClick={() => (window.location.href = "/consultation")}
                className="flex-1 px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-all text-xs font-medium"
              >
                Schedule
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ProfileItem({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-gray-800/50 rounded-md p-2">
      <div className="flex items-center space-x-1 mb-1">
        <div className="text-primary">{icon}</div>
        <span className="text-xs text-gray-400 font-medium">{label}</span>
      </div>
      <p className="text-xs text-white font-medium truncate" title={value}>
        {value}
      </p>
    </div>
  )
}
