"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-outfit bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-3xl"
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: "25%",
            left: "35%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-transparent" />
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: "10%",
            left: "30%",
          }}
        />
        <motion.div
          className="absolute h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-2xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: "40%",
            right: "20%",
          }}
        />
<div className="absolute top-1/4 left-1/4 w-28 h-28 border border-orange-500/20 rounded-xl transform rotate-45 sm:w-44 sm:h-44 " />
<div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-orange-500/20 rounded-full sm:bottom-1/4 sm:right-1/4 sm:w-32 sm:h-32" />
<div className="hidden md:block absolute top-1/3 right-1/3 w-20 h-20 border border-orange-500/20 transform rotate-12 sm:top-1/3 sm:right-1/3 sm:w-28 sm:h-28" />

      </div>

      {/* Centered Logo */}
      <div className="relative z-10 mb-10">
      <Image
  src="/asklogo.png" // Replace with your logo path
  alt="Logo"
  width={300}
  height={300}
  className="hidden md:block mx-auto"
/>
        {/* <h1 className="text-6xl text-orange-500 font-extrabold">AskLMS</h1> */}
      </div>

      {/* Main Content */}
      <div className="container px-4 mx-auto relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 font-space-grotesk"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-200 to-orange-500 animate-gradient">
            Transform Your Coaching Institute
          </span>
          <br />
          <span className="text-white">with Digital Excellence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 lg:mx-44"
        >
          Comprehensive management solution for offline coaching institutes. 
          Streamline your operations, enhance student learning, and grow your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 transition-all font-medium relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              <span className="relative">Get Started</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-orange-500/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              <span className="relative">Book Demo</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  )
}
