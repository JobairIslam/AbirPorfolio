import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Ibrahim A. | Social Media Manager & Content Strategy Specialist',
  description: 'Experienced Social Media Manager and Content Strategy Specialist specializing in organic growth, brand development, and digital marketing across multiple platforms.',
  openGraph: {
    title: 'Ibrahim A. | Social Media Manager & Content Strategy Specialist',
    description: 'Experienced Social Media Manager and Content Strategy Specialist specializing in organic growth, brand development, and digital marketing across multiple platforms.',
    url: 'https://ibrahim-portfolio.vercel.app',
    siteName: 'Ibrahim A. Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}