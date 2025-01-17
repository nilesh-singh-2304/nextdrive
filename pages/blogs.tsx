import React from 'react'
import mongoose from 'mongoose'
import blog from '../model/blogs'

const Blogs = () => {
  return (
    <div>
      
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
