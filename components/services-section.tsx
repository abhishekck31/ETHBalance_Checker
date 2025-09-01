"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Globe,
  Cog,
  Smartphone,
  Code,
  Database,
  Palette,
  ArrowRight,
  Star,
  Users,
  CheckCircle,
  Target,
  TrendingUp,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Rocket,
  Shield,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeService, setActiveService] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const services = [
    {
      id: "web",
      title: "Enterprise Web Development",
      shortTitle: "Web Development",
      tagline: "Digital Excellence",
      description:
        "Fortune 500-grade applications with enterprise security and scalability that drive real business results",
      icon: <Globe className="w-12 h-12" />,
      gradient: "from-blue-500 via-cyan-400 to-blue-600",
      bgGradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
      accentColor: "text-blue-400",
      price: "$15K - $200K",
      timeline: "8-16 weeks",
      rating: 4.9,
      projects: 150,
      keyFeatures: [
        "Scalable Cloud Architecture",
        "24/7 Monitoring & Support",
        "Advanced API Integration",
        "Performance Optimization",
      ],
      results: "3x faster time to market • 40% increase in customer acquisition • 99.9% system reliability",
      technologies: ["Next.js", "React", "Node.js", "AWS", "PostgreSQL"],
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      shortTitle: "Mobile Apps",
      tagline: "Mobile Innovation",
      description:
        "Native iOS & Android applications that users love, with seamless experiences and cutting-edge functionality",
      icon: <Smartphone className="w-12 h-12" />,
      gradient: "from-purple-500 via-pink-400 to-purple-600",
      bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
      accentColor: "text-purple-400",
      price: "$25K - $150K",
      timeline: "10-20 weeks",
      rating: 4.8,
      projects: 85,
      keyFeatures: ["Native Performance", "App Store Optimization", "Push Notifications", "Offline Functionality"],
      results: "4.8+ App Store ratings • 1M+ downloads • ROI within 6 months",
      technologies: ["React Native", "Swift", "Kotlin", "Firebase"],
    },
    {
      id: "engineering",
      title: "Precision Engineering",
      shortTitle: "Engineering",
      tagline: "Mechanical Mastery",
      description:
        "NASA-grade mechanical engineering solutions for mission-critical applications with zero-defect precision",
      icon: <Cog className="w-12 h-12" />,
      gradient: "from-orange-500 via-red-400 to-orange-600",
      bgGradient: "from-orange-500/20 via-red-400/10 to-orange-600/20",
      accentColor: "text-orange-400",
      price: "$10K - $100K",
      timeline: "6-12 weeks",
      rating: 5.0,
      projects: 45,
      keyFeatures: ["Advanced CAD/CAM", "FEA Analysis", "Rapid Prototyping", "Quality Assurance"],
      results: "99.8% precision accuracy • Zero defect rate • 50% cost reduction",
      technologies: ["SolidWorks", "ANSYS", "AutoCAD", "3D Printing"],
    },
    {
      id: "software",
      title: "Custom Software Solutions",
      shortTitle: "Software",
      tagline: "Tailored Solutions",
      description:
        "Bespoke software solutions designed specifically for your business needs and operational requirements",
      icon: <Code className="w-12 h-12" />,
      gradient: "from-emerald-500 via-teal-400 to-emerald-600",
      bgGradient: "from-emerald-500/20 via-teal-400/10 to-emerald-600/20",
      accentColor: "text-emerald-400",
      price: "$20K - $180K",
      timeline: "12-24 weeks",
      rating: 4.9,
      projects: 120,
      keyFeatures: ["Custom Business Logic", "Legacy Modernization", "Workflow Automation", "Real-time Dashboards"],
      results: "80% process automation • 60% efficiency gain • 90% user satisfaction",
      technologies: ["Python", "Java", ".NET", "Microservices"],
    },
    {
      id: "database",
      title: "Database Solutions",
      shortTitle: "Database",
      tagline: "Data Architecture",
      description:
        "Robust database design and optimization for enterprise applications with lightning-fast performance",
      icon: <Database className="w-12 h-12" />,
      gradient: "from-indigo-500 via-purple-400 to-indigo-600",
      bgGradient: "from-indigo-500/20 via-purple-400/10 to-indigo-600/20",
      accentColor: "text-indigo-400",
      price: "$8K - $75K",
      timeline: "4-10 weeks",
      rating: 4.9,
      projects: 95,
      keyFeatures: ["Architecture Design", "Performance Tuning", "Cloud Migration", "Real-time Analytics"],
      results: "10x query performance • 99.99% uptime • 70% storage optimization",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "BigQuery"],
    },
    {
      id: "design",
      title: "UI/UX Design",
      shortTitle: "Design",
      tagline: "User Experience",
      description: "User-centered design that converts visitors into customers with beautiful, intuitive interfaces",
      icon: <Palette className="w-12 h-12" />,
      gradient: "from-pink-500 via-rose-400 to-pink-600",
      bgGradient: "from-pink-500/20 via-rose-400/10 to-pink-600/20",
      accentColor: "text-pink-400",
      price: "$5K - $50K",
      timeline: "3-8 weeks",
      rating: 4.8,
      projects: 200,
      keyFeatures: ["User Research", "Interactive Prototyping", "Design Systems", "Conversion Optimization"],
      results: "150% conversion increase • 95% user satisfaction • 40% bounce reduction",
      technologies: ["Figma", "Adobe XD", "Framer", "Principle"],
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, services.length])

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const currentService = services[activeService]

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Dynamic background effects */}
      <div className="absolute inset-0 opacity-40">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${currentService.gradient} rounded-full blur-3xl animate-pulse transition-all duration-1000`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r ${currentService.gradient} rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000`}
        ></div>
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
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-lg font-bold text-primary">Our Expertise</span>
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </div>
            <h2 className="text-5xl sm:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-emerald-400 leading-tight">
              Services We
              <span className="block text-emerald-400">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From concept to deployment, we deliver comprehensive solutions that drive innovation and growth
            </p>
          </motion.div>

          {/* Interactive Service Showcase */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveService(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`group relative px-6 py-3 rounded-full border transition-all duration-300 ${
                    index === activeService
                      ? `bg-gradient-to-r ${service.gradient} text-white border-transparent shadow-lg`
                      : "bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={`${index === activeService ? "text-white" : service.accentColor} transition-colors duration-300`}
                    >
                      {service.icon}
                    </div>
                    <span className="font-semibold">{service.shortTitle}</span>
                  </div>
                  {index === activeService && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Main Service Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left side - Service details */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentService.bgGradient} border border-primary/20`}
                    >
                      <Target className={`w-4 h-4 ${currentService.accentColor}`} />
                      <span className={`text-sm font-bold ${currentService.accentColor}`}>
                        {currentService.tagline}
                      </span>
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                      {currentService.title}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">{currentService.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div
                      className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentService.bgGradient} border border-primary/20`}
                    >
                      <div className={`text-2xl font-bold ${currentService.accentColor}`}>{currentService.price}</div>
                      <div className="text-sm text-muted-foreground">Investment</div>
                    </div>
                    <div
                      className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentService.bgGradient} border border-primary/20`}
                    >
                      <div className="text-2xl font-bold text-foreground">{currentService.timeline}</div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                    </div>
                    <div
                      className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentService.bgGradient} border border-primary/20`}
                    >
                      <div className="text-2xl font-bold text-emerald-400">{currentService.projects}+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-foreground flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 ${currentService.accentColor}`} />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentService.keyFeatures.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border border-border/50"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentService.gradient}`}></div>
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-r ${currentService.bgGradient} border border-primary/20`}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className={`w-5 h-5 ${currentService.accentColor}`} />
                      <span className={`font-bold ${currentService.accentColor}`}>Proven Results</span>
                    </div>
                    <p className="text-foreground font-semibold">{currentService.results}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className={`flex-1 bg-gradient-to-r ${currentService.gradient} hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group`}
                    >
                      <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Start Your Project
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className={`flex-1 border-primary/50 ${currentService.accentColor} hover:bg-primary/10`}
                    >
                      View Portfolio
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Right side - Visual showcase */}
                <div className="relative">
                  <div
                    className={`relative p-8 rounded-3xl bg-gradient-to-br ${currentService.bgGradient} border border-primary/20 backdrop-blur-sm`}
                  >
                    {/* Large icon */}
                    <div
                      className={`flex justify-center mb-8 text-gradient bg-gradient-to-r ${currentService.gradient} p-8 rounded-2xl bg-white/10`}
                    >
                      <div className={`${currentService.accentColor}`}>{currentService.icon}</div>
                    </div>

                    {/* Rating and projects */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-2xl font-bold text-foreground">{currentService.rating}</span>
                        <span className="text-muted-foreground">rating</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className={`w-5 h-5 ${currentService.accentColor}`} />
                        <span className="text-2xl font-bold text-foreground">{currentService.projects}+</span>
                        <span className="text-muted-foreground">projects</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-foreground">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentService.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${currentService.gradient} text-white`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div
                      className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${currentService.gradient} rounded-full opacity-20 blur-xl`}
                    ></div>
                    <div
                      className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r ${currentService.gradient} rounded-full opacity-20 blur-xl`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevService}
                className="rounded-full border-primary/50 hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="ml-2 text-sm">{isAutoPlaying ? "Pause" : "Play"}</span>
                </Button>

                <div className="flex space-x-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeService
                          ? `bg-gradient-to-r ${currentService.gradient} w-8`
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextService}
                className="rounded-full border-primary/50 hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-primary">Ready to transform your business?</span>
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white font-bold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 px-12 py-4 text-lg"
              >
                <Target className="w-5 h-5 mr-2" />
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
