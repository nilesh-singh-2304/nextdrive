import React from 'react'
import { AnimatedBeamMultipleOutputDemo } from '@/components/portfolio'
// import { FloatingDockDemo } from '@/components/dock'
import { CardHoverEffectDemo } from '@/components/features'

const Portfolio = () => {
  return (
    <div>
      <div className="font-[sans-serif] px-6 pt-28 pb-2">
      <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
        <h2 className="text-gray-50 md:text-4xl text-3xl font-extrabold md:!leading-[55px]">Our Work: A Showcase of Excellence</h2>
        <div className="mt-8">
          <p className="text-lg text-gray-50 leading-relaxed">At NextDrive, we take pride in delivering exceptional results. Our portfolio is a testament to the hard work, creativity, and expertise we bring to every project. From innovative solutions to successful outcomes.</p>
        </div>

      </div>
    </div>
      <AnimatedBeamMultipleOutputDemo />

      <CardHoverEffectDemo />
      {/* <FloatingDockDemo /> */}
    </div>
  )
}

export default Portfolio
 