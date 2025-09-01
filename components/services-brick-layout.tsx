"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  Globe,
  Smartphone,
  Cog,
  Code,
  Database,
  Palette,
  Zap,
  Shield,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Star,
  DollarSign,
  Clock,
  Sparkles,
  Target,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesBrickLayout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications that scale with your business growth",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-emerald-500 to-green-600",
      price: "$15K+",
      timeline: "6-16 weeks",
      rating: "4.9",
      projects: "500+",
      features: ["React/Next.js", "Cloud Hosting", "API Integration", "SEO Ready"],
      size: "large", // Takes 2 columns
    },
    {
      title: "Mobile Apps",
      description: "Native iOS & Android applications",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      price: "$25K+",
      timeline: "8-20 weeks",
      rating: "4.8",
      projects: "200+",
      features: ["React Native", "App Store Ready"],
      size: "medium",
    },
    {
      title: "Product Development",
      description: "Physical products from concept to manufacturing",
      icon: <Cog className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      price: "$30K+",
      timeline: "12-32 weeks",
      rating: "5.0",
      projects: "150+",
      features: ["3D Design", "Prototyping"],
      size: "medium",
    },
    {
      title: "Custom Software",
      description: "Enterprise software solutions tailored to your needs",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600",
      price: "$20K+",
      timeline: "10-24 weeks",
      rating: "4.9",
      projects: "300+",
      features: ["Custom Logic", "Automation", "Integrations", "Scalable Architecture"],
      size: "large",
    },
    {
      title: "Database Solutions",
      description: "High-performance data architecture",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-600",
      price: "$10K+",
      timeline: "6-16 weeks",
      rating: "4.9",
      projects: "250+",
      features: ["Performance Tuning", "Analytics"],
      size: "small",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that converts",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      price: "$8K+",
      timeline: "4-12 weeks",
      rating: "4.8",
      projects: "400+",
      features: ["User Research", "Prototyping"],
      size: "small",
    },
    {
      title: "AI & Automation",
      description: "Intelligent automation solutions",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-600",
      price: "$25K+",
      timeline: "8-20 weeks",
      rating: "4.9",
      projects: "100+",
      features: ["Machine Learning", "Process Automation"],
      size: "medium",
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-red-500 to-orange-600",
      price: "$15K+",
      timeline: "6-18 weeks",
      rating: "5.0",
      projects: "180+",
      features: ["Threat Detection", "Compliance"],
      size: "small",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600",
      price: "$12K+",
      timeline: "4-12 weeks",
      rating: "4.9",
      projects: "220+",
      features: ["AWS/Azure", "Auto-scaling", "Monitoring", "Cost Optimization"],
      size: "large",
    },
  ]

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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
              <span className="text-lg font-bold text-emerald-400">Our Services</span>
              <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-white">Services We </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                Offer
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions that drive innovation and growth for your business
            </p>
          </motion.div>

          {/* Brick Layout Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative ${
                  service.size === "large"
                    ? "md:col-span-2"
                    : service.size === "medium"
                      ? "md:col-span-1 lg:col-span-2"
                      : "md:col-span-1"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  scale: 1.02,
                  z: 50,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Card
                  className={`relative h-full w-full rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 ${
                    service.size === "large"
                      ? "min-h-[320px]"
                      : service.size === "medium"
                        ? "min-h-[280px]"
                        : "min-h-[240px]"
                  }`}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 transition-opacity duration-500`}
                    animate={{
                      opacity: hoveredCard === index ? 0.15 : 0.05,
                    }}
                  />

                  <CardContent className="relative z-10 p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-white">{service.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                      </div>

                      {/* Stats for larger cards */}
                      {service.size === "large" && (
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center p-2 bg-gray-800/30 rounded">
                            <div className="text-sm font-bold text-emerald-400">{service.price}</div>
                            <div className="text-xs text-gray-500">From</div>
                          </div>
                          <div className="text-center p-2 bg-gray-800/30 rounded">
                            <div className="text-sm font-bold text-blue-400">{service.timeline}</div>
                            <div className="text-xs text-gray-500">Timeline</div>
                          </div>
                          <div className="text-center p-2 bg-gray-800/30 rounded">
                            <div className="text-sm font-bold text-purple-400">{service.projects}</div>
                            <div className="text-xs text-gray-500">Projects</div>
                          </div>
                        </div>
                      )}

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.slice(0, service.size === "large" ? 4 : 2).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-2 text-xs"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span className="text-gray-400">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Pricing for smaller cards */}
                      {service.size !== "large" && (
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">{service.price}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3 text-blue-400" />
                            <span className="text-blue-400 font-medium">{service.timeline}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 group-hover:border-emerald-500 group-hover:text-emerald-400 relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20"
                          initial={{ x: "-100%" }}
                          animate={{ x: hoveredCard === index ? "0%" : "-100%" }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10">Learn More</span>
                        <motion.div
                          className="relative z-10"
                          animate={{ x: hoveredCard === index ? 5 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-12 py-4 text-lg"
              >
                <Target className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
