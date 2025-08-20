import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unimatics",
  description: "Universe Informatics Community's Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
