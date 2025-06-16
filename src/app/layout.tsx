import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Upinder Kaur – Senior Psychologist & Mental Health Expert in Delhi",
  description:
    "Explore the professional services of Dr. Upinder Kaur, a renowned Clinical and Counselling Psychologist with 22+ years of experience. Specialized in adult, adolescent, and child therapy at WS Clinic, My Child Therapy, and Kalra Hospital, Delhi.",
  authors: [{ name: "Dr. Upinder Kaur" }],
  keywords: [
    "Dr. Upinder Kaur",
    "Psychologist in Delhi",
    "WS Clinic",
    "My Child Therapy",
    "Child Psychologist Delhi",
    "Counselling in Delhi",
    "Therapy for Children",
    "CBT Therapy",
    "Mental Health Expert"
  ],
  openGraph: {
    title: "Dr. Upinder Kaur – Senior Psychologist in Delhi",
    description:
      "Providing expert psychological care for adults, adolescents, and children in Delhi. Trusted by families for over 22 years.",
    url: "https://www.drupinderkaur.com",
    siteName: "Dr. Upinder Kaur",
    locale: "en_IN",
    type: "website",
  },
  metadataBase: new URL("https://www.drupinderkaur.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans bg-white text-slate-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
