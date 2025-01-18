import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { PagesTopLoader } from 'nextjs-toploader/pages';
import { FloatingDockDemo } from "@/components/dock";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <PagesTopLoader color="#FFC000" />
  <div className="flex md:hidden"><Navbar /></div>
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

    <div className="hidden md:flex"><FloatingDockDemo /></div>
  <Component {...pageProps} />
  <Footer />
  
  </>
  );
}
