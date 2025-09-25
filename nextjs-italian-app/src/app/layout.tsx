import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "../components/SessionProvider";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "VoceViva - Your Living Voice in Italian",
  description:
    "Your living voice in Italian - Master verb conjugations with interactive exercises and beautiful learning tools",
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
