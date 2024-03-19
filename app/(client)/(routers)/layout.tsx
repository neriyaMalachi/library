'use client'
import "@/globals.css"
import Futer from "../Footer";
import "tailwindcss/tailwind.css";
import React from "react";
import List from "../List";
import NavBar from "../NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="flex  w-full">
          <div className=" hidden lg:flex" >
            <List />
          </div>
          <div className="text-black flex justify-center items-center w-full h-[calc(100vh-10rem)]">
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </div>
        </div>
        <Futer />
      </body>
    </html>
  );
}
