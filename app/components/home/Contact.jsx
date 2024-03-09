import React from 'react'

function Contact() {
    return (
        <div className="my-10">
            <div className="container mx-auto md:flex p-5 ">
            <div className="flex-1">
                    <h3 className="text-4xl font-semibold text-blue-500 ">Contact Us Today</h3>
                    <p className="text-slate-500">Need to get intouch with us? Either fill out the form with your enquiry or find the email you'll like to contact below.</p>

                    <div className="shadow-blue-300/50  shadow-xl p-5 md:w-1/2 my-5 flex items-center gap-5">
                        <div className="w-10 h-10 bg-blue-500"></div>
                        <p>testemail@gmail.com</p>
                    </div>

                    <div className="shadow-blue-300/50  shadow-xl p-5 md:w-1/2 my-5 flex items-center gap-5">
                        <div className="w-10 h-10 bg-blue-500"></div>
                        <p>000 000 000 000</p>
                    </div>
                    <div className="shadow-blue-300/50  shadow-xl p-5 md:w-1/2 my-5 flex items-center gap-5">
                        <div className="w-10 h-10 bg-blue-500"></div>
                        <p>testemail@gmail.com</p>
                    </div>
                </div>
                <div className="flex-1 bg-gray-50 p-5 rounded-lg" data-aos="fade-left" data-aos-duration="3000">
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
                                  <label htmlFor="">Message</label>
                                  <textarea className="w-full p-3 outline-0 rounded-md" name="" id="" rows="8"></textarea>
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

export default Contact