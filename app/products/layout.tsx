import type { Metadata } from "next";
import "../globals.css"; // Import globals.css
import Header from "../(ui)/Header/page";
import Footer from "../(ui)/Footer/page";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
