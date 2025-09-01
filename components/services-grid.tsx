"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Cog, Search, Shield, Zap, Globe, ArrowUpRight, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  WebDevGraphic,
  MechanicalGraphic,
  SEOGraphic,
  PatentGraphic,
  IoTGraphic,
  DigitalTransformationGraphic,
} from "./animated-service-graphics"

export function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      title: "Web Development",
      description: "Transform your ideas into powerful web solutions that drive growth.",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Increased online visibility",
        "Improved customer engagement",
        "Higher conversion rates",
        "Scalable architecture",
        "Mobile-first design",
      ],
      gradient: "from-blue-500 to-cyan-500",
      badge: "Core Service",
      graphic: <WebDevGraphic />,
    },
    {
      title: "Mechanical Engineering",
      description: "Innovative mechanical designs that optimize performance and reduce costs.",
      icon: <Cog className="w-8 h-8" />,
      features: [
        "Enhanced product functionality",
        "Reduced manufacturing costs",
        "Improved product lifespan",
        "Faster time to market",
        "Sustainable designs",
      ],
      gradient: "from-orange-500 to-red-500",
      badge: "Core Service",
      graphic: <MechanicalGraphic />,
    },
    {
      title: "SEO Optimization",
      description: "Dominate search rankings and attract more qualified leads to your business.",
      icon: <Search className="w-8 h-8" />,
      features: [
        "Increased organic traffic",
        "Higher search engine rankings",
        "Improved brand awareness",
        "More qualified leads",
        "Data-driven insights",
      ],
      gradient: "from-green-500 to-emerald-500",
      badge: "Digital Marketing",
      graphic: <SEOGraphic />,
    },
    {
      title: "Patent Services",
      description: "Secure your innovations and gain a competitive edge in the market.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Exclusive market rights",
        "Stronger investment opportunities",
        "Increased company valuation",
        "Protection against infringement",
        "Strategic IP portfolio",
      ],
      gradient: "from-purple-500 to-pink-500",
      badge: "Patent Pending",
      graphic: <PatentGraphic />,
    },
    {
      title: "IoT Solutions",
      description: "Connect your business and unlock new opportunities with smart IoT solutions.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Real-time data insights",
        "Improved operational efficiency",
        "Enhanced customer experiences",
        "New revenue streams",
        "Predictive maintenance",
      ],
      gradient: "from-yellow-500 to-orange-500",
      badge: "Innovation",
      graphic: <IoTGraphic />,
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business and achieve sustainable growth in the digital age.",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Streamlined business processes",
        "Improved data security",
        "Enhanced customer satisfaction",
        "Increased agility and innovation",
        "Better decision-making",
      ],
      gradient: "from-indigo-500 to-blue-500",
      badge: "Consulting",
      graphic: <DigitalTransformationGraphic />,
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-white">Our </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                Services
              </span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions spanning digital innovation and mechanical excellence
            </p>
          </motion.div>

          {/* Services grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="relative h-full rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]">
                  {/* Animated graphic background */}
                  <div className={`absolute inset-0 text-primary`}>{service.graphic}</div>

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Arrow icon */}
                  <div className="absolute top-6 right-6 z-10">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Badge */}
                    <div className="mb-4">
                      <Badge variant="outline" className="bg-background/50 border-border/50">
                        {service.badge}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                      {/* Features list */}
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action button */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <button className="group/btn flex items-center text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium">
                        <span>Learn More</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
