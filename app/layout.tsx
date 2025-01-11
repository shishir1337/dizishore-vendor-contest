import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DiziShore's Digital Vendor Contest 1.0 - Win £1,000",
  description: "Join DiziShore's Creator Campaign to showcase your digital products, compete for a £1,000 grand prize, and reach a global audience of buyers. Turn your creations into cash and build your online presence!",
  metadataBase: new URL('https://campaign.dizishore.com'),
  openGraph: {
    title: "DiziShore's Digital Vendor Contest 1.0 - Win £1,000",
    description: "Join DiziShore's Creator Campaign to showcase your digital products, compete for a £1,000 grand prize, and reach a global audience of buyers. Turn your creations into cash and build your online presence!",
    url: 'https://campaign.dizishore.com',
    siteName: "DiziShore's Digital Vendor Contest",
    images: [
      {
        url: '/Dizishore_Landing-Page-Hero-Image.png',
        width: 1200,
        height: 630,
        alt: "DiziShore's Digital Vendor Contest 1.0",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DiziShore's Digital Vendor Contest 1.0 - Win £1,000",
    description: "Join DiziShore's Creator Campaign to showcase your digital products, compete for a £1,000 grand prize, and reach a global audience of buyers. Turn your creations into cash and build your online presence!",
    images: ['/Dizishore_Landing-Page-Hero-Image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

