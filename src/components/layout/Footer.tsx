import { Instagram, Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────
// SEO NOTES — why this footer is structured the way it is
//
// 1. LocalBusiness schema is injected as JSON-LD so Google can
//    index your NAP (Name, Address, Phone) and show it in local
//    search results and Knowledge Panels.
//
// 2. The location copy ("Myrtle Beach, SC") is explicit text on
//    the page — not hidden — so crawlers associate your agency
//    with that geography.
//
// 3. All 6 service pages are linked from the footer so Google
//    can discover and crawl them from every page of the site.
//
// 4. The tagline in the brand description column contains the
//    primary keyword phrase "digital marketing agency Myrtle Beach"
//    naturally embedded in real copy.
//
// 5. TODO: Once you have real social URLs, update the href="#"
//    placeholders below — social profile links are a local SEO
//    signal when they match your Google Business Profile.
// ─────────────────────────────────────────────────────────────────

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nix Creative",
  "description": "Digital marketing agency in Myrtle Beach, SC serving service businesses across the U.S. with website design, SEO, social media, branding, and AI automations.",
  "url": "https://nixcreative.net",
  "telephone": "+18546007030",
  "email": "hello@nixcreative.net",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Myrtle Beach",
    "addressRegion": "SC",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "Website Design",
    "SEO",
    "Social Media Marketing",
    "Brand Identity",
    "Data & Analytics",
    "AI Automations"
  ],
  "sameAs": [
    // TODO: Add your real social profile URLs here once set up
    // "https://www.linkedin.com/company/nix-creative",
    // "https://www.instagram.com/nixcreative",
    // "https://www.facebook.com/nixcreative",
  ]
};

const SERVICES = [
  { label: "Website Design",   href: "/services/website-design" },
  { label: "SEO",              href: "/services/seo" },
  { label: "Social Media",     href: "/services/social-media" },
  { label: "Brand Identity",   href: "/services/branding" },
  { label: "Data & Analytics", href: "/services/analytics" },
  { label: "AI Automations",   href: "/services/ai-automations" },
];

const COMPANY = [
  { label: "About Us",  href: "/about" },
  { label: "Agency",    href: "/agency" },
  { label: "Results",   href: "/results" },
  { label: "Insights",  href: "/#insights" },
  { label: "Contact",   href: "/contact" },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    // TODO: Replace # with your real LinkedIn URL
    // e.g. "https://www.linkedin.com/company/nix-creative"
    href: "#",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    // TODO: Replace # with your real Instagram URL
    // e.g. "https://www.instagram.com/nixcreative"
    href: "#",
    icon: Instagram,
  },
  {
    label: "Facebook",
    // TODO: Replace # with your real Facebook URL
    // e.g. "https://www.facebook.com/nixcreative"
    href: "#",
    icon: Facebook,
  },
  {
    label: "Twitter / X",
    // TODO: Replace # with your real Twitter/X URL
    // e.g. "https://twitter.com/nixcreative"
    href: "#",
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <>
      {/* ── LocalBusiness JSON-LD schema for Google ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />

      <footer className="bg-[#111111] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

            {/* Brand column — spans 2 cols on large screens */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="text-4xl font-display font-bold tracking-tight mb-6 block"
                aria-label="Nix Creative — home"
              >
                nix
              </Link>
              <p className="text-gray-400 text-base max-w-xs mb-3 leading-relaxed">
                A digital marketing agency in Myrtle Beach, SC helping
                service businesses grow with less hassle and more clarity.
              </p>
              <p className="text-gray-600 text-sm mb-8">
                Serving clients across the United States.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {SOCIAL.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`Nix Creative on ${label}`}
                    rel="noopener noreferrer"
                    target={href !== "#" ? "_blank" : undefined}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#b4ff39] hover:text-black transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services column */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {SERVICES.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {COMPANY.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@nixcreative.net"
                    className="flex items-start gap-3 text-gray-400 text-sm hover:text-[#b4ff39] transition-colors group"
                  >
                    <Mail size={14} className="mt-0.5 shrink-0 group-hover:text-[#b4ff39]" />
                    hello@nixcreative.net
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18546007030"
                    className="flex items-start gap-3 text-gray-400 text-sm hover:text-[#b4ff39] transition-colors group"
                  >
                    <Phone size={14} className="mt-0.5 shrink-0 group-hover:text-[#b4ff39]" />
                    (854) 600-7030
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-500 text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>
                    Myrtle Beach, SC
                    <br />
                    <span className="text-gray-600 text-xs">Serving clients nationwide</span>
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>
              © {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:text-gray-400 transition-colors">
                Nix Creative
              </Link>
              . All rights reserved.
            </p>
            <ul className="flex gap-6">
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-gray-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-gray-400 transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
}
