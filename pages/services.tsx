import React from 'react'
import ExpandableCardDemo from '@/components/expandable-card-demo-grid'

const Services = () => {
  return (
    <div className="bg-cover pb-10 overflow-x-hidden bg-[url('https://cdn.dribbble.com/users/431269/screenshots/2618770/media/97954b639622028f675b8cac357653ae.gif')]">
      <div className=" overflow-y-auto  ">

<div className=" p-8 mt-20 font-[sans-serif]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-gray-50 text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-yellow-600 after:left-0 after:right-0 after:mx-auto after:rounded-full">Try using our templates</h2>
        <div className="mt-12">
          <p className="text-gray-50 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        </div>
      </div>
    </div>

    <ExpandableCardDemo />
      
    </div>
    </div>
  )
}

export default Services
