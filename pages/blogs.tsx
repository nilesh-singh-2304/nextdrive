import React from 'react'
import mongoose from 'mongoose'
import blog from '../model/blogs'
import {IconCloudDemo} from '@/components/iconc'
import { AppleCardsCarouselDemo } from '@/components/blogss'

const Blogs = ({blogs}) => {
  return (
    <div >

<div className=" p-x-8 pt-32 font-[sans-serif]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-gray-50 text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1   after:left-0 after:right-0 after:mx-auto after:rounded-full">Welcome to our Blogs</h2>
        <p className="text-gray-50 text-xl font-bold mt-4">Insights, Trends, and Inspiration for a Digital World </p>
        <div className="mt-6">
          <p className="text-gray-50 text-lg">Our blog is your hub for exploring the latest developments, strategies, and innovations in technology and business. </p>
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
