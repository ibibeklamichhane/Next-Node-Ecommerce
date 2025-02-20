import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Navbar/Topbar";
import { Providers } from "./providers";
import Footer from "@/components/footer/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
      <div className="px-24">   

      <Topbar />
      
      {children}
     

      </div>
      <Footer/>
      </Providers>

      </body>

    </html>
  );
}
