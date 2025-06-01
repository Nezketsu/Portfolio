import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header/header"; // Import the Header component
import Footer from "../components/layout/Footer/footer"; // Import the Footer component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ overscrollBehaviorX: undefined }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
