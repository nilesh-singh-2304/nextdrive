import React, { useEffect } from "react";
import Add from "@/components/add";
import mongoose from "mongoose";
import blog from "@/model/blogs";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const Admin = ({ blogs }) => {
  const [title, setTitle] = useState("");
  const [blogid, setblogid] = useState("")
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("abc");
  const [email, setEmail] = useState("");
  const [blogss] = useState(blogs);
  console.log(blogss);

  useEffect(() => {
    if(localStorage.getItem("token") != "admin"){
      router.push("/login")
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const a = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/add`, {
      title: title,
      description: description,
      category: category,
      image: image,
      email: email,
      id : blogid,
      mdt: "edit",
    });
    const res = await a.data;
    if (res.success) {
      toast.success("Email Sent !! Check the Inbox", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Email Sent !! Check the Inbox", {
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

    router.reload();
  };

  const dltblg = async(e) => {
    e.preventDefault();
    const a = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/add`, {
      id : blogid,
      mdt: "delete"
    });
    const res = await a.data;
    if (res.success) {
      toast.success("Email Sent !! Check the Inbox", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Email Sent !! Check the Inbox", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      router.reload();
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div>
      <div className="h-screen">
        <div className="relative pt-32 px-10 overflow-x-auto shadow-md sm:rounded-xl">
          <div className="flex">
          <div className="my-10">
            <Add />
          </div>
          <div>
            <button onClick={logout} className="btn my-10 ml-5">Logout</button>
          </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right :text-gray-400">
            <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {blogss.map((blog) => (
                <tr
                  key={blog._id}
                  className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    {blog.title}
                  </th>
                  <td className="px-6 py-4">{blog.description}</td>
                  <td className="px-6 py-4">{blog.category}</td>
                  <td className="px-6 py-4">{blog.author}</td>
                  <td className="px-6 py-4 text-right">
                    {/* The button to open modal */}
                    {/* The button to open modal */}
                    <button onClick={() => {setTitle(blog.title);setblogid(blog._id);setDescription(blog.description);setCategory(blog.category);setImage(blog.imageurl);setEmail(blog.author);console.log(blogid,title,description,category,image,email)}}>
                    <label htmlFor={`my_modal_${blog._id}`} className="btn">
                      open modal
                    </label>
                    </button>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id={`my_modal_${blog._id}`}
                      className="modal-toggle"
                    />
                    <div className="modal" role="dialog">
                      <div className="modal-box text-left">
                        <form className="max-w-md mx-auto">
                          <div className="relative z-0 w-full mb-5 group">
                            <input
                              onChange={(e) => setTitle(e.target.value)}
                              type="title"
                              value={title}
                              name="title"
                              id="title"
                              className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor="floating_email"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Title
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-5 group">
                            <input
                              onChange={(e) => setDescription(e.target.value)}
                              type="description"
                              value={description}
                              name="description"
                              id="description"
                              className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor="description"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Description
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-5 group">
                            <input
                              onChange={(e) => setImage(e.target.value)}
                              value={image}
                              type="text"
                              name="image"
                              id="image"
                              className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor="image"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Image URL
                            </label>
                          </div>
                          <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                              <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                value={email}
                                name="email"
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                              >
                                Uploader Email
                              </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                              <input
                                onChange={(e) => setCategory(e.target.value)}
                                type="text"
                                value={category}
                                name="category"
                                id="category"
                                className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor="category"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                              >
                                Category
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            onClick={handleSubmit}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Submitt
                          </button>

                          <div className="modal-action">
                            <label
                              htmlFor={`my_modal_${blog._id}`}
                              className="btn"
                            >
                              Close!
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div onClick={() => setblogid(blog._id)} className="btn">
                  <label htmlFor={`${blog._id}`} className="btn">Delete</label>
                  </div>

{/* Put this part before </body> tag */}
<input type="checkbox" id={`${blog._id}`} className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg text-gray-50 font-bold">Delete!</h3>
    <p className="py-4 text-gray-100">Click Confirm to delete</p>
    <div className="modal-action">
      <label onClick={dltblg} className="btn">Confirm</label>
      <label htmlFor={`${blog._id}`} className="btn">Close!</label>
    </div>
  </div>
</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const blogs = await blog.find();

  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)), revalidate: 6000000 },
  };
}

export default Admin;
