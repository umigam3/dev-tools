"use client";

import { Space_Grotesk, DM_Sans } from "next/font/google";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import "./globals.css";
import { useState, useEffect } from "react";
import { delay, motion, AnimatePresence } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";

const dm_sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm_sans" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
});

import { NextUIProvider } from "@nextui-org/react";

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
  const [showSignUp, setShowSignUp] = useState(false);

  const lenis = useLenis(({ scroll }) => {
    // setScroll(scroll);
    // called every scroll
  });

  // Block scroll on modals
  useEffect(() => {
    if (lenis !== undefined)
      showLogIn || showSignUp ? lenis.stop() : lenis.start();
  }, [showLogIn, showSignUp]);

  return (
    <ReactLenis root>
      <html lang="en" className="dark">
        <body
          className={`${dm_sans.variable} ${space_grotesk.variable} font-dm_sans`}
        >
          {/* <LogInContext.Provider value={setShowLogIn}> */}
          <Header setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />
          <SideBar />
          <AnimatePresence>
            {showLogIn && (
              <LogIn
                setShowLogIn={setShowLogIn}
                setShowSignUp={setShowSignUp}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showSignUp && (
              <SignUp
                setShowSignUp={setShowSignUp}
                setShowLogIn={setShowLogIn}
              />
            )}
          </AnimatePresence>

          {children}
          <Footer />
          {/* </LogInContext.Provider> */}
        </body>
      </html>
    </ReactLenis>
  );
}
