import { Space_Grotesk, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "AllTools.dev - A complete collection of developer tools",
  description:
    "A collection of coding tools designed to simplify developers lives and boost productivity.",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
