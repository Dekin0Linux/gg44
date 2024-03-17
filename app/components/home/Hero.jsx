'use client'
import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar';

function Hero() {

    return (
        <div className="md:h-[80vh] h-[70vh] relative hero-bg">

            <div className="absolute inset-0  text-white container mx-auto text-center  z-30 overflow-hidden">
                
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="text-xl md:text-3xl lg:text-7xl md:font-semibold w-[80%] relative text-white tracking-wide leading-loose" data-aos="fade-up" data-aos-duration="3000 ">
                    Private Equity investment | Venture Capital | Trade Finance
                    </div>

                </div>
            </div>
            <div className='absolute w-full z-50'>
                    < Navbar />
                </div>

        </div>
    )
}

export default Hero