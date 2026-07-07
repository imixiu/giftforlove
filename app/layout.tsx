import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GiftFor.Love — Find the Perfect Gift for Everyone",
  description: "Curated gift ideas for every occasion and every person you love.",
  alternates: { canonical: "https://giftfor.love" },
  openGraph: {
    title: "GiftFor.Love — Find the Perfect Gift for Everyone",
    description: "Curated gift ideas for every occasion and every person you love.",
    url: "https://giftfor.love",
    type: "website",
    siteName: "GiftFor.Love",
  },
  verification: {
    google: "sUsfvBNKH1wpjArOTu37MDgr1FSYI4R1-UBbOv4tmZA",
    other: { "msvalidate.01": "B2BF310818F98A9F551F76360C83DC37" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/article.css" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-95PY8PSZ0Y" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-95PY8PSZ0Y');` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
