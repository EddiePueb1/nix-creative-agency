export const metadata = {
  title: 'Terms of Service | Nix Creative',
  description:
    'Terms and conditions governing the use of Nix Creative services and website.',
}

const LAST_UPDATED = 'March 31, 2026'

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen selection:bg-[#b4ff39] selection:text-black">

      {/* Hero */}
      <section className="bg-[#111111] text-white pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Terms of Service
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
            <h2 className="font-display text-xl font-bold text-[#111111]">Agreement to terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing nixcreative.net or engaging Nix Creative for services, you agree
              to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our website or services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nix Creative is a brand of{' '}
              <strong className="text-[#111111]">BLU Analytics and Consulting LLC</strong>, a
              limited liability company registered in South Carolina. All services marketed
              under the Nix Creative name are provided by, and all agreements are entered
              into with, BLU Analytics and Consulting LLC. References to "Nix Creative,"
              "we," "us," or "our" throughout these terms refer to BLU Analytics and
              Consulting LLC, operating under the Nix Creative brand from Myrtle Beach,
              South Carolina.
            </p>
            <p className="text-gray-600 leading-relaxed">
              These terms apply to all visitors, leads, clients, and anyone who accesses or
              uses our website or purchases services from us.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">Our services</h2>
            <p className="text-gray-600 leading-relaxed">
              Nix Creative provides digital marketing services including website design and
              development, search engine optimization (SEO), social media management, brand
              identity design, data analytics, and AI automation services. Specific
              deliverables, timelines, and pricing for each engagement are outlined in a
              separate agreement or proposal provided to the client before work begins.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to refuse service to anyone for any reason at any time.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Payment and billing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Payment terms are specified in each client proposal or service agreement.
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed pl-2">
              <li>Project work may require a deposit before work begins</li>
              <li>Invoices are due within 14 days of the invoice date</li>
              <li>
                Late payments may result in a pause of active work until the outstanding
                balance is resolved
              </li>
              <li>
                Retainer or ongoing services are billed monthly, in advance
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Client responsibilities
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Clients agree to provide timely feedback, content, assets, and approvals
              required to complete the agreed work. Delays caused by the client may affect
              project timelines. Nix Creative is not liable for missed deadlines that result
              from a client's failure to provide necessary materials or approvals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Clients represent that they have the right to use all content, images,
              trademarks, and materials provided to Nix Creative for use in delivering
              services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Intellectual property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Upon receipt of full payment, clients receive ownership of final deliverables
              (e.g., logo files, website code, completed designs) as specified in the
              project agreement. Nix Creative retains the right to display completed work in
              its portfolio and marketing materials unless otherwise agreed in writing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All content on nixcreative.net — including text, graphics, logos, and design
              — is the property of Nix Creative and may not be reproduced without written
              permission.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Either party may terminate an ongoing service engagement with 30 days' written
              notice. Upon termination, clients are responsible for payment of all work
              completed to date. Nix Creative will deliver all completed work product upon
              receipt of final payment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nix Creative reserves the right to immediately terminate service to any client
              who engages in abusive, fraudulent, or illegal activity.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Disclaimer of warranties
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our services and website are provided "as is." Nix Creative makes no
              warranties, expressed or implied, regarding the results of any marketing
              campaign, SEO effort, or other service. While we bring expertise and genuine
              effort to every engagement, we cannot guarantee specific business outcomes such
              as a particular number of leads, revenue targets, or search ranking positions,
              as these depend on many factors outside our control.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Limitation of liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, BLU Analytics and Consulting LLC
              (operating as Nix Creative) shall not be liable for any indirect, incidental,
              special, or consequential damages arising out of or related to our services or
              website, even if advised of the possibility of such damages. Our total
              liability to any client shall not exceed the amount paid to us in the 30 days
              prior to the event giving rise to the claim.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">Governing law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms are governed by the laws of the State of South Carolina. Any
              disputes arising under these terms shall be subject to the exclusive
              jurisdiction of the courts located in Horry County, South Carolina. All
              agreements are entered into with BLU Analytics and Consulting LLC, the legal
              entity operating the Nix Creative brand.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#111111]">
              Changes to these terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms of Service from time to time. Updates will be posted
              on this page with a revised "Last updated" date. Continued use of our website
              or services after changes are posted constitutes acceptance of the updated
              terms.
            </p>
          </div>

          <div className="bg-[#f5f5f5] rounded-3xl p-6 space-y-2">
            <p className="font-display font-bold text-[#111111]">Questions about these terms?</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Contact us at{' '}
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
