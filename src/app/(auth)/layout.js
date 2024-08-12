import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth Pages - AllTools.dev",
  description: "Authentication pages for AllTools.dev.",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    url: "https://alltoolsdev.netlify.app/",
    type: "website",
    title: "Auth Pages - AllTools.dev",
    description: "Authentication pages for AllTools.dev.",
    images: [
      { 
        url: "alltoolsdevbanner.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="auth-container">
          {children}
        </div>
      </body>
    </html>
  );
}
