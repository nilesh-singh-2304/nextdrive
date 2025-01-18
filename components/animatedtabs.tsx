"use client";

import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black border border-gray-800 bg-gradient-to-b from-black via-yellow-300 via-20% to-black">
          <p>Home Page</p>
          <img
      src="https://www.imgtr.net/ib/ebljmjUYa1wJTjG_1737224993.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Portfolio",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black border border-gray-800 bg-gradient-to-b from-black via-yellow-300 via-20% to-black">
          <p>Portfolio Page</p>
          <img
      src="https://www.imgtr.net/ib/iQYHMgZgWVj5YtH_1737225347.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black border border-gray-800 bg-gradient-to-b from-black via-yellow-300 via-20% to-black">
          <p>Services Page</p>
          <img
      src="https://www.imgtr.net/ib/VsMDevZVQZPnVXb_1737225408.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Why Us",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black border border-gray-800 bg-gradient-to-b from-black via-yellow-300 via-20% to-black">
          <p>Why-Us Page</p>
          <img
      src="https://www.imgtr.net/ib/GNecuRVC53xF16T_1737225449.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Contact",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black border border-gray-800 bg-gradient-to-b from-black via-yellow-300 via-20% to-black">
          <p>Contack Page</p>
          <img
      src="https://www.imgtr.net/ib/A1nkd3EloYzvCtj_1737225480.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Blogs",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black border border-gray-800 bg-gradient-to-b from-black via-yellow-300 via-20% to-black">
          <p>Blogs Page</p>
          <img
      src="https://www.imgtr.net/ib/VMoLY7iOirH893u_1737225514.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Admin",
      value: "admin",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black border border-gray-800 bg-gradient-to-b from-black via-yellow-300 via-20% to-black">
          <p>Admin Page</p>
          <img
      src="https://www.imgtr.net/ib/RpnGqxz40cFENaA_1737225549.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

