import React from 'react'
import mongoose from 'mongoose'
import blog from '../model/blogs'
import {IconCloudDemo} from '@/components/iconc'
import { AppleCardsCarouselDemo } from '@/components/blogss'

const Blogs = ({blogs}) => {
  return (
    <div >

<div className=" p-x-8 pt-28 font-[sans-serif]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-gray-50 text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-yellow-600 after:left-0 after:right-0 after:mx-auto after:rounded-full">Try using our templates</h2>
        <div className="mt-12">
          <p className="text-gray-50 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        </div>
      </div>
    </div>

      <div className='flex justify-center items-center h-auto w-full'>
      <IconCloudDemo />
      </div>

      <AppleCardsCarouselDemo blogs={blogs} />
      
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
