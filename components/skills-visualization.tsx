"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Terminal, BarChart3 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Skill = {
  name: string
  level: number // 0-100
  category: string
  description: string
}

export function SkillsVisualization() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)
  const [activeTab, setActiveTab] = useState("terminal")

  // Skills data with categories
  const skills: Skill[] = [
    {
      name: "Penetration Testing",
      level: 95,
      category: "Offensive Security",
      description: "Expert in identifying and exploiting vulnerabilities in networks, applications, and systems",
    },
    {
      name: "Network Security",
      level: 90,
      category: "Defensive Security",
      description: "Advanced knowledge of securing network infrastructure and detecting intrusions",
    },
    {
      name: "Exploit Development",
      level: 85,
      category: "Offensive Security",
      description: "Creation of custom exploits for various platforms and vulnerability types",
    },
    {
      name: "Reverse Engineering",
      level: 88,
      category: "Analysis",
      description: "Disassembly and analysis of binaries to understand functionality and identify vulnerabilities",
    },
    {
      name: "Malware Analysis",
      level: 82,
      category: "Analysis",
      description: "Static and dynamic analysis of malicious code to determine behavior and origin",
    },
    {
      name: "Cryptography",
      level: 78,
      category: "Defensive Security",
      description: "Implementation and analysis of encryption systems and cryptographic protocols",
    },
    {
      name: "Social Engineering",
      level: 80,
      category: "Offensive Security",
      description: "Psychological manipulation techniques to gain access to systems or information",
    },
    {
      name: "Incident Response",
      level: 87,
      category: "Defensive Security",
      description: "Rapid identification, containment, and remediation of security breaches",
    },
    {
      name: "OSINT",
      level: 92,
      category: "Intelligence",
      description: "Open-source intelligence gathering and analysis for target reconnaissance",
    },
    {
      name: "Digital Forensics",
      level: 84,
      category: "Analysis",
      description: "Recovery and investigation of material found in digital devices",
    },
  ]

  // Group skills by category
  const categories = Array.from(new Set(skills.map((skill) => skill.category)))
  const skillsByCategory = categories.reduce(
    (acc, category) => {
      acc[category] = skills.filter((skill) => skill.category === category)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  // Radar chart data preparation
  const radarCategories = categories
  const radarData = radarCategories.map((category) => {
    const categorySkills = skillsByCategory[category]
    const averageLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
    return {
      category,
      level: averageLevel,
    }
  })

  // Animation variants
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

  // Terminal typing effect
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>([])

  useEffect(() => {
    if (isInView && activeTab === "terminal") {
      const timer = setTimeout(() => {
        if (displayedSkills.length < skills.length) {
          setDisplayedSkills(skills.slice(0, displayedSkills.length + 1))
        }
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isInView, displayedSkills, skills, activeTab])

  useEffect(() => {
    if (activeTab === "terminal") {
      setDisplayedSkills([])
    }
  }, [activeTab])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Skills Assessment</h2>
            <div className="h-px w-20 bg-primary/50"></div>
            <p className="text-foreground leading-relaxed max-w-3xl">
              A quantitative analysis of technical proficiencies across various security domains. Each metric represents
              years of practical experience and continuous skill development.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="terminal" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="terminal" className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>Terminal View</span>
                </TabsTrigger>
                <TabsTrigger value="chart" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Radar Analysis</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="terminal" className="mt-0">
                <div className="rounded-lg border-border bg-background/70 p-4 font-mono text-sm">
                  <div className="flex items-center mb-4 border-b border-border pb-2">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-muted-foreground">skills_assessment.sh</div>
                  </div>

                  <div className="text-foreground">
                    <p className="text-primary mb-4">
                      <span className="text-muted-foreground">$</span> ./analyze_skills.sh --verbose
                    </p>

                    <div className="space-y-6">
                      {displayedSkills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-muted-foreground mr-2">[{skill.category}]</span>
                              <span className="text-white">{skill.name}</span>
                            </div>
                            <span className="text-primary">{skill.level}%</span>
                          </div>

                          <div className="w-full bg-muted/50 rounded-sm h-1.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-primary/80 to-primary"
                            ></motion.div>
                          </div>

                          <p className="text-muted-foreground text-xs">{skill.description}</p>
                        </div>
                      ))}

                      {displayedSkills.length < skills.length && (
                        <div className="flex items-center">
                          <span className="text-primary animate-pulse">▋</span>
                        </div>
                      )}

                      {displayedSkills.length === skills.length && (
                        <p className="text-primary mt-4">
                          <span className="text-muted-foreground">$</span> Analysis complete. All skills evaluated.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="chart" className="mt-0">
                <div className="rounded-lg border-border bg-background/70 p-4">
                  <RadarChart data={radarData} setActiveSkill={setActiveSkill} skillsByCategory={skillsByCategory} />

                  <AnimatePresence>
                    {activeSkill && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-6 p-4 rounded border-border bg-background/50"
                      >
                        <h4 className="text-primary font-medium mb-1">{activeSkill.name}</h4>
                        <div className="flex items-center mb-2">
                          <div className="text-xs text-muted-foreground mr-2">Proficiency:</div>
                          <div className="w-full max-w-xs bg-muted/50 rounded-sm h-1.5 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary/80 to-primary"
                              style={{ width: `${activeSkill.level}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-primary ml-2">{activeSkill.level}%</div>
                        </div>
                        <p className="text-foreground text-sm">{activeSkill.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Radar Chart Component
function RadarChart({
  data,
  setActiveSkill,
  skillsByCategory,
}: {
  data: { category: string; level: number }[]
  setActiveSkill: (skill: Skill | null) => void
  skillsByCategory: Record<string, Skill[]>
}) {
  const svgSize = 400
  const centerX = svgSize / 2
  const centerY = svgSize / 2
  const maxRadius = svgSize * 0.4
  const levels = 5 // Number of concentric circles

  // Calculate points for each category
  const angleStep = (Math.PI * 2) / data.length
  const points = data.map((d, i) => {
    const angle = i * angleStep - Math.PI / 2 // Start from top
    const radius = (d.level / 100) * maxRadius
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      category: d.category,
      level: d.level,
      angle,
    }
  })

  // Create polygon points string
  const polygonPoints = points.map((p) => `${p.x},${p.y}`).join(" ")

  // Handle category hover
  const handleCategoryHover = (category: string) => {
    const categorySkills = skillsByCategory[category]
    // Find the skill with the highest level in this category
    const highestSkill = categorySkills.reduce(
      (prev, current) => (prev.level > current.level ? prev : current),
      categorySkills[0],
    )
    setActiveSkill(highestSkill)
  }

  return (
    <div className="flex justify-center">
      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
          {/* Background circles */}
          {Array.from({ length: levels }).map((_, i) => {
            const radius = ((i + 1) / levels) * maxRadius
            return (
              <circle
                key={i}
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="#333"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity={0.5}
              />
            )
          })}

          {/* Axes */}
          {points.map((point, i) => (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={centerX + maxRadius * Math.cos(point.angle)}
              y2={centerY + maxRadius * Math.sin(point.angle)}
              stroke="#444"
              strokeWidth="1"
            />
          ))}

          {/* Data polygon */}
          <motion.polygon
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            points={polygonPoints}
            fill="rgba(16, 185, 129, 0.2)"
            stroke="#10b981"
            strokeWidth="2"
          />

          {/* Data points */}
          {points.map((point, i) => (
            <motion.circle
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              cx={point.x}
              cy={point.y}
              r={5}
              fill="#10b981"
              stroke="#000"
              strokeWidth="2"
            />
          ))}

          {/* Category labels */}
          {points.map((point, i) => {
            const labelRadius = maxRadius + 20
            const labelX = centerX + labelRadius * Math.cos(point.angle)
            const labelY = centerY + labelRadius * Math.sin(point.angle)

            // Adjust text anchor based on position
            let textAnchor = "middle"
            if (point.angle > -Math.PI * 0.25 && point.angle < Math.PI * 0.25) textAnchor = "start"
            else if (point.angle > Math.PI * 0.75 || point.angle < -Math.PI * 0.75) textAnchor = "end"

            return (
              <g key={i}>
                <motion.text
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  x={labelX}
                  y={labelY}
                  textAnchor={textAnchor}
                  dominantBaseline="middle"
                  fill="#d1d5db"
                  fontSize="12"
                  fontFamily="monospace"
                  className="cursor-pointer hover:fill-emerald-400 transition-colors duration-200"
                  onMouseEnter={() => handleCategoryHover(point.category)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  {point.category}
                </motion.text>
              </g>
            )
          })}

          {/* Percentage labels on axes */}
          {points.map((point, i) => {
            const percentageRadius = (point.level / 100) * maxRadius - 15
            const percentageX = centerX + percentageRadius * Math.cos(point.angle)
            const percentageY = centerY + percentageRadius * Math.sin(point.angle)

            return (
              <motion.text
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                x={percentageX}
                y={percentageY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#10b981"
                fontSize="10"
                fontFamily="monospace"
              >
                {Math.round(point.level)}%
              </motion.text>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
