"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, X, Mail, Phone, MapPin, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

export function FooterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const sections = [
    {
      id: "services",
      title: "Services",
      items: [
        { label: "Enterprise Web Development", href: "/services/web-development" },
        { label: "Mobile App Development", href: "/services/mobile-apps" },
        { label: "Physical Product Development", href: "/services/physical-products" },
        { label: "SEO Optimization", href: "/services/seo" },
        { label: "Google Ads Management", href: "/services/google-ads" },
        { label: "Patent Services", href: "/services/patents" },
      ],
    },
    {
      id: "company",
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Process", href: "/process" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      items: [
        { label: "Documentation", href: "/docs" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "White Papers", href: "/white-papers" },
        { label: "Technical Guides", href: "/guides" },
        { label: "API Reference", href: "/api" },
        { label: "Downloads", href: "/downloads" },
      ],
    },
    {
      id: "support",
      title: "Support",
      items: [
        { label: "Help Center", href: "/help" },
        { label: "Free Consultation", href: "/consultation" },
        { label: "Technical Support", href: "/tech-support" },
        { label: "Training", href: "/training" },
        { label: "Community", href: "/community" },
        { label: "System Status", href: "/status" },
      ],
    },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@weltivation.com", href: "mailto:hello@weltivation.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  ]

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center justify-center w-12 h-12 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <ArrowUp className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
      </button>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Popup content */}
            <motion.div
              initial={{ y: "100%", opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: "100%", opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onMouseLeave={() => setIsOpen(false)}
              className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/50 max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                  <div className="flex items-center space-x-4">
                    <img src="/images/weltivation-logo.png" alt="Weltivation" className="h-12" />
                    <div>
                      <p className="text-sm text-muted-foreground">Ready to build the future together?</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-muted/50 transition-colors self-end md:self-start"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Desktop: Grid layout, Mobile: Collapsible sections */}
                <div className="hidden md:grid md:grid-cols-4 gap-8 mb-8">
                  {sections.map((section) => (
                    <div key={section.id} className="space-y-4">
                      <h4 className="font-semibold text-primary text-lg">{section.title}</h4>
                      <div className="space-y-3">
                        {section.items.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 hover:pl-2 group flex items-center"
                          >
                            <span>{item.label}</span>
                            <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile: Collapsible sections */}
                <div className="md:hidden space-y-2 mb-8">
                  {sections.map((section) => (
                    <div key={section.id} className="bg-muted/10 rounded-lg overflow-hidden border border-border/30">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-muted/20 transition-colors"
                      >
                        <h4 className="font-semibold text-primary text-left">{section.title}</h4>
                        {expandedSection === section.id ? (
                          <ChevronUp className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 flex-shrink-0" />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedSection === section.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 space-y-3 border-t border-border/30">
                              {section.items.map((item, index) => (
                                <motion.a
                                  key={index}
                                  href={item.href}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:pl-2 flex items-center group"
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <span>{item.label}</span>
                                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="pt-6 border-t border-border/50">
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                        <span>All systems operational</span>
                      </div>
                      <span className="text-sm text-muted-foreground">© 2025 Weltivation. All rights reserved.</span>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                      {contactInfo.map((contact, index) => (
                        <a
                          key={index}
                          href={contact.href}
                          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>{contact.value}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
