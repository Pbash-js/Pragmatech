import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              Pragmatech
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              We craft digital experiences that transform businesses and delight users through innovative software
              development and design.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Product Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Pragmatech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

