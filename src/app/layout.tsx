import type { Metadata } from "next";
import { Tajawal } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/utils/verifyToken";
import ScrollToTop from "@/components/ScrollToTop";

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
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

  return (
    
    <html suppressHydrationWarning lang="ar" dir="rtl">
      <body className={`bg-[#FCFCFC] dark:bg-black ${tajawal.className}`}>
        <Providers>
          <Header payload={payload} />
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
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
    // </MyRuntimeProvider>
  );
}

import { Providers } from "./providers";
