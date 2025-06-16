import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions – Dr. Upinder Kaur | WS Clinic Delhi",
    description:
        "Find answers to commonly asked questions about mental health therapy, child psychology, booking consultations, and Dr. Upinder Kaur’s clinical approach.",
    keywords: [
        "Psychologist FAQs",
        "Therapy session questions",
        "Mental health consultation FAQs",
        "Child therapy common questions",
        "What to expect in counselling",
        "Booking therapy appointment",
        "OCD and anxiety treatment info",
        "Developmental assessment FAQs",
        "How therapy works",
        "Parent counselling guidance",
        "Psychological evaluation queries",
        "Speech delay therapy questions",
        "Therapy for teenagers FAQs",
        "Psychologist Delhi queries",
        "Dr. Upinder Kaur FAQ"
    ],
    openGraph: {
        title: "FAQs – Dr. Upinder Kaur | Child & Adult Psychologist in Delhi",
        description:
            "Explore frequently asked questions about therapy sessions, conditions treated, appointment process, and child assessments by Dr. Upinder Kaur.",
        url: "https://www.drupinderkaur.com/faq",
        siteName: "Dr. Upinder Kaur",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "https://www.drupinderkaur.com/images/faq-cover.jpg",
                width: 1200,
                height: 630,
                alt: "FAQ for therapy with Dr. Upinder Kaur",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQs – Dr. Upinder Kaur | WS Clinic Delhi",
        description:
            "Need help understanding therapy or assessments? View FAQs related to services offered by Dr. Upinder Kaur.",
        images: ["https://www.drupinderkaur.com/images/faq-cover.jpg"],
    },
    alternates: {
        canonical: "https://www.drupinderkaur.com/faq",
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
    category: "Mental Health Support",
};

export default function FAQLayout({
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
