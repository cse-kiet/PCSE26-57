"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/asklms-logo-white.png"
              alt="AskLMS Logo"
              width={160}
              height={68}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 p-4 rounded-md shadow-lg"
          >
            <nav className="flex flex-col space-y-4 text-center">
              <Link
                href="/"
                className="text-white hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-orange-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-orange-500 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
              
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
