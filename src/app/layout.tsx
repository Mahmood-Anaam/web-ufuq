import type { Metadata } from "next";
import { Tajawal } from "next/font/google";

import { MyRuntimeProvider } from "@/app/MyRuntimeProvider";
import { cn } from "@/utils/utils";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



     
const tajawal = Tajawal({
  weight: ["400", "500", "700", "800", "900", "200", "300"],
  subsets: ["arabic"],
  variable: "--font-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أفق",
  description: "UFUQ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <MyRuntimeProvider>
   
      
      <html suppressHydrationWarning lang="ar" dir="rtl" className="h-full">
        <body className={cn(tajawal.className, "h-full")}>
           {/* <Header/> */}
           <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {children}
          {/* <Footer/> */}
          </body>
      </html>
    </MyRuntimeProvider>
   
  );
}
