import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhruv Kumar | Data Analyst Portfolio",
  
  description:
    "Portfolio of Dhruv Kumar — Data Analyst specializing in Machine Learning, NLP, AI systems, dashboards, SQL, and analytics applications.",

  keywords: [
    "Data Analyst",
    "Machine Learning",
    "NLP",
    "Power BI",
    "SQL",
    "Python",
    "Analytics",
    "Dashboard",
    "AI Engineer",
    "Business Intelligence",
  ],

  authors: [{ name: "Dhruv Kumar" }],

  creator: "Dhruv Kumar",

  openGraph: {
    title: "Dhruv Kumar | Data Analyst Portfolio",
    description:
      "AI-powered analytics portfolio featuring dashboards, machine learning projects, NLP systems, and business intelligence applications.",
    url: "https://dhruvanalytics.vercel.app",
    siteName: "Dhruv Analytics Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}