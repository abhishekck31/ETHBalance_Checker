"use client"
import { motion } from "framer-motion"
import { Activity, ArrowRight, BarChart2, ChevronDown, Clock, Settings, Star, Target } from "lucide-react"

export function FeatureTrackingSection() {
  return (
    <section className="w-full bg-black py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Powerful workflows <span className="text-primary">⚡</span> for shipping valuable features
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our comprehensive feature tracking system helps you monitor, analyze, and optimize your product development
            lifecycle.
          </motion.p>
        </div>

        <div className="relative">
          {/* Enhanced flowing connection spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 2000"
              preserveAspectRatio="none"
              style={{ minHeight: "2000px" }}
            >
              <defs>
                <linearGradient id="spineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main flowing spine */}
              <motion.path
                d="M50,0 
                   C30,100 70,200 50,300
                   C20,400 80,500 50,600
                   C70,700 30,800 50,900
                   C80,1000 20,1100 50,1200
                   C30,1300 70,1400 50,1500
                   C60,1600 40,1700 50,1800
                   C50,1900 50,2000 50,2000"
                fill="none"
                stroke="url(#spineGradient)"
                strokeWidth="3"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />

              {/* Flowing particles */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.circle
                  key={i}
                  r="4"
                  fill="#8b5cf6"
                  filter="url(#glow)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    cy: [0, 2000],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.8,
                    ease: "linear",
                  }}
                >
                  <animateMotion dur="4s" repeatCount="indefinite" begin={`${i * 0.8}s`}>
                    <mpath href="#flowPath" />
                  </animateMotion>
                </motion.circle>
              ))}

              {/* Connection nodes */}
              {[300, 600, 900, 1200, 1500].map((y, i) => (
                <motion.g key={i}>
                  <circle cx="50" cy={y} r="8" fill="#1f2937" stroke="#8b5cf6" strokeWidth="2" />
                  <motion.circle
                    cx="50"
                    cy={y}
                    r="4"
                    fill="#8b5cf6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                  />
                  <motion.circle
                    cx="50"
                    cy={y}
                    r="12"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="1"
                    opacity="0.3"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.4 }}
                  />
                </motion.g>
              ))}
            </svg>
          </div>

          {/* Branch connections for each section */}
          <div className="absolute left-1/2 top-0 bottom-0 w-full -translate-x-1/2 hidden md:block pointer-events-none">
            {[
              { top: "15%", side: "left" },
              { top: "35%", side: "right" },
              { top: "55%", side: "left" },
              { top: "75%", side: "right" },
              { top: "95%", side: "left" },
            ].map((branch, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ top: branch.top }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3, duration: 0.8 }}
              >
                <svg
                  width="400"
                  height="100"
                  className={`${branch.side === "left" ? "-translate-x-full" : ""}`}
                  viewBox="0 0 400 100"
                >
                  <defs>
                    <linearGradient id={`branchGradient${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={
                      branch.side === "left"
                        ? "M400,50 C350,50 320,30 280,40 C240,50 200,60 150,50 C100,40 50,30 0,50"
                        : "M0,50 C50,50 80,30 120,40 C160,50 200,60 250,50 C300,40 350,30 400,50"
                    }
                    fill="none"
                    stroke={`url(#branchGradient${i})`}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3 + 0.5, duration: 1.5 }}
                  />
                  {/* Branch endpoint */}
                  <motion.circle
                    cx={branch.side === "left" ? 0 : 400}
                    cy="50"
                    r="6"
                    fill="#8b5cf6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3 + 1, duration: 0.5 }}
                  />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Feature tracking cards */}
          <div className="space-y-32 relative z-10">
            {/* Card 1: Track new feature releases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Track new feature releases</h3>
                <p className="text-gray-400 mb-6">
                  Launch your new feature release and get instant insights. STARS works right out of the box, giving you
                  a common baseline for measuring feature engagement and satisfaction.
                </p>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">Huddles</span>
                    </div>
                    <span className="text-green-400 font-medium">100%</span>
                  </div>
                  <LineChartVisual color="#10b981" />
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2 bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-400">Last week: +1</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <span>Released: 3 weeks ago</span>
                  </div>
                </div>
                <div className="flex justify-between items-end h-32">
                  {[45, 65, 80, 60, 40].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-8 flex flex-col items-center"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <div
                        className="w-4 bg-gradient-to-t from-purple-600 to-purple-400 rounded-sm shadow-lg shadow-purple-500/25"
                        style={{ height: `${height}%` }}
                      ></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Card 2: Segment by STARS stage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Huddles</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>Filter by STARS stage</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex justify-between items-end h-32">
                  {[75, 60, 45, 30, 15].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-8 flex flex-col items-center"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <div
                        className="w-6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm shadow-lg shadow-blue-500/25"
                        style={{ height: `${height}%` }}
                      ></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Segment by STARS stage</h3>
                <p className="text-gray-400 mb-6">
                  Increase data accuracy by segmenting customers based on where they are in the STARS feature success
                  funnel for any feature metric.
                </p>
                <div className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer">
                  <span className="font-medium">Learn about STARS</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </div>

            {/* Card 3: Set feature goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Set feature goals</h3>
                <p className="text-gray-400 mb-6">
                  Add goals to features and iterations to track their progress. Not sure what goals to set? Keep it
                  simple with our default goal templates.
                </p>
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center space-x-3 bg-gray-900/50 border border-gray-800 rounded-lg p-3 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">Huddles (beta)</span>
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full ml-auto">
                      3 weeks ago
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 bg-gray-900/50 border border-gray-800 rounded-lg p-3 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">Huddles 1.0</span>
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full ml-auto">
                      1 week ago
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Huddles 1.1</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-amber-500 font-medium">34%</span>
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <span className="text-amber-500 text-xs">%</span>
                    </div>
                  </div>
                </div>
                <div className="h-32">
                  <LineChartVisual color="#f59e0b" />
                </div>
              </motion.div>
            </div>

            {/* Card 4: Explore feature usage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 order-2 md:order-1 backdrop-blur-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Huddles</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span>Top 3</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { percentage: 14, delay: 0.1 },
                    { percentage: 19, delay: 0.2 },
                    { percentage: 42, delay: 0.3 },
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>{i + 1}.</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: item.delay, duration: 1 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Explore feature usage and satisfaction</h3>
                <p className="text-gray-400 mb-6">
                  Discover how customers are using features and pinpoint opportunities for increased engagement or
                  satisfaction.
                </p>
                <motion.div
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-2 text-green-400">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">
                        "Love the new invite button, makes it so much easier to get started!"
                      </span>
                      <span className="text-gray-500 ml-2">3 hours ago</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Card 5: Evaluate and iterate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Evaluate and iterate</h3>
                <p className="text-gray-400 mb-6">
                  Get built-in automated STARS reporting that keeps you and your teams up-to-date on progression and
                  lets you set more advanced, usage-based goals for the next iteration.
                </p>
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Automated Workflows</p>
                    <p className="text-sm text-gray-400">Continuous improvement cycle</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: Activity, label: "Activity", value: "+27%", color: "purple" },
                  { icon: Star, label: "Rating", value: "4.8/5", color: "amber" },
                  { icon: BarChart2, label: "Usage", value: "89%", color: "blue" },
                  { icon: Target, label: "Goals", value: "3/4", color: "green" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 flex flex-col items-center justify-center backdrop-blur-sm hover:bg-gray-800/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <item.icon className={`w-8 h-8 text-${item.color}-500 mb-2`} />
                    <span className="text-sm text-gray-400">{item.label}</span>
                    <span className="text-xl font-bold text-white">{item.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LineChartVisual({ color }: { color: string }) {
  return (
    <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`gradient-${color.replace("#", "")}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <filter id={`chartGlow-${color.replace("#", "")}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d="M0,80 C20,70 40,60 60,50 C80,40 100,30 120,35 C140,40 160,60 180,55 C200,50 220,30 240,20 C260,10 280,5 300,0"
        fill="none"
        stroke={color}
        strokeWidth="3"
        filter={`url(#chartGlow-${color.replace("#", "")})`}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M0,80 C20,70 40,60 60,50 C80,40 100,30 120,35 C140,40 160,60 180,55 C200,50 220,30 240,20 C260,10 280,5 300,0 L300,100 L0,100 Z"
        fill={`url(#gradient-${color.replace("#", "")})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      />
    </svg>
  )
}
