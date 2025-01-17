import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { PagesTopLoader } from 'nextjs-toploader/pages';
import { FloatingDockDemo } from "@/components/dock";
import Footer from "@/components/footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <PagesTopLoader />
     {/* <Navbar /> */}
     <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />

    <FloatingDockDemo />
  <Component {...pageProps} />
  <Footer />
  
  </>
  );
}
