import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Smartodo",
  description: "forget forgetting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
