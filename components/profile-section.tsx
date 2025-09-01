"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Shield, Terminal, Zap, Lock, Cpu } from "lucide-react"

export function ProfileSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      name: "Penetration Testing",
      icon: <Shield className="w-6 h-6" />,
      description: "Advanced system vulnerability assessment",
    },
    { name: "Exploit Development", icon: <Code2 className="w-6 h-6" />, description: "Custom security tool creation" },
    {
      name: "Network Security",
      icon: <Terminal className="w-6 h-6" />,
      description: "Infrastructure hardening and monitoring",
    },
    {
      name: "Reverse Engineering",
      icon: <Cpu className="w-6 h-6" />,
      description: "Binary analysis and vulnerability research",
    },
    {
      name: "Cryptography",
      icon: <Lock className="w-6 h-6" />,
      description: "Implementation and analysis of encryption systems",
    },
    {
      name: "Incident Response",
      icon: <Zap className="w-6 h-6" />,
      description: "Rapid threat containment and mitigation",
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
    <section id="profile" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Bio section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Profile</h2>
            <div className="h-px w-20 bg-primary/50"></div>
            <p className="text-foreground leading-relaxed max-w-3xl">
              With over a decade of experience in cybersecurity, I specialize in identifying and exploiting
              vulnerabilities in high-security environments. My approach combines technical expertise with strategic
              thinking to provide comprehensive security solutions that stay ahead of emerging threats.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Operating with discretion and precision, I've helped secure critical infrastructure and sensitive systems
              across multiple sectors. My methodology emphasizes thorough analysis, innovative problem-solving, and
              clear communication.
            </p>
          </motion.div>

          {/* Skills section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Expertise</h2>
            <div className="h-px w-20 bg-primary/50"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-lg border border-border bg-background/50 hover:bg-muted/30 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Approach section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Approach</h2>
            <div className="h-px w-20 bg-primary/50"></div>
            <p className="text-foreground leading-relaxed max-w-3xl">
              I believe in a methodical, thorough approach to security. Every system has vulnerabilities; finding them
              requires patience, creativity, and deep technical knowledge. My work is guided by professional ethics and
              a commitment to improving security postures rather than simply exploiting weaknesses.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
