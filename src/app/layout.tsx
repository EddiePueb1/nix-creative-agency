import '../globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Nix Creative Agency',
  description: 'A modern creative agency building digital experiences.',
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
