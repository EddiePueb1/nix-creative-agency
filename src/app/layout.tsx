import '../globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Nix Creative | Digital Marketing Agency in Myrtle Beach, SC',
  description: 'Nix Creative is a digital marketing agency in Myrtle Beach, SC helping service businesses grow with website design, SEO, social media, branding, analytics, and AI automations.',
  openGraph: {
    title: 'Nix Creative | Digital Marketing Agency in Myrtle Beach, SC',
    description: 'Nix Creative helps service businesses across the U.S. grow with website design, SEO, social media, branding, data analytics, and AI automations.',
    siteName: 'Nix Creative',
    url: 'https://nixcreative.net',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nix Creative | Digital Marketing Agency',
    description: 'Nix Creative helps service businesses grow with website design, SEO, social media, branding, analytics, and AI automations.',
  },
  alternates: {
    canonical: 'https://nixcreative.net',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N6FGTRV6W1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N6FGTRV6W1');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-[#f5f5f5] text-[#111111] font-sans selection:bg-[#b4ff39] selection:text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
