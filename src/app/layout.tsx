import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rapkology - Türkçe Rap Müzik Platformu",
  description: "Türkçe rap müziğin en güncel içerikleri, yeni şarkılar ve müzik videoları Rapkology'de!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600;700&family=Saira+Condensed:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${saira.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
