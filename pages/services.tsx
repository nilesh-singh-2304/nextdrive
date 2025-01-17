import React from 'react'
import ExpandableCardDemo from '@/components/expandable-card-demo-grid'

const Services = () => {
  return (
    <div className="bg-cover pb-10 overflow-x-hidden bg-[url('https://cdn.dribbble.com/users/431269/screenshots/2618770/media/97954b639622028f675b8cac357653ae.gif')]">
      <div className=" overflow-y-auto  ">

<div className=" p-8 mt-20 font-[sans-serif]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-gray-50 text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-blue-600 after:left-0 after:right-0 after:mx-auto after:rounded-full">Try using our templates</h2>
        <div className="mt-12">
          <p className="text-gray-50 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        </div>

        <div className="flex max-sm:flex-col justify-center gap-6 mt-12">
          <button type="button"
            className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-blue-600 bg-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-300">Try now</button>
          <button type="button"
            className="text-gray-50 min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border border-gray-300 hover:bg-gray-50 transition-all duration-300">Cancel</button>
        </div>
      </div>
    </div>

    <ExpandableCardDemo />
      
    </div>
    </div>
  )
}

export default Services
