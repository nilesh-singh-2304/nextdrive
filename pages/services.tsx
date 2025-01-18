import React from 'react'
import ExpandableCardDemo from '@/components/expandable-card-demo-grid'

const Services = () => {
  return (
    <div className="bg-cover pb-10 overflow-x-hidden bg-[url('https://cdn.dribbble.com/users/431269/screenshots/2618770/media/97954b639622028f675b8cac357653ae.gif')]">
      <div className=" overflow-y-auto  ">

<div className=" p-8 pt-32 font-[sans-serif]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-gray-50 text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:left-0 after:right-0 after:mx-auto after:rounded-full">Our Expert Services</h2>
        <div className="mt-8">
          <p className="text-gray-50 text-lg">At NextDrive, we are committed to providing top-tier services tailored to meet your unique needs. Our team of professionals works closely with you to deliver high-quality solutions, ensuring your satisfaction and success. Explore our wide range of services below.</p>
        </div>
      </div>
    </div>

    <ExpandableCardDemo />
      
    </div>
    </div>
  )
}

export default Services
