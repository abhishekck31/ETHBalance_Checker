"use client"

import type React from "react"

import type { ReactElement } from "react"
import { DashboardChart } from "@/components/dashboard-chart"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowUpRight,
  ChevronRight,
  Star,
  Award,
  Users,
  TrendingUp,
  Zap,
  CheckCircle,
  ThumbsUp,
  Rocket,
  Cog,
  Globe,
  Smartphone,
  Package,
  Building2,
  Laptop,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ExpertiseSection(): ReactElement {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const zeroOneRef = useRef(null)
  const zeroOneInView = useInView(zeroOneRef, { once: true, amount: 0.5 })
  const [showOne, setShowOne] = useState(false)

  useEffect(() => {
    if (zeroOneInView) {
      const timer = setTimeout(() => {
        setShowOne(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [zeroOneInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section header with 0-0 to 0-1 animation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div
                ref={zeroOneRef}
                className="text-[120px] sm:text-[180px] font-bold leading-none text-primary/80 relative"
              >
                0-
                {showOne ? (
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    1
                  </motion.span>
                ) : (
                  <motion.span initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    0
                  </motion.span>
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <h2 className="text-2xl font-bold">WELTIVATION™</h2>
                  <motion.div
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    99+
                  </motion.div>
                </div>
                <p className="text-primary text-sm">Trusted by industry leaders</p>
                <div className="flex text-primary">
                  <span>★★★★★</span>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                We help brands grow with strategic design that's thoughtful, visually bold, and built to make an
                impression.
              </h3>
            </motion.div>
          </div>

          {/* First row of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Enhanced Service Selection Interface */}
            <motion.div variants={itemVariants} className="group">
              <ServiceSelectionCard />
            </motion.div>

            {/* Card 2: Enhanced 45% stat with viewport trigger */}
            <motion.div variants={itemVariants} className="group">
              <div className="h-full rounded-lg border border-border bg-background/50 p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-6 right-6">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-muted-foreground">Fact 01</p>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Star className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>

                  <ViewportTriggered45Percent />

                  <p className="text-muted-foreground">of clients recommend us to other clients</p>

                  {/* Enhanced testimonial section */}
                  <div className="pt-2 pb-4">
                    <div className="flex items-start space-x-2">
                      <ThumbsUp className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground italic">
                        "Their expertise in web development and business systems transformed our operations completely."
                      </p>
                    </div>
                  </div>

                  {/* Multi-row company ticker */}
                  <div className="relative h-16 overflow-hidden bg-gradient-to-r from-muted/5 via-muted/10 to-muted/5 rounded-md border border-border/30">
                    <CompanyLogoTicker />
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full text-primary text-xs flex items-center space-x-1 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Award className="w-3 h-3" />
                      <span className="font-medium">Client Satisfaction</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-gray-500/10 to-gray-500/5 border border-gray-500/20 rounded-full text-gray-400 text-xs flex items-center space-x-1 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Users className="w-3 h-3" />
                      <span className="font-medium">B2B Partners</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-full text-emerald-400 text-xs flex items-center space-x-1 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <TrendingUp className="w-3 h-3" />
                      <span className="font-medium">Growth Rate</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-full text-amber-400 text-xs flex items-center space-x-1 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Zap className="w-3 h-3" />
                      <span className="font-medium">Innovation</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: GlassPatch with working video */}
            <motion.div variants={itemVariants} className="group">
              <div className="h-full rounded-lg border border-border bg-background/50 overflow-hidden hover:border-primary/50 transition-all duration-300 relative">
                <div className="absolute top-6 right-6 z-10">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                </div>

                <div className="absolute inset-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    onLoadStart={(e) => {
                      const video = e.target as HTMLVideoElement
                      video.play().catch(() => {
                        console.log("Video autoplay failed, user interaction required")
                      })
                    }}
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4757%20%281%29.mp4-zuZGmYHOoQtajH4tuZKUVOr3qtbneV.mov" type="video/mp4" />
                    <source src="/videos/glasspatch-demo.webm" type="video/webm" />
                  </video>
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    <Badge variant="outline" className="bg-background/20 text-white border-white/20 mb-4">
                      GLASSPATCH
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      $2M raised: the strategy behind Glass Patch's growth
                    </h3>
                    <button className="text-primary flex items-center text-sm group-hover:underline">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      See case study
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second row of cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 4: Animated Timeline Process */}
            <motion.div variants={itemVariants} className="group">
              <div className="h-full rounded-lg border border-border bg-background/50 p-6 hover:border-primary/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">A streamlined process, executed with methodical care.</h3>
                    <p className="text-muted-foreground">
                      We transform overwhelming brands into standout experiences, built to reflect the quality,
                      ambition, and greatness
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="text-sm">Website & branding for Sony</p>
                    </div>

                    <AnimatedTimelineChart />
                  </div>

                  <div className="pt-4">
                    <button className="text-primary flex items-center text-sm group-hover:underline">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      Learn about our process
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Fixed $12M chart */}
            <motion.div variants={itemVariants} className="group">
              <div className="h-full rounded-lg border border-border bg-background/50 p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-6 right-6">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Fact 02</p>
                      <ViewportTriggeredCountUp />
                      <p className="text-muted-foreground">Raised by the brands we've partnered with</p>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-2 bg-background/50 backdrop-blur-sm border border-border/30 rounded-full self-start lg:self-center">
                      <span className="text-xs text-muted-foreground">powered by</span>
                      <img src="/images/weltivation-logo.png" alt="Weltivation" className="h-6" />
                    </div>
                  </div>

                  <div className="pt-6 h-[350px] relative">
                    <DashboardChart />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ViewportTriggered45Percent(): ReactElement {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < 45) {
            return prev + 1
          }
          clearInterval(timer)
          return 45
        })
      }, 50)

      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <div ref={ref} className="relative">
      <h3 className="text-6xl font-bold">{count}%</h3>

      {/* Enhanced stats with additional metrics */}
      <div className="flex flex-wrap gap-4 mt-2">
        <div className="flex items-center space-x-1">
          <CheckCircle className="w-4 h-4 text-primary" />
          <span className="text-sm">Verified</span>
        </div>
        <div className="flex items-center space-x-1">
          <Rocket className="w-4 h-4 text-primary" />
          <span className="text-sm">+32% Growth</span>
        </div>
      </div>

      {/* Small floating animation */}
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
      />
    </div>
  )
}

