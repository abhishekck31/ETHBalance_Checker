"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Code, Globe, Lock, Shield, Terminal, ExternalLink, X, ChevronRight, Tag, Play } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: "web" | "mobile" | "product" | "ai" | "platform"
  technologies: string[]
  link?: string
  achievements: string[]
  featured?: boolean
}

export function ProjectsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: "dreambox",
      title: "DreamBox AI",
      description: "Revolutionary AI-powered video generation platform transforming scripts into cinematic episodes",
      longDescription:
        "DreamBox represents the cutting edge of AI video generation technology. This platform transforms simple scripts into professional-quality 20-45 minute animated episodes using advanced machine learning algorithms. The system features an intuitive interface that makes professional video production accessible to creators worldwide, democratizing content creation through AI innovation.",
      image: "/images/dreambox-logo.png",
      category: "ai",
      technologies: ["AI/ML", "Video Processing", "React", "Python", "Cloud Computing", "Neural Networks"],
      link: "https://v0-advanced-ai-video-app.vercel.app/",
      achievements: [
        "Developed breakthrough AI video generation algorithms with 95% accuracy",
        "Created intuitive script-to-video conversion interface used by 10,000+ creators",
        "Implemented real-time rendering pipeline processing 1TB+ of video daily",
        "Built scalable cloud infrastructure supporting millions of video generations",
        "Achieved 4.8/5 user satisfaction rating with 90% user retention",
      ],
      featured: true,
    },
    {
      id: "pufftrak",
      title: "PuffTrak",
      description: "Next-generation smart vaping device with advanced tracking and health monitoring",
      longDescription:
        "PuffTrak is a revolutionary smart vaping device that combines cutting-edge hardware design with intelligent software to provide users with comprehensive usage tracking and health insights. The device features precision sensors, real-time data collection, and a companion mobile app that helps users make informed decisions about their vaping habits.",
      image: "/images/pufftrak-device-1.png",
      category: "product",
      technologies: ["IoT", "Mobile App", "Bluetooth", "Sensors", "3D Design", "Manufacturing"],
      achievements: [
        "Designed precision IoT sensors with 99.9% accuracy for usage tracking",
        "Developed companion mobile app with 4.7/5 App Store rating",
        "Created sleek industrial design with premium materials and finishes",
        "Implemented advanced battery management for 7-day usage cycles",
        "Achieved FDA compliance and safety certifications",
      ],
      featured: true,
    },
    {
      id: "motionrecords",
      title: "MotionRecords",
      description: "Comprehensive digital music distribution and artist management platform",
      longDescription:
        "MotionRecords is a full-service digital music platform that empowers artists with professional-grade tools for music distribution, analytics, and fan engagement. The platform streamlines the entire music release process while providing detailed insights into audience engagement, revenue optimization, and career growth opportunities for independent artists and labels.",
      image: "/placeholder.svg?height=400&width=600",
      category: "platform",
      technologies: ["React", "Node.js", "Audio Processing", "Analytics", "Payment Systems", "API Integration"],
      link: "https://motionrecords.us",
      achievements: [
        "Built comprehensive music distribution pipeline reaching 150+ platforms",
        "Developed advanced analytics dashboard tracking 50M+ streams monthly",
        "Implemented secure payment and royalty systems processing $2M+ annually",
        "Created fan engagement tools increasing artist-fan interaction by 300%",
        "Achieved 98% artist satisfaction rate with 95% retention",
      ],
      featured: true,
    },
    {
      id: "glasspatch",
      title: "GlassPatch",
      description: "Advanced glass repair and replacement management system for service businesses",
      longDescription:
        "GlassPatch is a specialized business management platform designed specifically for glass repair and replacement companies. The system provides comprehensive job management, customer relationship tools, inventory tracking, and automated scheduling to streamline operations, improve efficiency, and enhance customer satisfaction in the glass services industry.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React", "Node.js", "Scheduling APIs", "CRM Integration", "Mobile Apps", "GPS Tracking"],
      achievements: [
        "Developed comprehensive job management system reducing admin time by 60%",
        "Built automated scheduling and dispatch tools improving efficiency by 45%",
        "Implemented real-time inventory tracking preventing stockouts by 90%",
        "Created customer portal increasing satisfaction scores by 40%",
        "Achieved 99.9% uptime with enterprise-grade reliability",
      ],
    },
    {
      id: "nicfound",
      title: "NicFound",
      description: "AI-powered nicotine tracking and cessation support platform",
      longDescription:
        "NicFound leverages artificial intelligence to help users track their nicotine consumption and provides personalized support for cessation efforts. The platform combines behavioral analytics, health monitoring, and community support to create a comprehensive solution for those looking to reduce or eliminate nicotine dependency.",
      image: "/images/nicfound-logo.png",
      category: "mobile",
      technologies: ["React Native", "AI/ML", "Health APIs", "Analytics", "Push Notifications"],
      achievements: [
        "Developed AI algorithms with 85% accuracy in predicting cessation success",
        "Created personalized intervention system reducing relapse by 40%",
        "Built community platform with 50,000+ active users",
        "Implemented health tracking integration with major fitness platforms",
        "Achieved clinical validation through partnership with health institutions",
      ],
    },
    {
      id: "chatchill",
      title: "ChatChill",
      description: "Next-generation social communication platform with advanced privacy features",
      longDescription:
        "ChatChill redefines social communication with a focus on privacy, security, and meaningful connections. The platform features end-to-end encryption, ephemeral messaging, and innovative social features that prioritize user privacy while fostering genuine community building and authentic conversations.",
      image: "/images/chatchill-logo.png",
      category: "mobile",
      technologies: ["React Native", "Encryption", "Real-time Messaging", "Privacy Tech", "Social Features"],
      achievements: [
        "Implemented military-grade end-to-end encryption for all communications",
        "Developed innovative ephemeral messaging with custom disappearing timers",
        "Created privacy-first social features protecting user data",
        "Built real-time messaging system supporting 1M+ concurrent users",
        "Achieved zero data breaches with advanced security architecture",
      ],
    },
  ]

  const filteredProjects = filter ? projects.filter((project) => project.category === filter) : projects

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Globe className="w-5 h-5" />
      case "mobile":
        return <Terminal className="w-5 h-5" />
      case "product":
        return <Code className="w-5 h-5" />
      case "ai":
        return <Shield className="w-5 h-5" />
      case "platform":
        return <Lock className="w-5 h-5" />
      default:
        return <Code className="w-5 h-5" />
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "web":
        return "Web Application"
      case "mobile":
        return "Mobile App"
      case "product":
        return "Physical Product"
      case "ai":
        return "AI Platform"
      case "platform":
        return "Digital Platform"
      default:
        return category
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "web":
        return "from-blue-500 to-cyan-500"
      case "mobile":
        return "from-purple-500 to-pink-500"
      case "product":
        return "from-orange-500 to-red-500"
      case "ai":
        return "from-green-500 to-emerald-500"
      case "platform":
        return "from-indigo-500 to-purple-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

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
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Featured Projects</h2>
            <div className="h-px w-24 bg-primary/50 mx-auto"></div>
            <p className="text-foreground leading-relaxed max-w-4xl mx-auto text-lg">
              Showcasing our most impactful projects across web development, mobile applications, AI platforms, and
              physical products. Each project represents innovation, technical excellence, and measurable business
              results.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter(null)}
              className={`px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2 font-medium ${
                filter === null
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted/30 text-muted-foreground border border-border hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Lock className="w-4 h-4" />
              All Projects
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2 font-medium ${
                filter === "ai"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted/30 text-muted-foreground border border-border hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Shield className="w-4 h-4" />
              AI Platforms
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2 font-medium ${
                filter === "web"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted/30 text-muted-foreground border border-border hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Globe className="w-4 h-4" />
              Web Apps
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2 font-medium ${
                filter === "mobile"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted/30 text-muted-foreground border border-border hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Terminal className="w-4 h-4" />
              Mobile Apps
            </button>
            <button
              onClick={() => setFilter("product")}
              className={`px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2 font-medium ${
                filter === "product"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted/30 text-muted-foreground border border-border hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Code className="w-4 h-4" />
              Products
            </button>
            <button
              onClick={() => setFilter("platform")}
              className={`px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2 font-medium ${
                filter === "platform"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted/30 text-muted-foreground border border-border hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Lock className="w-4 h-4" />
              Platforms
            </button>
          </motion.div>

          {/* Projects grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-xl border border-border bg-background/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold">
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Project image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(project.category)} opacity-20`}
                    ></div>

                    {/* Play button for video demos */}
                    {project.link && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-gray-900 ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 text-primary">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs bg-background/50">
                        {getCategoryName(project.category)}
                      </Badge>
                    </div>

                    <p className="text-foreground text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-4 w-full flex items-center justify-center px-4 py-3 rounded-lg border border-border bg-background/30 text-primary hover:bg-primary/10 transition-all duration-300 text-sm group font-medium"
                    >
                      <span>View Project Details</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project details modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-4xl bg-background/95 border border-border text-foreground max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl flex items-center gap-3 text-primary">
                {selectedProject?.title}
                <Badge variant="outline" className="text-sm">
                  {selectedProject && getCategoryName(selectedProject.category)}
                </Badge>
              </DialogTitle>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full p-2 hover:bg-muted/50 transition-colors"
              >
                <X className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-8">
              {/* Project image */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(selectedProject.category)} opacity-20`}
                ></div>
              </div>

              {/* Description */}
              <DialogDescription className="text-foreground text-lg leading-relaxed">
                {selectedProject.longDescription}
              </DialogDescription>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-muted text-muted-foreground border border-border"
                    >
                      <Tag className="w-4 h-4 mr-2" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key achievements */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Key Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/20 border border-border">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-foreground text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 pt-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Project
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
