import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed max-w-md">
              We are an accounts outsourcing company founded in year 2004 to
              provide quality professional accounting & bookkeeping outsourcing
              services to small and medium sized Accountancy practices in the
              UK.
            </p>

            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <div>+91 161-5002086 (IN)</div>
                  <div>020 3002 6314 (UK)</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">Email Us</div>
                  <div>info@sapphireinfo.net</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold mb-1">UK Address</div>
                  <div>
                    4 Whiteleys Parade, Uxbridge Road, Hillingdon, Uxbridge UB10
                    0PD
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold mb-1">US Address</div>
                  <div>55 River Drive South, Jersey City, N.J. 07029</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Faqs
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Blogs
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Accounts Outsourcing India
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Bookkeeping & Accounts Outsourcing
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Outsourced Finance Department
                </Link>
              </div>

              <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Downloads
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Newsletters
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Terms Of Service
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                >
                  Turnaround Time
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-300">
              © 2025 Sapphire Info Solutions (P) Ltd. All Rights Reserved.
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-1 text-sm text-gray-300">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Supplier Code Of Conduct
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Quality Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
