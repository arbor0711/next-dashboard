import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between gap-5 ">
          <div
            className="h-screen w-1/5 min-w-fit	"
            style={{ backgroundColor: "var(--bgSoft)" }}
          >
            <Sidebar />
          </div>

          <div className="w-full flex flex-col gap-5 mt-5 mr-5 ">
            <Navbar />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
