import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Noto_Serif,
  Noto_Serif_Devanagari,
  Playfair_Display
} from "next/font/google";

/* BODY FONT */

const serif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});

/* HINDI FONT */

const hindi = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400","500","600","700"],
  variable: "--font-hindi",
});

/* PREMIUM HEADING FONT */

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["500","600","700"],
  variable: "--font-heading",
});

/* POWERFUL SEO METADATA */

export const metadata = {
  metadataBase: new URL("https://jinsharnamtirth.com"),

  title: {
    default: "Jinsharnam Tirth Dham - Discover divine peace at Jinsharnam Tirth Dham",
    template: "%s | Jinsharnam Tirth Dham",
  },

  description:
    "Official website of Jinsharnam Tirth Dham – A sacred Jain spiritual destination dedicated to peace, devotion, meditation, and divine awakening.",

  keywords: [
    "Jinsharnam Tirth",
    "Jain Temple",
    "Jain Tirth",
    "Jain Spiritual Place",
    "Jain Pilgrimage",
    "Meditation Center",
    "Jain Dharma",
    "Jain Religious Site",
    "Spiritual Tirth India",
  ],

  authors: [{ name: "Jinsharnam Tirth Trust" }],

  creator: "Jinsharnam Tirth Trust",

  publisher: "Jinsharnam Tirth",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Jinsharnam Tirth Dham",
    description:
      "Discover divine peace at Jinsharnam Tirth Dham – A sacred Jain pilgrimage and spiritual meditation center.",
    url: "https://jinsharnamtirth.com",
    siteName: "Jinsharnam Tirth",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Jinsharnam Tirth Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jinsharnam Tirth Dham",
    description:
      "Sacred Jain pilgrimage destination for peace, devotion, and spiritual awakening.",
    images: ["/logo.png"],
  },

  icons: {
    icon:"/logo.png",
  },
};


/* VIEWPORT SETTINGS (NEW NEXTJS RULE) */

export const viewport = {
  themeColor: "#c4a34e",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
        ${serif.variable}
        ${hindi.variable}
        ${heading.variable}
        font-[var(--font-serif)]
        `}
      >

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}