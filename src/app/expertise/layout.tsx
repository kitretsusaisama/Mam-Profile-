import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Expertise – Dr. Upinder Kaur | Psychologist in Delhi",
  description:
    "Explore the wide-ranging clinical expertise of Dr. Upinder Kaur in adult, child, and adolescent mental health. Specializing in OCD, ADHD, PTSD, developmental disorders, and family therapy in Delhi.",
  keywords: [
    "Psychological expertise",
    "Mental health specialist Delhi",
    "Child and adolescent psychologist",
    "Therapy for anxiety and depression",
    "OCD and PTSD treatment",
    "Developmental assessments",
    "Autism and ADHD therapy",
    "Speech and language delay support",
    "Cognitive Behavioral Therapy Delhi",
    "DBT and ACT therapy",
    "Psychodynamic counselling",
    "Learning disability evaluation",
    "Emotional wellness specialist",
    "Parenting and behavioral therapy",
    "Psychological assessments Delhi"
  ],
  openGraph: {
    title: "Clinical Expertise – Dr. Upinder Kaur | Psychologist in Delhi",
    description:
      "Learn about Dr. Upinder Kaur's therapeutic approach and areas of specialization, including Cognitive Behavioral Therapy, Psychodynamic Therapy, and developmental assessments.",
    url: "https://www.drupinderkaur.com/expertise",
    siteName: "Dr. Upinder Kaur",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://www.drupinderkaur.com/images/therapy-session.jpg",
        height: 630,
        alt: "Therapy session by Dr. Upinder Kaur",
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
    title: "Clinical Expertise – Dr. Upinder Kaur",
    description:
      "From OCD and PTSD to child developmental delays, discover how Dr. Upinder Kaur empowers lives through expert psychological care.",
    images: ["https://www.drupinderkaur.com/images/therapy-session.jpg"],
  },
  alternates: {
    canonical: "https://www.drupinderkaur.com/expertise",
  },
  category: "Healthcare",
};

export default function ExpertiseLayout({
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
