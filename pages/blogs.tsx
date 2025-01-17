import React from 'react'
import mongoose from 'mongoose'
import blog from '../model/blogs'
import {IconCloudDemo} from '@/components/iconc'
import { AppleCardsCarouselDemo } from '@/components/blogss'

const Blogs = () => {
  return (
    <div className='' >

<div className=" p-x-8 pt-28 font-[sans-serif]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-gray-50 text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-yellow-600 after:left-0 after:right-0 after:mx-auto after:rounded-full">Try using our templates</h2>
        <div className="mt-12">
          <p className="text-gray-50 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        </div>

        <div className="flex max-sm:flex-col justify-center gap-6 mt-12">
          <button type="button"
            className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-yellow-600 bg-yellow-600 hover:bg-transparent hover:text-yellow-600 transition-all duration-300">Try now</button>
          <button type="button"
            className="text-gray-50 min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border border-gray-300 hover:bg-gray-50 transition-all duration-300">Cancel</button>
        </div>
      </div>
    </div>

      <div className='flex justify-center items-center h-auto w-full'>
      <IconCloudDemo />
      </div>

      <AppleCardsCarouselDemo />
      
    </div>
  )
}

export async function getServerSideProps(){
    if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI)
  }
    const blogs = await blog.find()
      
    return{
      props:{blogs: JSON.parse(JSON.stringify(blogs)) , revalidate:6000000,} 
    }                  
  }

export default Blogs
