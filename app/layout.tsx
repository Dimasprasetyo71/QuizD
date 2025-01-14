import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuizD",
  
  description: "Generated by Dimas prasetyo",

  icons: {
    icon: "/favicon.ico",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],

  appleWebApp: {
    capable: true,
    title: "QuizD",
    statusBarStyle: "default",
  },

  openGraph: {
    title: "QuizD",
    description: "Generated by Dimas prasetyo",
    url: "https://quizd.vercel.app",
    siteName: "QuizD",
    images: [
      {
        url: "https://quizd.vercel.app/api/og",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },

  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="Id">
      <body className={inter.className} suppressContentEditableWarning suppressHydrationWarning>
      
        {children}
      
      </body>
    </html>
  );
}
