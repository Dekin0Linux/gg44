import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-gray-950 md:p-10 p-5">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-0 my-10 justify-between items-start text-white">
        <div className="flex-1">
          <Image src="/images/gg44holding.png" alt="footerIcon" width={150} height={50} />
        </div>
        <div className="flex-1">
          <h4 cas>Quick Link</h4>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/offer">Services</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>

        </div>
        <div className="flex-1">
          <div className="flex">
            <input type="text" className="flex-1 w-full p-2 rounded-s-md outline-none text-gray-500" placeholder="Enter email"/>
            <button className="p-2 bg-green-600 rounded-e-md">Subscribe</button>
          </div>
        </div>
      </div>
      <p className="text-center text-white">© 2004 - 2024 GG44holdings Ltd all copyright reserved</p>
    </div>
  )
}

export default Footer