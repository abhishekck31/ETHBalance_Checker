"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Mail, MessageSquare, Linkedin, ExternalLink } from "lucide-react"

export function ContactLinks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const links = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "#", description: "View projects and contributions" },
    { name: "Email", icon: <Mail className="w-5 h-5" />, url: "#", description: "Direct contact for inquiries" },
    {
      name: "Telegram",
      icon: <MessageSquare className="w-5 h-5" />,
      url: "#",
      description: "Secure messaging platform",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "#",
      description: "Professional profile and network",
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
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-primary">Connect</h2>
            <div className="h-px w-20 bg-primary/50 mx-auto"></div>
            <p className="text-foreground max-w-2xl mx-auto">
              Interested in discussing security solutions or professional collaboration? Reach out through any of the
              channels below.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 rounded-lg border border-border bg-background/50 hover:bg-muted/30 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-all duration-300 group"
              >
                <div className="mr-4 text-primary group-hover:text-primary transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium flex items-center">
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center pt-8">
            <p className="text-muted-foreground text-sm">
              All communications are encrypted and handled with the highest level of confidentiality.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
