import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/Header/Header";
import Cursor from "@/widgets/Cursor/Cursor";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "ЮМК | Разработка и маркетинг",
  description: "Южная маркетинговая компания",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
