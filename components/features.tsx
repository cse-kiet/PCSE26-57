"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Video, FileText, Bell, CreditCard, BarChart, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Course Management",
    description: "Create and manage multiple courses with ease. Upload study materials and track progress."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Batch Management",
    description: "Organize offline batches, schedule classes, and manage student attendance efficiently."
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Recorded Lectures",
    description: "Provide access to recorded lectures for revision and self-paced learning."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Digital Notes",
    description: "Share study materials and notes digitally with your students."
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Smart Notifications",
    description: "Automated WhatsApp and email notifications for updates and reminders."
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Online Payments",
    description: "Secure payment gateway for fee collection and subscription management."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into student performance and institute growth."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Communication Hub",
    description: "Integrated messaging system for seamless communication with students and staff."
  }
]

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for AskLMS
          </h2>
          <div className="w-20 h-1 bg-[#FF6B00] mb-8 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage your coaching institute efficiently and provide the best learning experience to your students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border border-orange-500/20 hover:border-orange-500/40 transition-all group">
                <CardContent className="p-6">
                  <div className="mb-4 text-orange-500 group-hover:text-orange-400 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg text-orange-200 font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

