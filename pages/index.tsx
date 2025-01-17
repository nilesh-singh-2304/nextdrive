import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {/* <div className="h-screen w-full">
      <Spline
        scene="https://prod.spline.design/flno2GueIuPzym5F/scene.splinecode" 
      />
    </div> */}
    </>
  );
}
