'use client';

import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Palette, Shirt, CreditCard, Smartphone, Facebook, Instagram, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function MendozaCleaningCaseStudy() {

  const deliverables = [
    {
      icon: Palette,
      category: 'Brand Identity',
      items: [
        'Custom "M" logomark — two variations (wordmark and character lockup)',
        'Brand color system — cobalt blue as primary, consistent across all assets',
        'Illustrated brand character — cleaning professional, unique to Mendoza',
        'Typography selection and brand guidelines',
      ],
    },
    {
      icon: CreditCard,
      category: 'Print Materials',
      items: [
        'Business cards — front and back design',
        'QR code linking to Linktree profile on card back',
        'Dual contact layout — Georgina and Sherlyn Mendoza',
        'Car magnets for mobile brand visibility',
        'Licensed & Insured credentialing baked into design',
      ],
    },
    {
      icon: Shirt,
      category: 'Apparel',
      items: [
        'T-shirt design — logo-only lockup',
        'T-shirt design — character + logo lockup',
        'Two print-ready variations for flexibility',
      ],
    },
    {
      icon: Smartphone,
      category: 'Digital Presence',
      items: [
        'Linktree profile — @mendozacleaningmb',
        'Facebook Business Page connected',
        'Instagram profile connected',
        'Single scannable QR code unifying all digital touchpoints',
      ],
    },
  ];

  const beforeAfter = [
    {
      label: 'Logo',
      before: 'Generic clip art cartoon, no brand ownership',
      after: 'Custom "M" logomark with illustrated brand character',
    },
    {
      label: 'Business Card',
      before: 'Worn, no visual identity, casual copy',
      after: 'Professional dual-sided card with QR code',
    },
    {
      label: 'Colors',
      before: 'Random orange and light blue — no system',
      after: 'Cohesive cobalt blue brand color across all assets',
    },
    {
      label: 'Digital Presence',
      before: 'No social media, no online touchpoint',
      after: 'Facebook, Instagram, and Linktree all connected',
    },
    {
      label: 'Apparel',
      before: 'None',
      after: 'Two print-ready t-shirt designs for the team',
    },
    {
      label: 'Credibility signals',
      before: 'No licensing or insurance mentioned',
      after: '"Licensed & Insured" on every printed piece',
    },
  ];

  return (
    <main className="bg-[#f5f5f5] min-h-screen">

      {/* Hero */}
      <section className="bg-[#111111] pt-32 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#b4ff39] transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Results
            </Link>

            <p className="text-sm font-semibold tracking-widest uppercase text-[#b4ff39] mb-6">
              Case Study
            </p>

            <h1 className="font-display font-bold text-white text-5xl md:text-7xl leading-none mb-6">
              Mendoza<br />Cleaning Services
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
              A family-run cleaning business in Myrtle Beach with real hustle and zero brand presence. We gave them an identity that finally matched the quality of their work.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Brand Identity', 'Logo Design', 'Print Materials', 'Apparel', 'Linktree Setup'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#b4ff39]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
            {[
              { value: '0 → 1', label: 'Brand built from scratch', sub: 'Logo, colors, character, everything' },
              { value: '4', label: 'Deliverable categories', sub: 'Brand, print, apparel, digital' },
              { value: '3', label: 'Digital touchpoints', sub: 'Facebook, Instagram, Linktree' },
              { value: '100%', label: 'Client satisfaction', sub: 'Verbal testimonial on delivery' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="py-8 px-6 md:px-8"
              >
                <div className="font-display font-bold text-black text-3xl md:text-4xl leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-black font-semibold text-sm mb-0.5">{stat.label}</div>
                <div className="text-black/50 text-xs">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left: narrative */}
          <div className="lg:col-span-2 space-y-16">

            {/* The challenge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
                The Challenge
              </p>
              <h2 className="font-display font-bold text-[#111111] text-3xl md:text-4xl mb-6">
                Real business. No brand.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Georgina and Sherlyn Mendoza had been running their cleaning business in Myrtle Beach through word of mouth and hustle. They had clients. They had a reputation. What they didn't have was anything that made them look like the professional operation they actually were.
                </p>
                <p>
                  Their only marketing material was a worn business card — a generic clip art design with no logo, no consistent colors, and copy that read like a text message. It wasn't representing them. It was holding them back.
                </p>
                <p>
                  They needed a brand. Not just a logo — a complete visual identity that could live on a business card, a t-shirt, a car magnet, and a phone screen and still feel cohesive and professional.
                </p>
              </div>
            </motion.div>

            {/* Before / After */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
                Before & After
              </p>
              <h2 className="font-display font-bold text-[#111111] text-3xl md:text-4xl mb-8">
                The difference a brand makes.
              </h2>

              <div className="rounded-3xl overflow-hidden border border-gray-200">
                {/* Header row */}
                <div className="grid grid-cols-3 bg-[#111111]">
                  <div className="px-6 py-4 text-xs font-semibold tracking-widest uppercase text-gray-500">
                    Area
                  </div>
                  <div className="px-6 py-4 text-xs font-semibold tracking-widest uppercase text-gray-500">
                    Before
                  </div>
                  <div className="px-6 py-4 text-xs font-semibold tracking-widest uppercase text-[#b4ff39]">
                    After
                  </div>
                </div>

                {beforeAfter.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <div className="px-6 py-5 font-semibold text-sm text-[#111111]">
                      {row.label}
                    </div>
                    <div className="px-6 py-5 text-sm text-gray-400 leading-relaxed">
                      {row.before}
                    </div>
                    <div className="px-6 py-5 text-sm text-gray-700 leading-relaxed font-medium">
                      {row.after}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What we built */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
                What We Built
              </p>
              <h2 className="font-display font-bold text-[#111111] text-3xl md:text-4xl mb-6">
                An identity built to grow with them.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  We started with the logo — the anchor of everything else. The custom "M" logomark was built to be versatile: clean enough to emboss on a business card, bold enough to read on a t-shirt from across the room, and distinct enough to be unmistakably theirs.
                </p>
                <p>
                  We created two logo variations — a clean wordmark version and a character lockup featuring the illustrated Mendoza cleaning professional. The character gives them a mascot that adds warmth and personality to the brand while still feeling polished and intentional.
                </p>
                
                {/* Embedded Design Gallery Previews */}
                <div className="py-8 grid gap-6">
                  
                  {/* Business Cards Level */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md">
                       <img src="/images/results/mendoza/business-card1.png" alt="Mendoza Business Card Front" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/mendozacards/600/400'}} />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md">
                       <img src="/images/results/mendoza/business-card2.png" alt="Mendoza Business Card Back" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/mendozacards2/600/400'}} />
                    </div>
                  </div>

                  {/* Apparel Level */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md">
                       <img src="/images/results/mendoza/apparel1.png" alt="Mendoza Apparel Design 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/mendozaapparel/600/400'}} />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md">
                       <img src="/images/results/mendoza/apparel2.png" alt="Mendoza Apparel Design 2" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/mendozaapparel2/600/400'}} />
                    </div>
                  </div>

                  {/* Linktree Screenshot */}
                  <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md max-w-sm mx-auto">
                     <img src="/images/results/mendoza/linktree.png" alt="Mendoza Linktree Setup" className="w-full object-cover" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/mendozalinktree/400/800'}} />
                  </div>
                </div>

                <p>
                  From there, the brand rolled out across every touchpoint: dual-sided business cards with a QR code linking to their Linktree, car magnets for job-site visibility, and two t-shirt designs so the team looks the part from day one. The Linktree profile unified their Facebook, Instagram, and contact info under a single scannable link.
                </p>
                <p>
                  Every piece carries the same cobalt blue, the same logo, the same professional tone. For the first time, Mendoza Cleaning looks like the business they've always been.
                </p>
              </div>
            </motion.div>

            {/* Old business card callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111111] rounded-3xl p-8 md:p-10"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6">
                Where it started
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-display font-bold text-white text-2xl mb-4">
                    This was the only marketing material they had.
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    A worn, generic business card with no logo, no brand colors, and no digital presence. The copy read "If you need or like cleaning your house please contact me at any time" — a real business being undersold at every handoff.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#b4ff39]" />
                    <span className="text-gray-400 text-sm">This is what Nix Creative changed.</span>
                  </div>
                </div>
                {/* Placeholder for old business card image */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center border border-white/10">
                  <img
                    src="/images/results/mendoza/original.PNG"
                    alt="Mendoza Cleaning original business card — before rebrand"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/mendozabefore/600/400'}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right: sidebar */}
          <div className="space-y-8">

            {/* Client info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-6">
                Client
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Business</p>
                  <p className="font-display font-bold text-[#111111]">Mendoza Cleaning Services</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Location</p>
                  <p className="text-[#111111] font-medium">Myrtle Beach & Grand Strand, SC</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Industry</p>
                  <p className="text-[#111111] font-medium">Residential & Commercial Cleaning</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Credentials</p>
                  <p className="text-[#111111] font-medium">Licensed & Insured</p>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-4">Social Profiles</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook', href: '#' },
                    { icon: Instagram, label: 'Instagram', href: '#' },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#111111] hover:text-white transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="https://linktr.ee/mendozacleaningmb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-[#f5f5f5] text-gray-700 border border-transparent rounded-full py-3 text-sm font-semibold hover:bg-white hover:border-[#111111] hover:text-[#111111] transition-all"
              >
                View Linktree
                <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-6">
                Deliverables
              </p>
              <div className="space-y-8">
                {deliverables.map((section) => {
                  const Icon = section.icon;
                  return (
                    <div key={section.category}>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon size={14} className="text-[#88c222]" />
                        <p className="font-display font-bold text-[#111111] text-sm">{section.category}</p>
                      </div>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b4ff39] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Testimonial placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="bg-white rounded-3xl p-8 border-l-4 border-[#b4ff39] shadow-sm"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
                Client Feedback
              </p>
              {/* Swap this placeholder out when written testimonial is received */}
              <p className="text-gray-400 text-sm italic">
                Written testimonial coming soon — verbal feedback on delivery was overwhelmingly positive.
              </p>
              <p className="text-xs text-gray-800 font-semibold mt-3">— Georgina Mendoza, Mendoza Cleaning Services</p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#b4ff39] rounded-3xl p-8 shadow-sm"
            >
              <p className="font-display font-bold text-[#111111] text-xl mb-2">
                Ready to build your brand?
              </p>
              <p className="text-black/70 text-sm mb-6">
                Every business deserves an identity that represents them properly. Let's build yours.
              </p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-[#111111] text-white rounded-full py-3 text-sm font-semibold hover:bg-gray-800 hover:shadow-lg transition-all"
              >
                Start a conversation
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
