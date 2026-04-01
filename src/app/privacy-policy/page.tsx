export const metadata = {
  title: 'Privacy Policy | Nix Creative',
  description:
    'How Nix Creative collects, uses, and protects your personal information.',
}

const LAST_UPDATED = 'March 31, 2026'

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen selection:bg-[#b4ff39] selection:text-black">

      {/* Hero */}
      <section className="bg-[#111111] text-white pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Privacy Policy
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
            <h2 className="font-display text-xl font-bold text-[#111111]">Who we are</h2>
            <p className="text-gray-600 leading-relaxed">
              Nix Creative is a brand of{' '}
              <strong className="text-[#111111]">BLU Analytics and Consulting LLC</strong>, a
              limited liability company registered in South Carolina ("we," "us," or "our").
              Nix Creative operates as the digital marketing division of BLU Analytics and
              Consulting LLC, providing website design, SEO, social media management, brand
              identity, data analytics, and AI automation services to businesses nationwide.
              Our principal place of business is Myrtle Beach, South Carolina.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When this policy refers to "Nix Creative," "we," "us," or "our," it refers to
              BLU Analytics and Consulting LLC and its Nix Creative brand, operating at{' '}
              <a
                href="https://nixcreative.net"
                className="text-[#88c222] underline underline-offset-2"
              >
                nixcreative.net
              </a>
              .
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this policy, contact us at{' '}
              <a
                href="mailto:contact@nixcreative.net"
                className="text-[#88c222] underline underline-offset-2"
              >
                contact@nixcreative.net
              </a>{' '}
              or call{' '}
              <a
                href="tel:+18546007030"
                className="text-[#88c222] underline underline-offset-2"
              >
                (854) 600-7030
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Information we collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed pl-2">
              <li>
                <strong>Contact form submissions</strong> — your name, email address, phone
                number, business name, and the message you send when reaching out through our
                website.
              </li>
              <li>
                <strong>Email newsletter sign-ups</strong> — your email address when you
                subscribe to Nix Creative Insights, our marketing newsletter.
              </li>
              <li>
                <strong>Communications</strong> — any information you share when you email,
                call, or message us directly.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We also automatically collect certain technical information when you visit our
              website, such as your IP address, browser type, pages visited, and time spent
              on pages. This data is collected through standard web analytics tools and
              cookies to help us understand how visitors use our site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              How we use your information
            </h2>
            <p className="text-gray-600 leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed pl-2">
              <li>Respond to your inquiries and fulfill service requests</li>
              <li>Send you our marketing newsletter (Nix Creative Insights) if you subscribed</li>
              <li>Improve our website and services based on how visitors interact with them</li>
              <li>Send transactional communications related to our services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We will not send you marketing emails unless you have opted in. Every marketing
              email we send includes an unsubscribe link. You can opt out at any time.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              We do not sell your data
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nix Creative does not sell, rent, trade, or otherwise transfer your personal
              information to third parties for their marketing purposes. Full stop.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We may share your information with trusted service providers who assist us in
              operating our website and delivering our services — for example, our email
              delivery platform (Resend) processes newsletter subscriptions on our behalf.
              These providers are contractually required to keep your information confidential
              and may not use it for any purpose other than providing services to us.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website uses cookies — small text files stored on your device — to
              understand how visitors use our site and to improve your experience. You can
              instruct your browser to refuse all cookies or to alert you when cookies are
              being sent. Note that some parts of our site may not function properly if
              cookies are disabled.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Third-party links
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices or content of those sites. We encourage you to review
              the privacy policy of any third-party site you visit.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Your rights and data deletion
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to request access to, correction of, or deletion of any
              personal information we hold about you. To make such a request, contact us at{' '}
              <a
                href="mailto:contact@nixcreative.net"
                className="text-[#88c222] underline underline-offset-2"
              >
                contact@nixcreative.net
              </a>
              . We will respond within 30 days.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you are a resident of California, you may have additional rights under the
              California Consumer Privacy Act (CCPA). To exercise those rights, contact us
              using the information above.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">Data security</h2>
            <p className="text-gray-600 leading-relaxed">
              We take reasonable technical and organizational measures to protect your
              personal information against unauthorized access, loss, or misuse. However, no
              method of transmission over the internet is 100% secure. If you have concerns
              about a specific piece of data, please contact us directly.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Changes to this policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we will
              update the "Last updated" date at the top of this page. We encourage you to
              review this page periodically. Continued use of our website after any changes
              constitutes your acceptance of the updated policy.
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
