export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "AirBnB",
  description: "Property Booking App",
};

const font = Nunito({
  subsets: ["latin"]
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const currentUser = await getCurrentUser(); 
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ToasterProvider />
        <Suspense fallback={<div>Loading..</div>}>
        <SearchModal />
        </Suspense>
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-20"> 
        {children}
        </div>
      </body>
    </html>
  );
}
