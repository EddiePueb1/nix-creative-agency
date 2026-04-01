export const metadata = {
  title: 'Accessibility | Nix Creative',
  description: 'Our commitment to ensuring nixcreative.net is accessible to everyone.',
}

const LAST_UPDATED = 'March 31, 2026'

export default function AccessibilityPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen selection:bg-[#b4ff39] selection:text-black">

      {/* Hero */}
      <section className="bg-[#111111] text-white pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Accessibility
          </h1>
          <p className="text-gray-400 text-base">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 space-y-10">

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">Our commitment</h2>
            <p className="text-gray-600 leading-relaxed">
              Nix Creative is committed to ensuring nixcreative.net is accessible to everyone, including people with disabilities. We believe digital access is a right, not an afterthought.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">Standards we're working toward</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to conform to WCAG 2.1 Level AA — the widely accepted standard for web accessibility. In plain terms that means our site should be perceivable, operable, understandable, and robust across all users and assistive technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">What we've built in</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed pl-2">
              <li>Semantic HTML so screen readers can navigate the page structure correctly</li>
              <li>Descriptive alt text on images</li>
              <li>Keyboard navigability — you can move through the site without a mouse</li>
              <li>Color contrast ratios that meet or exceed AA standards</li>
              <li>Fully responsive design across mobile, tablet, and desktop</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">Known limitations</h2>
            <p className="text-gray-600 leading-relaxed">
              This site is actively being developed. Some areas may not yet fully meet WCAG 2.1 Level AA. We are continuously auditing and improving as the site grows.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">Report a barrier</h2>
            <p className="text-gray-600 leading-relaxed">
              If you hit an accessibility problem on our site, contact us at{' '}
              <a href="mailto:contact@nixcreative.net" className="text-[#88c222] underline underline-offset-2">
                contact@nixcreative.net
              </a>{' '}
              or{' '}
              <a href="tel:+18546007030" className="text-[#88c222] underline underline-offset-2">
                (854) 600-7030
              </a>
              . We aim to respond within 5 business days and will make every reasonable effort to provide the information or functionality you need through an alternative method while we fix the issue.
            </p>
          </div>

          <div className="bg-[#f5f5f5] rounded-3xl p-6 space-y-2">
            <p className="font-display font-bold text-[#111111]">Questions?</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reach out any time at{' '}
              <a href="mailto:contact@nixcreative.net" className="text-[#88c222] underline underline-offset-2">
                contact@nixcreative.net
              </a>{' '}
              or{' '}
              <a href="tel:+18546007030" className="text-[#88c222] underline underline-offset-2">
                (854) 600-7030
              </a>
              . Nix Creative is a brand of BLU Analytics and Consulting LLC · Myrtle Beach, SC · nixcreative.net
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
