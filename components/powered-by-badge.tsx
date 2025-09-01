"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Clock, DollarSign, Users, Award, X, CheckCircle, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PoweredByBadge() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (showSidebar && isMobile) {
      const timer = setTimeout(() => {
        setShowSidebar(false)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [showSidebar, isMobile])

  const handleClick = () => {
    setShowSidebar(true)
  }

  const handleClose = () => {
    setShowSidebar(false)
  }

  return (
    <>
      <div className="relative inline-block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-3 py-2 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-full text-xs text-gray-300 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]"
          onClick={handleClick}
        >
          <span className="text-xs ml-1 mr-1">powered by</span>
          <img src="/images/weltivation-logo.png" alt="Weltivation" className="w-28 h-7 object-contain scale-125" />
        </motion.div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={handleClose}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-full max-w-md bg-black/95 backdrop-blur-xl border-r border-gray-800 z-50 overflow-y-auto"
              onMouseEnter={() => !isMobile && setShowSidebar(true)}
            >
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="p-6 space-y-8">
                {/* Header with large logo */}
                <div className="text-center space-y-4 pt-8">
                  <div className="flex justify-center">
                    <img src="/images/weltivation-logo.png" alt="Weltivation" className="w-32 h-20 object-contain" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Partnership Program</h2>
                  <p className="text-gray-400">Exclusive benefits for our valued partners</p>
                </div>

                {/* Large powered by badge preview */}
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <div className="text-sm text-gray-400 mb-4 text-center">How it appears on your site:</div>
                  <div className="flex justify-center">
                    <div className="inline-flex items-center px-3 py-2 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-full text-xs text-gray-300">
                      <span className="ml-1 mr-1">powered by</span>
                      <img
                        src="/images/weltivation-logo.png"
                        alt="Weltivation"
                        className="w-28 h-7 object-contain scale-125"
                      />
                    </div>
                  </div>
                </div>

                {/* Benefits grid */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Star className="w-5 h-5 mr-2 text-emerald-400" />
                    Partnership Benefits
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl p-4 border border-emerald-500/20">
                      <div className="flex items-start space-x-3">
                        <DollarSign className="w-6 h-6 text-emerald-400 mt-1" />
                        <div>
                          <h4 className="font-bold text-emerald-400 text-lg">15% Development Discount</h4>
                          <p className="text-gray-300 text-sm">
                            Save thousands on your project cost with our partnership pricing
                          </p>
                          <Badge variant="outline" className="mt-2 text-emerald-400 border-emerald-400/30">
                            Up to $30,000 savings
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
                      <div className="flex items-start space-x-3">
                        <Clock className="w-6 h-6 text-green-400 mt-1" />
                        <div>
                          <h4 className="font-bold text-green-400 text-lg">3 Months Free Maintenance</h4>
                          <p className="text-gray-300 text-sm">
                            Includes updates, bug fixes, performance optimization, and technical support
                          </p>
                          <Badge variant="outline" className="mt-2 text-green-400 border-green-400/30">
                            $5,000 value
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-600/10 to-green-600/10 rounded-xl p-4 border border-emerald-600/20">
                      <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-emerald-300 mt-1" />
                        <div>
                          <h4 className="font-bold text-emerald-300 text-lg">Priority Support Queue</h4>
                          <p className="text-gray-300 text-sm">
                            24/7 dedicated support channel with guaranteed response times
                          </p>
                          <Badge variant="outline" className="mt-2 text-emerald-300 border-emerald-300/30">
                            VIP Access
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-600/10 to-emerald-400/10 rounded-xl p-4 border border-green-600/20">
                      <div className="flex items-start space-x-3">
                        <Award className="w-6 h-6 text-green-300 mt-1" />
                        <div>
                          <h4 className="font-bold text-green-300 text-lg">Flexible Badge Removal</h4>
                          <p className="text-gray-300 text-sm">
                            Remove the badge anytime after project completion at no additional cost
                          </p>
                          <Badge variant="outline" className="mt-2 text-green-300 border-green-300/30">
                            No strings attached
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-xl p-4 border border-emerald-400/20">
                      <div className="flex items-start space-x-3">
                        <Zap className="w-6 h-6 text-emerald-200 mt-1" />
                        <div>
                          <h4 className="font-bold text-emerald-200 text-lg">Performance Optimization</h4>
                          <p className="text-gray-300 text-sm">
                            Advanced performance monitoring and optimization included
                          </p>
                          <Badge variant="outline" className="mt-2 text-emerald-200 border-emerald-200/30">
                            99.9% uptime guarantee
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-400/10 to-emerald-300/10 rounded-xl p-4 border border-green-400/20">
                      <div className="flex items-start space-x-3">
                        <Globe className="w-6 h-6 text-green-200 mt-1" />
                        <div>
                          <h4 className="font-bold text-green-200 text-lg">Global CDN & Hosting</h4>
                          <p className="text-gray-300 text-sm">
                            Free global content delivery network and premium hosting for 6 months
                          </p>
                          <Badge variant="outline" className="mt-2 text-green-200 border-green-200/30">
                            $2,000 value
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total value */}
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-black mb-2">💰 Total Partnership Value</div>
                  <div className="text-3xl font-bold text-black">Up to $50,000</div>
                  <div className="text-black/80 text-sm mt-1">Average savings per partnership</div>
                </div>

                {/* Requirements */}
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                  <h4 className="font-bold text-white mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-emerald-400" />
                    Partnership Requirements
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Minimum project value of $5,000
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Badge displayed for minimum 6 months
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Professional website or application
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Compliance with our brand guidelines
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-black font-bold py-3"
                    onClick={() => (window.location.href = "/partnership")}
                  >
                    Apply for Partnership
                  </Button>
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
