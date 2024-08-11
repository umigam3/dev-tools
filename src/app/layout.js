import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AllTools.dev - A complete collection of developer tools",
  description:
    "A collection of coding tools designed to simplify developers lives and boost productivity.",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    url: "https://alltoolsdev.netlify.app/",
    type: "website",
    title: "AllTools.dev - A complete collection of developer tools",
    description:
      "A collection of coding tools designed to simplify developers lives and boost productivity.",
    images: [
      { 
        url: "alltoolsdevbanner.png",
        width: 800,
        height: 600,
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
