import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Italian Verb Master",
  description: "Learn Italian verb conjugations with interactive exercises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        {children}
      </body>
    </html>
  );
}
