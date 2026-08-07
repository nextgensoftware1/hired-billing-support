// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';
import ScrollEffects from "./components/ScrollEffects";
import ScrollToTop from './components/ScrollToTop';
import CanonicalTags from './components/CanonicalTags';
import './globals.css';
import HBSChatbot from "./components/HBSChatbot";

// Load fonts with display: 'swap' to prevent FOIT
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hiredbillingsupport.com'),
  title: 'Pre-trained Remote Healthcare Teams | Fully Managed',
  description: 'Embedded healthcare billing, RCM, AR, credentialing, and operations support that helps practices reduce burden and protect revenue.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="-KfvcGQaWPa3VY7i83rcCBUx_ogHYgtOfugsaaaQpRA" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="google-site-verification" content="bEr7FhMP0YqUWHkHXZwVpouZShhT_lP2H6HtYNMLXKg" />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="gx2GJheLicBf9z+1yn2v9g"
          strategy="afterInteractive"
          async
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <CanonicalTags />
        </Suspense>
        <ScrollToTop />
        <Navigation />
        <main className="page-wrapper">
          {children}
          <ScrollAnimations />
          <ScrollEffects />
        </main>
        <Footer />
        <HBSChatbot />
      </body>
    </html>
  );
}
