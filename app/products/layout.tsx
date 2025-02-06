import type { Metadata } from "next";
import "../globals.css"; // Import globals.css

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
