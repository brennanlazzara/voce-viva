import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "../components/SessionProvider";
import Header from "../components/Header";

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
        <SessionProvider>
          <Header />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
