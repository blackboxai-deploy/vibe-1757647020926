import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Marceli - UI/UX Designer Portfolio",
  description: "Adaptive AI design. Your users, always in mind. 18+ years of online design experience.",
  keywords: "UI/UX Designer, Portfolio, Adaptive Design, AI Design, User Experience",
  authors: [{ name: "Marceli" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}