import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Sublime Software Agency",
  description: "We build beautiful, performant websites and applications using modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
