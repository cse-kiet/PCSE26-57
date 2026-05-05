"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { month: "Jan", students: 400 },
  { month: "Feb", students: 500 },
  { month: "Mar", students: 600 },
  { month: "Apr", students: 680 },
  { month: "May", students: 750 },
  { month: "Jun", students: 800 },
]

const stats = [
  { label: "Active Students", value: "1,200+" },
  { label: "Course Completion", value: "92%" },
  { label: "Student Satisfaction", value: "4.8/5" },
  { label: "Daily Attendance", value: "95%" },
]

export default function Analytics() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Track Your Growth
        </h2>
        <div className="w-20 h-1 bg-[#FF6B00] mb-8 mx-auto"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-center">
          Monitor your institute's performance with real-time analytics and insights
        </p>


          
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/50 border border-orange-500/20 p-6">
            <h3 className="text-xl font-semibold mb-6">Student Growth</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#000",
                      border: "1px solid rgba(249, 115, 22, 0.2)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="students"
                    stroke="#F97316"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-black/50 border border-orange-500/20 p-6 flex flex-col items-center justify-center text-center"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

