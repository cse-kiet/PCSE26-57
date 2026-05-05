import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500/20">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASKlms__1_-removebg-preview-2SbQ6puaMaXG0rxdrr2OpHY8NBaOaI.png"
              alt="AskLMS Logo"
              src="/ask3.png"
              width={120}
              height={48}
               style={{
                objectFit: "cover",
                borderRadius: "30px", 
              }}
            />
            {/* <p className="text-gray-400 text-sm">
              Transforming coaching institutes with modern digital solutions.
            </p> */}
            <div className="flex space-x-4 items-center ml-3">
              {/* <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </Link> */}
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Online Payments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: aslms.team@gmail.com</li>
              <li>Phone: 8808665840</li>
              <li>Address: Ghaziabad(U.P.),India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500/20 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AskLMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

