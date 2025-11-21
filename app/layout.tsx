import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'EAS OPS AI Solutions',
    template: '%s | EAS OPS AI Solutions'
  },
  description:
    'EAS OPS AI Solutions delivers AI-driven automation, observability, and reliability engineering for modern operations teams.',
  metadataBase: new URL('https://www.easops.ai'),
  openGraph: {
    title: 'EAS OPS AI Solutions',
    description:
      'AI-driven automation, observability, and reliability engineering for modern operations teams.',
    url: 'https://www.easops.ai',
    siteName: 'EAS OPS AI Solutions',
    images: [
      {
        url: '/images/og-placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'EAS OPS AI Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EAS OPS AI Solutions',
    description:
      'AI-driven automation, observability, and reliability engineering for modern operations teams.',
    images: ['/images/og-placeholder.svg']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-hero-gradient">
        <Navbar />
        <main className="pt-24 pb-16 space-y-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
