"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Users, BookOpen, MapPin, ExternalLink, CheckCircle, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ClientShowcase() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <Badge className="bg-[#FF6B00]/20 text-[#FF6B00] mb-4 hover:bg-[#FF6B00]/30">Featured Client</Badge>
          <h4 className="text-4xl md:text-4xl font-bold mb-4">
            Our Client Spotlight</h4>
              <div className="w-20 h-1 bg-[#FF6B00] mb-8 mx-auto"></div>
          
          <p className="text-gray-300 max-w-2xl text-lg">
            We take pride in helping educational institutions transform digitally. Here's how we've empowered one of our
            valued clients.
          </p>
        </div>

        <Card className="border border-orange-500/20 rounded-xl bg-gradient-to-br from-black via-[#121212] to-[#1A1A1A] shadow-xl shadow-[#FF6B00]/5 overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <Image
                  src="/nitant-academy-dashboard4.png"
                  alt="Nitant Academy Dashboard"
                  width={600}
                  height={400}
                  className="object-cover h-full w-full transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-green-400">Active Client</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="bg-black/50 text-white border-gray-700">
                      Education
                    </Badge>
                    <Badge variant="outline" className="bg-black/50 text-white border-gray-700">
                      Coaching
                    </Badge>
                    <Badge variant="outline" className="bg-black/50 text-white border-gray-700">
                      Saharanpur
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-[#0A0A0A] to-[#121212]">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#FF6B00]">Nitant Academy</h3>

                    </div>
                    <Link
                      href="https://nitantacademy.asklms.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#FF6B00]/10 hover:bg-[#FF6B00]/20 text-[#FF6B00] px-4 py-2 rounded-full transition-colors duration-300"
                    >
                      <span>Visit Portal</span>
                      <ExternalLink size={14} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col gap-1 bg-black/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-[#FF6B00]">
                        <Users size={18} />
                        <span className="font-medium">Students</span>
                      </div>
                      <p className="text-white font-bold text-xl">500+</p>
                    </div>
                    <div className="flex flex-col gap-1 bg-black/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-[#FF6B00]">
                        <BookOpen size={18} />
                        <span className="font-medium">Courses</span>
                      </div>
                      <p className="text-white font-bold text-xl">Multiple</p>
                    </div>
                    <div className="flex flex-col gap-1 bg-black/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-[#FF6B00]">
                        <Calendar size={18} />
                        <span className="font-medium">Since</span>
                      </div>
                      <p className="text-white font-bold text-xl">2000</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={16} className="text-[#FF6B00]" />
                      <span className="text-gray-300">Saharanpur, Uttar Pradesh</span>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed mb-4">
                      Nitant Academy is a premier coaching institute based in Saharanpur, dedicated to providing quality
                      education and guidance to students preparing for competitive examinations.
                    </p>

                    <div
                      className={`text-gray-300 space-y-3 transition-all duration-500 ease-in-out ${
                        showMore ? "max-h-[500px] opacity-100" : "max-h-[80px] overflow-hidden opacity-80"
                      }`}
                    >
                      <p>
  Nitant Academy offers comprehensive coaching programs for various competitive exams, emphasizing conceptual clarity and practical application. Since integrating AskLMS, the institute has streamlined administrative processes, enhanced student engagement, and improved operational efficiency. AskLMS, an offline batch management and learning management system, provides key features like secure payment integration, Google Login, role-based access control, and a student-friendly portal for accessing courses, recorded lectures, and study materials. AskLMS is designed to optimize coaching institute operations, ensuring a seamless learning experience.
</p>

                    </div>

                    <Button
                      variant="link"
                      className="text-[#FF6B00] p-0 mt-3 flex items-center gap-1 hover:text-[#FF8C40] font-medium"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "Read less" : "Read more"}
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-300 ${showMore ? "rotate-90" : ""}`}
                      />
                    </Button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h4 className="text-xl font-semibold mb-5 flex items-center gap-2">
                    <span className="text-[#FF6B00]">How AskLMS Helped</span>
                    <Award size={18} className="text-[#FF6B00]" />
                  </h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg hover:bg-black/30 transition-colors">
                      <CheckCircle size={20} className="text-[#FF6B00] mt-0.5 shrink-0" />
                      <span>Implemented a comprehensive student management system</span>
                    </li>
                    <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg hover:bg-black/30 transition-colors">
                      <CheckCircle size={20} className="text-[#FF6B00] mt-0.5 shrink-0" />
                      <span>Digitized Registration tracking and fee management</span>
                    </li>
                    <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg hover:bg-black/30 transition-colors">
                      <CheckCircle size={20} className="text-[#FF6B00] mt-0.5 shrink-0" />
                      <span>Monitoring institute's performance with real-time analytics and insights.</span>
                    </li>
                    {/* <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg hover:bg-black/30 transition-colors">
                      <CheckCircle size={20} className="text-[#FF6B00] mt-0.5 shrink-0" />
                      <span>
                        Provided a dedicated portal at{" "}
                        <Link
                          href="https://nitantacademy.asklms.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FF6B00] hover:underline font-medium"
                        >
                          nitantacademy.asklms.in
                        </Link>
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Link href="https://nitantacademy.asklms.in" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#FF6B00] hover:bg-[#FF8C40] text-white border-none px-8 py-6 text-lg rounded-full shadow-lg shadow-[#FF6B00]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6B00]/30">
              Visit Nitant Academy
              <ChevronRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

