import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/Header";

const sfBold = localFont({
  src: "./fonts/SF Arabic Bold.ttf",
  variable: "--font-sf-bold",
  weight: "100 900",
});
const sfMed = localFont({
  src: "./fonts/SF Arabic Medium.ttf",
  variable: "--font-sf-med",
  weight: "100 900",
});
const sfLight = localFont({
  src: "./fonts/SF Arabic Light.ttf",
  variable: "--font-sf-light",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ToDinf",
  description: "Create crate create.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <title>Toding</title>
      </head>
      <body
        className={`${sfBold.variable} ${sfMed.variable} ${sfLight.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
