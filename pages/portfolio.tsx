import React from 'react'
import { AnimatedBeamMultipleOutputDemo } from '@/components/portfolio'
// import { FloatingDockDemo } from '@/components/dock'
import { CardHoverEffectDemo } from '@/components/features'

const Portfolio = () => {
  return (
    <div>
      <div className="font-[sans-serif] px-6 pt-28 pb-2">
      <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
        <h2 className="text-gray-50 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">Call To Action Section</h2>
        <div className="mt-8">
          <p className="text-xl text-gray-50 leading-relaxed">Upgrade to our premium plan and unlock a world of possibilities. Enjoy exclusive features, enhanced performance, and a seamless journey towards success.</p>
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
 