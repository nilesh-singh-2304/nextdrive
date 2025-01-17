
import dynamic from "next/dynamic";
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });



export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
      <Spline
        scene="https://prod.spline.design/flno2GueIuPzym5F/scene.splinecode" 
      />
    </div>
    </>
  );
}
