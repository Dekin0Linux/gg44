import React from 'react'
import Navbar from '../components/home/Navbar'
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function page() {
  return (
    <div>
      <div className="bg-slate-950 h-[60vh] contact-bg">
       <Navbar />
        <div className="h-full overflow-hidden text-center text-white flex items-center justify-center" data-aos="fade-up" data-aos-duration="3000">
          <h2 className="text-6xl font-semibold my-5">Contact Us</h2>
        </div>
      </div>

      <div className="container mx-auto md:flex p-5 md:my-20 my-10 gap-5 items-center">
                <div className="flex-1">
                    <h3 className="text-4xl font-semibold text-blue-500 ">Contact Us Today</h3>
                    <p className="text-slate-500">Need to get intouch with us? Either fill out the form with your enquiry or find the email you'll like to contact below.</p>

                    <div className="shadow-blue-300/50  shadow-xl p-5 md:w-1/2 my-5 flex items-center gap-5">
                        <div className="w-10 h-10 bg-gray-100 flex justify-center items-center shadow-md">
                            <MdOutlineEmail size={30} />
                        </div>
                        <p>testemail@gmail.com</p>
                    </div>

                    <div className="shadow-blue-300/50  shadow-xl p-5 md:w-1/2 my-5 flex items-center gap-5">
                        <div className="w-10 h-10 bg-gray-100 flex justify-center items-center shadow-md">
                            <IoCall size={30} />
                        </div>
                        <p>000 000 000 000</p>
                    </div>
                    <div className="shadow-blue-300/50  shadow-xl p-5 md:w-1/2 my-5 flex items-center gap-5">
                        <div className="w-10 h-10 bg-gray-100 flex justify-center items-center shadow-md">
                            <FaLocationDot size={30} />
                        </div>
                        <p>testemail@gmail.com</p>
                    </div>
                </div>
                <div className="flex-1 bg-gray-100 p-5 rounded-lg shadow-xl">
                    <form>
                        <div className="md:grid grid-cols-2 gap-3">
                            <div className="my-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Enter full name" id='name' className="w-full outline-0 p-3 rounded-md" />
                            </div>
                            <div className="my-2">
                                <label htmlFor="email">Email</label>
                                <input type="emailygyg" placeholder="Enter full name" id='name' className="w-full outline-0 p-3 rounded-md" />
                            </div>
                            <div className="my-2 col-span-2">
                                <label htmlFor="name">Subject</label>
                                <input type="text" placeholder="Enter full name" id='name' className="w-full outline-0 p-3 rounded-md" />
                            </div>

                            <div className="my-2 col-span-2">
                                  <label for="">Message</label>
                                  <textarea class="w-full p-3 outline-0 rounded-md" name="" id="" rows="8"></textarea>
                            </div>
                            
                        </div>
                        <div>
                            <button className="w-full bg-green-600 p-3 text-white rounded-md">Send</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default page