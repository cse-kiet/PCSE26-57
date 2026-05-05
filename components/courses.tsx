"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Admin Portal",
    subjects: ["User Management", "Reports", "Settings"],
    features: ["Secure Access", "Role-Based Permissions", "Real-Time Updates"],
  },
  {
    title: "Employee Portal",
    subjects: ["Performance", "Attendance", "Schedules"],
    features: ["Analytics Dashboard", "Task Assignments", "Notifications"],
  },
  {
    title: "Online Student",
    subjects: ["E-Learning", "Assessments", "Progress Tracking"],
    features: ["Expert Faculty", "Interactive Quizzes", "Daily Practice"],
  },
  {
    title: "Batch Student",
    subjects: ["Classroom Sessions", "Group Discussions", "Lab Access"],
    features: ["Personalized Feedback", "Past Papers", "Daily Practice"],
  },
];

export default function Courses() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our User Portals</h2>
          <div className="w-20 h-1 bg-[#FF6B00] mb-8 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our feature-rich portals designed for various user groups, providing seamless experiences and tools tailored to their needs.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border border-orange-500/20 p-6 h-full flex flex-col group hover:border-orange-500/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">
                  {course.title}
                </h3>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Areas</h4>
                  <ul className="space-y-1">
                    {course.subjects.map((subject, idx) => (
                      <li key={idx} className="text-gray-400 text-sm">
                        • {subject}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Features</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="mt-auto bg-black text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors"
                  variant="outline"
                >
                  View Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
