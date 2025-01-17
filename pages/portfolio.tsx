import React from 'react'
import { AnimatedBeamMultipleOutputDemo } from '@/components/portfolio'
import { FloatingDockDemo } from '@/components/dock'

const Portfolio = () => {
  return (
    <div>
      <div className="font-[sans-serif] px-6 pt-16 pb-2">
      <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
        <p className="text-sm font-bold text-yellow-300 mb-4"><span className="rotate-90 inline-block mr-2">|</span> ALL IN ONE IN READYMADEUI</p>
        <h2 className="text-gray-50 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">Call To Action Section, Elevate Your Experience</h2>
        <div className="mt-8">
          <p className="text-base text-gray-50 leading-relaxed">Upgrade to our premium plan and unlock a world of possibilities. Enjoy exclusive features, enhanced performance, and a seamless journey towards success.</p>
        </div>

      </div>
    </div>
      <AnimatedBeamMultipleOutputDemo />
      <FloatingDockDemo />
    </div>
  )
}

export default Portfolio
 