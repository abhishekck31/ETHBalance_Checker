"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Settings, Globe, Smartphone, Package, Building2 } from "lucide-react"
import { useProfileDropdown } from "@/hooks/use-profile-dropdown"

const services = [
  {
    id: "mechanical",
    name: "Mechanical",
    icon: Settings,
    color: "from-orange-500/20 to-orange-600/30",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
  },
  {
    id: "digital",
    name: "Digital Systems",
    icon: Globe,
    color: "from-blue-500/20 to-blue-600/30",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
  },
  {
    id: "website",
    name: "Website",
    icon: Globe,
    color: "from-green-500/20 to-green-600/30",
    borderColor: "border-green-500/30",
    textColor: "text-green-400",
  },
  {
    id: "mobile",
    name: "Mobile App",
    icon: Smartphone,
    color: "from-purple-500/20 to-purple-600/30",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
  },
  {
    id: "product",
    name: "Product Dev",
    icon: Package,
    color: "from-red-500/20 to-red-600/30",
    borderColor: "border-red-500/30",
    textColor: "text-red-400",
  },
  {
    id: "architecture",
    name: "Architecture Design",
    icon: Building2,
    color: "from-cyan-500/20 to-cyan-600/30",
    borderColor: "border-cyan-500/30",
    textColor: "text-cyan-400",
  },
]

const questions = [
  {
    question: "What type of business do you have?",
    options: ["Startup", "Small Business", "Enterprise", "Non-Profit"],
  },
  {
    question: "What's your primary goal?",
    options: ["Increase Revenue", "Improve Efficiency", "Scale Operations", "Digital Transformation"],
  },
  {
    question: "What's your timeline?",
    options: ["ASAP", "1-3 Months", "3-6 Months", "6+ Months"],
  },
]

export function ServiceSelectionCard() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [isCompleted, setIsCompleted] = useState(false)
  const { showProfile } = useProfileDropdown()

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setCurrentQuestion(0)
    setAnswers([])
    setIsCompleted(false)
    // Continue with consultation flow
  }

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
    } else {
      setSelectedService(null)
      setCurrentQuestion(0)
      setAnswers([])
      setIsCompleted(false)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (selectedService && !isCompleted) {
    const selectedServiceData = services.find((s) => s.id === selectedService)

    return (
      <div className="h-full rounded-lg border border-border bg-black text-white overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedServiceData?.color} ${selectedServiceData?.borderColor} border flex items-center justify-center`}
              >
                {selectedServiceData?.icon && (
                  <selectedServiceData.icon className={`w-5 h-5 ${selectedServiceData.textColor}`} />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{selectedServiceData?.name} Consultation</h3>
                <p className="text-sm text-gray-400">
                  Step {currentQuestion + 1} of {questions.length}
                </p>
              </div>
            </div>
            <button onClick={handleBack} className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Progress</span>
              <span className="text-gray-400">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">{questions[currentQuestion].question}</h2>

          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                className="p-4 border border-gray-700 rounded-lg hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 text-left"
              >
                <span className="text-green-400 font-medium">{option}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
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
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-8 h-8 bg-green-500 rounded-full" />
          </div>
          <h3 className="text-2xl font-bold">Thank you!</h3>
          <p className="text-gray-400">
            We'll review your responses and get back to you with a customized consultation.
          </p>
          <button
            onClick={() => {
              setSelectedService(null)
              setCurrentQuestion(0)
              setAnswers([])
              setIsCompleted(false)
            }}
            className="mt-4 px-6 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors"
          >
            Start Another Consultation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full rounded-lg border border-border bg-background/50 p-6 hover:border-primary/50 transition-all duration-300">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">Select a Service</h3>
          <p className="text-muted-foreground">Choose the service you're interested in to start a consultation</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => handleServiceSelect(service.id)}
              className={`relative p-4 rounded-lg bg-gradient-to-br ${service.color} ${service.borderColor} border hover:scale-105 transition-all duration-200 group overflow-hidden`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated stripes */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse" />
              </div>

              <div className="relative flex flex-col items-center space-y-2">
                <service.icon className={`w-6 h-6 ${service.textColor}`} />
                <span className={`text-sm font-medium ${service.textColor}`}>{service.name}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
