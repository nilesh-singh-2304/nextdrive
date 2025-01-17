// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import { toast } from 'react-toastify';

const Admin = () => {
    // const [title, setTitle] = useState("");
    // const router = useRouter();
    //   const [description, setDescription] = useState("");
    //   const [category, setCategory] = useState("");
    //   const [image, setImage] = useState("abc");
    //   const [email, setEmail] = useState("");
      // const [logg, setlogg] = useState(false)
      // useEffect(() => {
      //     if(localStorage.getItem('token')){
      //       // setlogg(true)              
      //     }
      //   }, [])

      // const check = () => {
      //   if(title == '' || description == '' || category == '' || image == '' || email == '' ){
      //       toast.error("please fill all fields", {
      //           position: "bottom-right",
      //           autoClose: 1500,
      //           hideProgressBar: false,
      //           closeOnClick: true,
      //           pauseOnHover: true,
      //           draggable: true,
      //           progress: undefined,
      //           theme: "dark",
      //         });

      //         return false;
              
      //   }

        return true;
      }

      // const handleSubmit = async (e) => {
      //   e.preventDefault();

      //   const checked = check();

      //   if(!checked){
      //       return;
      //   }
      //   const a = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/addBlog`, {
      //     title: title,
      //     description: description,
      //     category: category,
      //     image: image,
      //     email: email,
      //   });
      //   const res = await a.data;
      //   if (res.success) {
      //       toast.success("Email Sent !! Check the Inbox", {
      //           position: "bottom-right",
      //           autoClose: 1500,
      //           hideProgressBar: false,
      //           closeOnClick: true,
      //           pauseOnHover: true,
      //           draggable: true,
      //           progress: undefined,
      //           theme: "dark",
      //         });
      //   }
      //   else{
      //       toast.error("Email Sent !! Check the Inbox", {
      //           position: "bottom-right",
      //           autoClose: 1500,
      //           hideProgressBar: false,
      //           closeOnClick: true,
      //           pauseOnHover: true,
      //           draggable: true,
      //           progress: undefined,
      //           theme: "dark",
      //         });
      //   }

      //   setCategory("");
      //   setTitle("");
      //   setDescription("");
      //   setImage("");
      //   setEmail("");
      //   router.reload();
      // };
  return (
    <div>
      
    </div>
  )
}

export default Admin
