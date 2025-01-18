import React, { useState } from 'react'
import Link from 'next/link'
import { FaFacebook ,  FaInstagramSquare , FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-toastify';


const Footer = () => {
  const [email, setemail] = useState("")
  const check = () => {
    if( email == ''){
        toast.error("please fill all fields Properly", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          return false; 
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const checkk =  check();
    if(!checkk){
      return;
    }

    const a = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/email`, {
      topic:"subscription",
          email : email,
        });
        const res = await a.data;
        if (res.success) {
            toast.success("Newsleter Subscribed", {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
        else{
          console.log(res.err)
            toast.error("There was some error !!", {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }

        setemail("")
    
      }
  return (
    <footer className="bg-gradient-to-t overflow-x-hidden via-yellow-300 via-20% from-black to-black pt-12 pb-8 px-10 font-sans tracking-wide">
      <div className="max-w-screen-xl mx-auto">


        <div className="grid max-md:grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h4 className="text-black text-lg mb-4">Join our newsletter</h4>
            <div className="bg-black flex px-1 py-1 rounded-full text-left">
              <input value={email} onChange={(e) => setemail(e.target.value)} type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent pl-4 text-[15px]" />
              <button type='button' onClick={handleSubmit}
                className="bg-yellow-400 text-black text-[15px] rounded-full px-4 py-2 tracking-wide">Subscribe</button>
            </div>
          </div>

          <ul className="flex flex-wrap md:justify-end gap-x-6 gap-4">
            <li>
              <Link href='javascript:void(0)'>
                <FaLinkedin className='outline-yellow-600 size-10 hover:outline hover:text-black ' />
              </Link>
            </li>
            <li>
              <Link href='javascript:void(0)'>
                <FaFacebook className='outline-yellow-600 size-10 hover:outline hover:text-black rounded-full' />
              </Link>
            </li>
            <li>
              <Link href='javascript:void(0)'>
                <FaInstagramSquare className='outline-yellow-600 size-10 hover:outline hover:text-black ' />
              </Link>
            </li>
            <li>
              <FaSquareXTwitter className='outline-yellow-600 size-10 hover:outline hover:text-black ' />
            </li>
          </ul>
        </div>

        <p className='text-black text-center text-[15px] mt-6'>© NextDrive India. All rights reserved.</p>
        <p className='text-black text-center text-[15px] font-bold mt-1'>Created By Nilesh Singh , nileshsingh82004@gmail.com , 9319601021</p>
      </div>
    </footer>
  )
}

export default Footer
