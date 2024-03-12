'use client'
import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar';

function Hero() {

    return (
        <div className="md:h-[80vh] h-[70vh] relative hero-bg">

            <div className="absolute inset-0  text-white container mx-auto text-center  z-30 overflow-hidden">
                <Navbar />
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="text-xl md:text-4xl lg:text-8xl leading-loose font-bold w-[80%] relative text-white" data-aos="fade-up" data-aos-duration="3000">
                        Investment | Advisory  | Solutions
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero