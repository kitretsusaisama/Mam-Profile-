import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dr. Upinder Kaur – WS Clinic, Delhi | Book an Appointment",
  description:
    "Get in touch with Dr. Upinder Kaur, Senior Psychologist and Director at WS Clinic, Kirti Nagar. Schedule a consultation for mental health support.",
  keywords: [
    "Contact Dr. Upinder Kaur",
    "WS Clinic Kirti Nagar contact",
    "Book therapy appointment",
    "My Child Therapy Delhi",
    "Kalra Hospital psychologist",
    "Psychologist near me Delhi",
    "Mental health consultation",
    "Therapy booking WS Clinic",
    "Child psychologist Delhi contact",
    "Counselling appointment Delhi",
    "Reach Dr. Upinder Kaur",
    "Psychologist phone number",
    "Mental health support Delhi",
    "Contact counselling clinic",
    "Therapist Delhi appointment"
  ],

  openGraph: {
    title: "Contact Dr. Upinder Kaur – WS Clinic, Delhi",
    description:
      "Reach out to WS Clinic or My Child Therapy to book an appointment with Dr. Upinder Kaur, a trusted psychologist with over 22 years of experience.",
    url: "https://www.drupinderkaur.com/contact",
    siteName: "Dr. Upinder Kaur",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.drupinderkaur.com/images/contact-page-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Dr. Upinder Kaur at WS Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dr. Upinder Kaur – WS Clinic, Delhi",
    description:
      "Looking for expert psychological support? Contact Dr. Upinder Kaur for compassionate, evidence-based care at WS Clinic, Kirti Nagar.",
    images: ["https://www.drupinderkaur.com/images/contact-page-cover.jpg"],
  },
  alternates: {
    canonical: "https://www.drupinderkaur.com/contact",
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
  category: "Healthcare",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
