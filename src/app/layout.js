"use client";

import { Space_Grotesk, DM_Sans, Barlow } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogIn from "@/components/LogIn";
import "./globals.css";
import { useState } from "react";

const dm_sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm_sans" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
});

// export const metadata = {
//   title: "AllTools.dev - A complete collection of developer tools",
//   description:
//     "A collection of coding tools designed to simplify developers lives and boost productivity.",
//   icons: {
//     icon: "./favicon.ico",
//   },
// };

export default function RootLayout({ children }) {
  const [showLogIn, setShowLogIn] = useState(false);
  return (
    <html lang="en" className="dark">
      <body
        className={`${dm_sans.variable} ${space_grotesk.variable} font-dm_sans`}
      >
        {/* <LogInContext.Provider value={setShowLogIn}> */}
        <Header setShowLogIn={setShowLogIn} />
        {showLogIn && <LogIn />}

        {children}
        <Footer />
        {/* </LogInContext.Provider> */}
      </body>
    </html>
  );
}
