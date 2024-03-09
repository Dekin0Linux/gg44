import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <div className="p-3 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center text-white">
            <div>
                <Image src="/images/gg44holding.png" alt='naviCon' width={120} height={50}/>
            </div>
            <div className="flex md:gap-10 md:items-center justify-between">
                <Link href={'/'} className='active:text-green-600 hover:text-green-600'>Home</Link>
                <Link href={'/about'} className='active:text-green-600 hover:text-green-600'>About Us</Link>
                <Link href={'/offer'} className='active:text-green-600 hover:text-green-600'>Services</Link>
                <Link href={'/contact'} className="md:bg-green-700  text-white md:px-4  md:py-2 rounded-full md:hover:bg-green-800 shadow">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar