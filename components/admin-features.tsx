"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Users, BarChart2, Calendar, FileText, MessageSquare, Settings } from 'lucide-react'

export default function AdminFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-orange-950/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Feature-Loaded Admin Panel
          </h2>
          <div className="w-20 h-1 bg-[#FF6B00] mb-8 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take control of your institute with our comprehensive admin dashboard
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-black/50 border border-orange-500/20 p-6 relative group hover:border-orange-500/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Users className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-orange-200">Student Management</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Complete student profiles</li>
              <li>• Attendance tracking</li>
              <li>• Performance monitoring</li>
              <li>• Fee management</li>
            </ul>
          </Card>

          <Card className="bg-black/50 border border-orange-500/20 p-6 relative group hover:border-orange-500/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <BarChart2 className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-orange-200">Analytics & Reports</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Performance analytics</li>
              <li>• Financial reports</li>
              <li>• Attendance reports</li>
              <li>• Growth metrics</li>
            </ul>
          </Card>

          <Card className="bg-black/50 border border-orange-500/20 p-6 relative group hover:border-orange-500/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Calendar className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-orange-200">Batch Management</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Create & manage batches</li>
              <li>• Schedule classes</li>
              <li>• Teacher allocation</li>
              <li>• Resource planning</li>
            </ul>
          </Card>

          <Card className="bg-black/50 border border-orange-500/20 p-6 relative group hover:border-orange-500/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <FileText className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-orange-200">Content Management</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Upload study materials</li>
              <li>• Manage recorded lectures</li>
              <li>• Digital library</li>
              <li>• Resource sharing</li>
            </ul>
          </Card>

          <Card className="bg-black/50 border border-orange-500/20 p-6 relative group hover:border-orange-500/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageSquare className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-orange-200">Communication</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• WhatsApp integration</li>
              <li>• Email notifications</li>
              <li>• Announcement system</li>
              <li>• Parent communication</li>
            </ul>
          </Card>

          <Card className="bg-black/50 border border-orange-500/20 p-6 relative group hover:border-orange-500/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Settings className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-orange-200">System Settings</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• User management</li>
              <li>• Role-based access</li>
              <li>• Institute branding</li>
              <li>• Payment configuration</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

