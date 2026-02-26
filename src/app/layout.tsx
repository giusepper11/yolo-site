import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Giuseppe Rosa | Senior Data Engineer",
  description:
    "Personal site for Giuseppe Rosa, Senior Data Engineer focused on reliable data platforms, cloud pipelines, and analytics engineering.",
  openGraph: {
    title: "Giuseppe Rosa | Senior Data Engineer",
    description:
      "Data engineer building robust cloud data systems with Python, SQL, Airflow, DBT, and Spark.",
    type: "website",
    url: "/",
    siteName: "Giuseppe Rosa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giuseppe Rosa | Senior Data Engineer",
    description:
      "Data engineer building robust cloud data systems with Python, SQL, Airflow, DBT, and Spark.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
