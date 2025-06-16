import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psychology Blogs – Dr. Upinder Kaur | Mental Health Insights",
  description:
    "Read expert-written blogs by Dr. Upinder Kaur on mental health, emotional well-being, child psychology, and evidence-based therapeutic approaches.",
  keywords: [
    "Mental health blog",
    "Psychology articles",
    "Therapy insights",
    "Child psychology tips",
    "Adolescent mental health",
    "Parenting and behavior",
    "Counselling techniques",
    "OCD and anxiety advice",
    "Depression treatment guidance",
    "Psychologist blogs India",
    "WS Clinic blog",
    "Dr. Upinder Kaur blog",
    "Mental wellness Delhi",
    "Emotional well-being blog",
    "Therapist blog posts"
  ],
  openGraph: {
    title: "Psychology Blogs – Dr. Upinder Kaur | Mental Health Insights",
    description:
      "Explore a curated selection of insightful blogs by Dr. Upinder Kaur on child development, adult therapy, parenting, OCD, ADHD, and more.",
    url: "https://www.drupinderkaur.com/blogs",
    siteName: "Dr. Upinder Kaur",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.drupinderkaur.com/images/blog-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Mental Health Blog by Dr. Upinder Kaur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Health Blogs – Dr. Upinder Kaur",
    description:
      "Gain valuable insights from Dr. Upinder Kaur’s blogs on parenting, child psychology, mental wellness, and therapy techniques.",
    images: ["https://www.drupinderkaur.com/images/blog-cover.jpg"],
  },
  alternates: {
    canonical: "https://www.drupinderkaur.com/blogs",
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
  category: "Mental Health",
};

export default function BlogsLayout({
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
