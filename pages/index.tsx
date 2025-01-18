
// import dynamic from "next/dynamic";
// const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });
import Spline from '@splinetool/react-spline';
import { TabsDemo } from '@/components/animatedtabs';



export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
      <Spline
        scene="https://prod.spline.design/flno2GueIuPzym5F/scene.splinecode" 
      />
    </div>

    <div>
    <div className="font-[sans-serif]  px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-gray-800 text-3xl font-bold">Pricing Plans</h2>
        </div>
        <div className="flex mx-auto mt-12 bg-white rounded-full w-max p-1">
          <button className="text-gray-800 font-semibold tracking-wide w-full text-sm bg-yellow-400 py-2.5 px-5 rounded-full">
            Monthly</button>
          <button
            className="font-semibold text-gray-800 tracking-wide w-full text-sm py-2.5 px-5 rounded-full">
            Yearly</button>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 max-lg:max-w-2xl max-md:max-w-sm max-lg:mx-auto">
          <div className="border border-gray-500 outline-yellow-400 hover:outline rounded-xl relative overflow-hidden shadow transition-all">
            <div className="p-6">
              <div className="text-left">
                <h4 className="text-gray-500 text-xl font-bold">Plus</h4>
                <p className="text-gray-400 text-xs mt-2">Ideal for individuals.</p>
                <h3 className="text-gray-500 text-2xl font-bold mt-4">$10.00<sub className="text-sm font-medium text-gray-600 ml-2">/ Month</sub></h3>
                <p className="text-gray-400 text-xs mt-2">2 TB (2,000 GB) - 1 user</p>
                <button type="button" className="w-full mt-8 px-4 py-2 tracking-wide text-sm rounded-md bg-yellow-400 text-white hover:bg-yellow-600">Buy Now</button>
              </div>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    50 Image generations
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    500 Credits
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Customer Support
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    50GB Cloud Storage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-500 outline-yellow-400 hover:outline rounded-md relative overflow-hidden shadow transition-all">
            <div className="p-6">
              <div className="text-left">
                <h4 className="text-gray-500 text-xl font-bold">Family</h4>
                <p className="text-gray-400 text-xs mt-2">Ideal for friends & family.</p>
                <h3 className="text-gray-500 text-2xl font-bold mt-4">$20.00<sub className="text-sm font-medium text-gray-600 ml-2">/ Month</sub></h3>
                <p className="text-gray-400 text-xs mt-2">2 TB (2,000 GB) - Up to 6 users</p>
                <button type="button" className="w-full mt-8 px-4 py-2 tracking-wide text-sm rounded-md bg-yellow-400 text-white hover:bg-yellow-600">Buy Now</button>
              </div>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    500 Image generations
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    1200 Credits
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Customer Support
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    100GB Cloud Storage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-500 outline-yellow-400 hover:outline rounded-md relative overflow-hidden shadow transition-all">
            <div className="p-6">
              <div className="text-left">
                <h4 className="text-gray-500 text-xl font-bold">Professional</h4>
                <p className="text-gray-400 text-xs mt-2">Ideal for Professional.</p>
                <h3 className="text-gray-500 text-2xl font-bold mt-4">$18.00<sub className="text-sm font-medium text-gray-600 ml-2">/ Month</sub></h3>
                <p className="text-gray-400 text-xs mt-2">3 TB (3,000 GB) - 1 user</p>
                <button type="button" className="w-full mt-8 px-4 py-2 tracking-wide text-sm rounded-md bg-yellow-400 text-white hover:bg-yellow-600">Buy Now</button>
              </div>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    500 Image generations
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    800 Credits
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Customer Support
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    90GB Cloud Storage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-500 outline-yellow-400 hover:outline rounded-md relative overflow-hidden shadow transition-all">
            <div className="p-6">
              <div className="text-left">
                <h4 className="text-gray-500 text-xl font-bold">Standard</h4>
                <p className="text-gray-400 text-xs mt-2">Ideal for smaller teams</p>
                <h3 className="text-gray-500 text-2xl font-bold mt-4">$30.00<sub className="text-sm font-medium text-gray-600 ml-2">/ Month</sub></h3>
                <p className="text-gray-400 text-xs mt-2">5 TB (5,000 GB) - 3+ user</p>
                <button type="button" className="w-full mt-8 px-4 py-2 tracking-wide text-sm rounded-md bg-yellow-400 text-white hover:bg-yellow-600">Buy Now</button>
              </div>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    1500 Image generations
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    2000 Credits
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Customer Support
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    500GB Cloud Storage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-500 outline-yellow-400 hover:outline rounded-md relative overflow-hidden shadow transition-all">
            <div className="p-6">
              <div className="text-left">
                <h4 className="text-gray-500 text-xl font-bold">Advanced</h4>
                <p className="text-gray-400 text-xs mt-2">Ideal for larger teams</p>
                <h3 className="text-gray-500 text-2xl font-bold mt-4">$45.00<sub className="text-sm font-medium text-gray-600 ml-2">/ Month</sub></h3>
                <p className="text-gray-400 text-xs mt-2">As much space as needed, once purchased - 3+ users</p>
                <button type="button" className="w-full mt-8 px-4 py-2 tracking-wide text-sm rounded-md bg-yellow-400 text-white hover:bg-yellow-600">Buy Now</button>
              </div>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    3000 Image generations
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    4000 Credits
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Customer Support
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    1500GB Cloud Storage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-500 outline-yellow-400 hover:outline rounded-md relative overflow-hidden shadow transition-all">
            <div className="p-6">
              <div className="text-left">
                <h4 className="text-gray-500 text-xl font-bold">Enterprise</h4>
                <p className="text-gray-400 text-xs mt-2">Ideal for individuals.</p>
                <h3 className="text-gray-500 text-2xl font-bold mt-4">Contact sales</h3>
                <p className="text-gray-400 text-xs mt-2">As much space as needed, once purchased - 3+ users</p>
                <button type="button" className="w-full mt-8 px-4 py-2 tracking-wide text-sm rounded-md bg-yellow-400 text-white hover:bg-yellow-600">Contact us</button>
              </div>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    3000 + Image generations
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    4000 + Credits
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Customer Support
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-yellow-400 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    1500 + GB Cloud Storage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div>
      <TabsDemo />
    </div>

    </>
  );
}
