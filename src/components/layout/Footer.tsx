import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-4xl font-display font-bold tracking-tight mb-6 block"
            >
              nix
            </Link>
            <p className="text-gray-400 text-lg max-w-sm mb-8">
              Designed for ambitious brands ready to grow.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#b4ff39] hover:text-black transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#b4ff39] hover:text-black transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#b4ff39] hover:text-black transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-gray-300">
              <p>
                <a
                  href="mailto:hello@nixcreative.com"
                  className="hover:text-[#b4ff39] transition-colors"
                >
                  hello@nixcreative.com
                </a>
              </p>
              <p>
                <a
                  href="tel:888-555-0123"
                  className="hover:text-[#b4ff39] transition-colors"
                >
                  888-555-0123
                </a>
              </p>
              <p className="pt-4 text-gray-400">
                Based in NY |{" "}
                <a
                  href="#"
                  className="hover:text-white transition-colors underline underline-offset-4"
                >
                  Brooklyn
                </a>{" "}
                •{" "}
                <a
                  href="#"
                  className="hover:text-white transition-colors underline underline-offset-4"
                >
                  Manhattan
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#results"
                  className="hover:text-white transition-colors"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="/#agency"
                  className="hover:text-white transition-colors"
                >
                  Agency
                </Link>
              </li>
              <li>
                <Link
                  href="/#insights"
                  className="hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nix Creative. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
