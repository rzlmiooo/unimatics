import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "UniMatics | Komunitas Non-profit untuk Upgrade Skill Individu di Bidang IT",
  description: "UniMatics adalah komunitas non-profit yang bantu kamu kembangkan skill IT baik coding atau non-coding seperti AI, frontend, backend, 3D animation hingga content creation dan masih banyak lagi. Gabung UniMatics sekarang!",
  verification: {
    google: '88dA3JrWqHvGQ2XqAfG6wy6OJG5khUf-cg-vHn6ucgM'
  },
  openGraph: {
    title: "UniMatics | Komunitas Non-profit untuk Upgrade Skill Individu di Bidang IT",
    description: "UniMatics adalah komunitas non-profit yang bantu kamu kembangkan skill IT baik coding atau non-coding seperti AI, frontend, backend, 3D animation hingga content creation dan masih banyak lagi. Gabung UniMatics sekarang!",
    url: "https://unimatics.vercel.app",
    siteName: "UniMatics",
    images: [
      {
        url: "https://unimatics.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UniMatics Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniMatics | Komunitas Non-profit untuk Upgrade Skill Individu di Bidang IT",
    description: "UniMatics adalah komunitas non-profit yang bantu kamu kembangkan skill IT baik coding atau non-coding seperti AI, frontend, backend, 3D animation hingga content creation dan masih banyak lagi. Gabung UniMatics sekarang!",
    images: ["https://unimatics.vercel.app/og-image.jpg"],
    creator: "@unimatics",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "UniMatics",
      url: "https://unimatics.vercel.app",
      logo: "https://unimatics.vercel.app/favicon.ico",
      sameAs: [
        "https://instagram.com/unimatics",
        "https://twitter.com/unimatics",
      ],
    }),
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
