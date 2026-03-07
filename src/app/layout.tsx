import '../globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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
      <body className="min-h-screen bg-[#f5f5f5] text-[#111111] font-sans selection:bg-[#b4ff39] selection:text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
