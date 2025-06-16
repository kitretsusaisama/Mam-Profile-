import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Upinder Kaur | Leading Psychologist in Delhi – WS Clinic",
  description:
    "Discover the inspiring journey of Dr. Upinder Kaur, a renowned psychologist with over 22 years of clinical excellence in adult, child, and adolescent mental health. Director of WS Clinic and founder of My Child Therapy in Kirti Nagar, Delhi.",
  keywords: [
    "Best Psychologist in Delhi",
    "Dr. Upinder Kaur",
    "Senior Psychologist Delhi",
    "WS Clinic Kirti Nagar",
    "My Child Therapy",
    "Child Psychologist",
    "Counselling Psychologist",
    "Mental Health Expert",
    "Therapist Delhi",
    "Psychologist for Children",
    "Adolescent Therapy",
    "Psychological Assessment",
    "Parenting Support",
    "OCD Treatment Delhi",
    "Anxiety Depression Counselling",
    "Developmental Assessments"
  ],
  openGraph: {
    title: "About Dr. Upinder Kaur | Leading Psychologist in Delhi – WS Clinic",
    description:
      "Explore the professional background and compassionate mission of Dr. Upinder Kaur, one of Delhi's most respected mental health experts.",
    url: "https://www.drupinderkaur.com/about",
    siteName: "Dr. Upinder Kaur",
    type: "profile",
    locale: "en_IN",
    images: [
      {
        url: "https://www.drupinderkaur.com/images/upinder-kaur.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Upinder Kaur – Senior Psychologist in Delhi",
      },
    ],
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
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Upinder Kaur – Senior Psychologist in Delhi",
    description:
      "Learn more about Dr. Upinder Kaur, her clinical expertise, and her compassionate approach to mental health and well-being.",
    images: ["https://www.drupinderkaur.com/images/upinder-kaur.jpg"],
  },
  alternates: {
    canonical: "https://www.drupinderkaur.com/about",
  },
  category: "Healthcare",
};


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
