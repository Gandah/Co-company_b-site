import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

import "./globals.scss";
import './_css/app.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Co. Company",
  description: "Your goto partner for real estate solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <div className="site">
              <NavBar />
                {children}
              <Footer/>
          </div>
        </body>
    </html>
  );
}