function ViewportTriggeredCountUp(): ReactElement {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < 12) {
            return prev + 1
          }
          clearInterval(timer)
          return 12
        })
      }, 200)

      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <h3 ref={ref} className="text-5xl font-bold">
      ${count}M
    </h3>
  )
}

function AnimatedTimelineChart(): ReactElement {
  const [activeStage, setActiveStage] = useState(0)

  const stages = [
    { name: "Discovery", duration: "1 Week", position: 20, color: "#6b7280" },
    { name: "Concept", duration: "2 Weeks", position: 50, color: "#6b7280" },
    { name: "Execution", duration: "3 Weeks", position: 80, color: "#6b7280" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-32 bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4">
      {/* Background timeline line */}
      <div className="absolute top-1/2 left-4 right-4 h-1 bg-muted/30 rounded-full"></div>

      {/* Animated progress line */}
      <motion.div
        className="absolute top-1/2 left-4 h-1 bg-primary rounded-full"
        animate={{ width: `${stages[activeStage].position}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Stage markers */}
      {stages.map((stage, index) => (
        <motion.div
          key={stage.name}
          className="absolute"
          style={{ left: `${stage.position}%`, top: "50%", transform: "translate(-50%, -50%)" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
        >
          {/* Circle marker */}
          <motion.div
            className={`w-5 h-5 rounded-full border-2 border-background relative z-10 transition-colors duration-500 ${
              index <= activeStage ? "bg-primary" : "bg-muted/50"
            }`}
            animate={index === activeStage ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.5 }}
          />

          {/* Stage label above */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-center">
            <motion.div
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-500 ${
                index <= activeStage ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground"
              }`}
            >
              {stage.name}
            </motion.div>
          </div>

          {/* Duration label below */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
            <span className="text-xs text-muted-foreground whitespace-nowrap">{stage.duration}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function CompanyLogoTicker(): ReactElement {
  return (
    <div className="relative h-16 overflow-hidden">
      {/* First row - moving left */}
      <motion.div
        className="absolute top-1 whitespace-nowrap flex items-center gap-8"
        animate={{
          x: [0, -1500],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 30,
            ease: "linear",
          },
        }}
      >
        <div className="h-5 w-auto">
          <img
            src="/images/weltivation-logo.png"
            alt="Weltivation"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/placeholder-jo7vj.png"
            alt="NVIDIA"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/images/nicfound-logo.png"
            alt="NicFound"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/google-search-results.png"
            alt="Google"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/fisher-labs-sign.png"
            alt="Fisher Labs"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/bevel-razors.png"
            alt="Bevel Razers"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/images/weltivation-logo.png"
            alt="Weltivation"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/chatchill-generic.png"
            alt="Chatchill"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Duplicate set for seamless looping */}
        <div className="h-5 w-auto">
          <img
            src="/images/weltivation-logo.png"
            alt="Weltivation"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/placeholder-jo7vj.png"
            alt="NVIDIA"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/images/nicfound-logo.png"
            alt="NicFound"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/google-search-results.png"
            alt="Google"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </motion.div>

      {/* Second row - moving right */}
      <motion.div
        className="absolute top-9 whitespace-nowrap flex items-center gap-8"
        animate={{
          x: [-1500, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 35,
            ease: "linear",
          },
        }}
      >
        <div className="h-5 w-auto">
          <img
            src="/images/pufftrak-logo.png"
            alt="PuffTrak"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/fisher-labs-sign.png"
            alt="Fisher Labs"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/bevel-razors.png"
            alt="Bevel Razers"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/images/weltivation-logo.png"
            alt="Weltivation"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/google-search-results.png"
            alt="Google"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/images/pufftrak-logo.png"
            alt="PuffTrak"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/chatchill-generic.png"
            alt="Chatchill"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/images/nicfound-logo.png"
            alt="NicFound"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Duplicate set for seamless looping */}
        <div className="h-5 w-auto">
          <img
            src="/images/pufftrak-logo.png"
            alt="PuffTrak"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/fisher-labs-sign.png"
            alt="Fisher Labs"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/bevel-razors.png"
            alt="Bevel Razers"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="h-5 w-auto">
          <img
            src="/images/weltivation-logo.png"
            alt="Weltivation"
            className="h-5 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </motion.div>
    </div>
  )
}

function ServiceSelectionCard(): ReactElement {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const services = [
    {
      id: "mechanical",
      name: "Mechanical",
      icon: <Cog className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      hoverColor: "from-orange-400 to-orange-500",
      borderColor: "border-orange-500/30",
      textColor: "text-orange-400",
    },
    {
      id: "digital",
      name: "Digital Systems",
      icon: <Laptop className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-400 to-blue-500",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
    },
    {
      id: "website",
      name: "Website",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      hoverColor: "from-green-400 to-green-500",
      borderColor: "border-green-500/30",
      textColor: "text-green-400",
    },
    {
      id: "mobile",
      name: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      hoverColor: "from-purple-400 to-purple-500",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
    },
    {
      id: "product",
      name: "Product Dev",
      icon: <Package className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      hoverColor: "from-red-400 to-red-500",
      borderColor: "border-red-500/30",
      textColor: "text-red-400",
    },
    {
      id: "architecture",
      name: "Architecture Design",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      hoverColor: "from-cyan-400 to-cyan-500",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-400",
    },
  ]

  const questions = [
    {
      id: "businessName",
      question: "What's your business name?",
      type: "input",
      placeholder: "Enter your business name",
    },
    {
      id: "businessType",
      question: "What type of business do you have?",
      options: ["Startup", "Small Business", "Enterprise", "Non-Profit"],
    },
    {
      id: "companySize",
      question: "How many employees does your company have?",
      options: ["1-10", "11-50", "51-200", "201+"],
    },
    {
      id: "goal",
      question: "What's your primary goal?",
      options: ["Increase Revenue", "Improve Efficiency", "Scale Operations", "Digital Transformation"],
    },
    {
      id: "budget",
      question: "What's your budget range?",
      options: ["$1K-$5K", "$5K-$15K", "$15K-$50K", "$50K+"],
    },
    {
      id: "timeline",
      question: "What's your timeline?",
      options: ["ASAP", "1-3 Months", "3-6 Months", "6+ Months"],
    },
    {
      id: "location",
      question: "Where is your business located?",
      options: ["North America", "Europe", "Asia", "Other"],
    },
    {
      id: "contactName",
      question: "Who is the primary contact for this project?",
      type: "input",
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      question: "What's the best email to reach you?",
      type: "input",
      placeholder: "Enter your email address",
    },
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setCurrentQuestion(0)
    setAnswers({})
    setIsCompleted(false)
  }

  const handleAnswerSelect = (answer: string) => {
    const currentQuestionData = questions[currentQuestion]
    const newAnswers = { ...answers, [currentQuestionData.id]: answer }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsCompleted(true)
      // Send email with inquiry details
      sendInquiryEmail(newAnswers, selectedService)
    }
  }

  const handleCustomAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const answer = formData.get("customAnswer") as string

    if (answer && answer.trim()) {
      handleAnswerSelect(answer.trim())
    }
  }

  const sendInquiryEmail = async (inquiryData: Record<string, string>, serviceType: string | null) => {
    try {
      const selectedServiceData = services.find((s) => s.id === serviceType)
      const emailBody = `
New Consultation Inquiry

Service: ${selectedServiceData?.name || "Unknown"}
Business Name: ${inquiryData.businessName || "Not provided"}
Business Type: ${inquiryData.businessType || "Not provided"}
Company Size: ${inquiryData.companySize || "Not provided"}
Primary Goal: ${inquiryData.goal || "Not provided"}
Budget: ${inquiryData.budget || "Not provided"}
Timeline: ${inquiryData.timeline || "Not provided"}
Location: ${inquiryData.location || "Not provided"}
Contact Name: ${inquiryData.contactName || "Not provided"}
Email: ${inquiryData.email || "Not provided"}

Submitted at: ${new Date().toLocaleString()}
    `

      // This would typically be handled by a server endpoint
      // For now, we'll use mailto as a fallback
      const mailtoLink = `mailto:andrdyer@gmail.com?subject=New Consultation Inquiry - ${selectedServiceData?.name}&body=${encodeURIComponent(emailBody)}`
      window.open(mailtoLink)
    } catch (error) {
      console.error("Error sending inquiry:", error)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else {
      setSelectedService(null)
      setCurrentQuestion(0)
      setAnswers({})
      setIsCompleted(false)
    }
  }

  if (selectedService && !isCompleted) {
    const selectedServiceData = services.find((s) => s.id === selectedService)
    const currentQuestionData = questions[currentQuestion]

    return (
      <div className="h-full rounded-lg border border-border bg-black text-white overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${selectedServiceData?.color} flex items-center justify-center`}
              >
                {selectedServiceData?.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{selectedServiceData?.name} Consultation</h3>
                <p className="text-sm text-gray-400">
                  Step {currentQuestion + 1} of {questions.length}
                </p>
              </div>
            </div>
            <button onClick={handleBack} className="flex items-center text-gray-400 hover:text-white text-sm">
              ← Back
            </button>
          </div>
        </div>

        {/* Question */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-6 text-center">{currentQuestionData.question}</h2>

          {currentQuestionData.type === "input" ? (
            <form onSubmit={handleCustomAnswer} className="space-y-4">
              <input
                type={currentQuestionData.id === "email" ? "email" : "text"}
                name="customAnswer"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                placeholder={currentQuestionData.placeholder}
                required
              />
              <button
                type="submit"
                className="w-full p-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors"
              >
                Continue
              </button>
            </form>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {currentQuestionData.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  className="p-3 border border-gray-700 rounded-lg hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 text-left"
                >
                  <span className="text-green-400 font-medium text-sm">{option}</span>
                </button>
              ))}
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">{questions.length - currentQuestion - 1} questions remaining</p>
          </div>
        </div>
      </div>
    )
  }

  if (isCompleted) {
    return (
      <div className="h-full rounded-lg border border-border bg-black text-white p-6 flex flex-col justify-center items-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <div className="w-8 h-8 bg-green-500 rounded-full" />
          </div>
          <h3 className="text-xl font-bold">Thank you!</h3>
          <p className="text-gray-400 text-sm">
            Your inquiry has been sent to our team. We'll get back to you within 24 hours with a customized
            consultation.
          </p>
          <div className="pt-4">
            <button
              onClick={() => (window.location.href = "/consultation")}
              className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors text-sm font-medium"
            >
              Schedule Consultation
            </button>
          </div>
          <button
            onClick={() => {
              setSelectedService(null)
              setCurrentQuestion(0)
              setAnswers({})
              setIsCompleted(false)
            }}
            className="mt-4 text-sm text-gray-400 hover:text-white"
          >
            Start Another Consultation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full rounded-lg border border-border bg-background/50 p-6 hover:border-primary/50 transition-all duration-300">
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">Select a Service</h3>
          <p className="text-muted-foreground">Choose the service you're interested in to start a consultation</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => handleServiceSelect(service.id)}
              className="relative p-4 rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}
              />

              {/* Border */}
              <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-300" />

              {/* Animated glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12">
                  <motion.div
                    className="h-full w-1/3 bg-white/10"
                    animate={{
                      x: ["-100%", "400%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "easeInOut",
                      repeatDelay: 0.5,
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col items-center space-y-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <span
                  className={`text-sm font-medium ${service.textColor} group-hover:text-white transition-colors duration-300`}
                >
                  {service.name}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
