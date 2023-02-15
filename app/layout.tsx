import "./globals.css";
import { Comfortaa } from "@next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${comfortaa.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
