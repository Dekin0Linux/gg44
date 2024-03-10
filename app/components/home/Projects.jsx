import React from 'react'



function Item({ img, text, id }) {
    return (
        <div className=" bg-orange-500 relative overflow-hidden group">

            <img src={img} alt="img" className="w-full h-full object-cover group-hover:scale-150 transition ease-in-out delay-150" />
            <div className="bg-gradient-to-t from-blue-900/80 to-slate-800/60 absolute top-0 w-full h-full flex justify-center items-center text-white ">
                <p className="lg:text-xl font-normal text-center p-4">{text}</p>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="my-20 bg-slate-100 md:py-10">
            <div className="container mx-auto" data-aos="fade-up"  data-aos-duration="3000">
                <p className="md:text-3xl text-xl font-semibold pb-5 text-sky-600 text-center">OUR INVESTMENT SECTORS</p>

                <div className="grid md:grid-cols-5 grid-cols-1 gap-5 my-5 p-4 md:p-0">
                    <Item img='/images/s-mining.png' text='Construction and commercial real estate development' />
                    <Item img='/images/industry.jpeg' text='Industrial Equipment finance ' />
                    <Item img='/images/techImg.jpg' text='Information Technology' />
                    <Item img='/images/s-securities.png' text='Financial markets and banking projects' />
                    <Item img='/images/hospitality.jpg' text='Hospitality and recreation ' />
                    {/* <Item img='/images/s-pollution.png' text='Industrial and manufacturing projects' />
                    <Item img='/images/healthCare.jpg' text='Health care ' />
                    <Item img='/images/s-oil.png' text='Oil and gas' />
                    <Item img='/images/sport.jpg' text='Sports and entertainment' />
                    <Item img='/images/telecom.jpg' text='Telecommunications projects' />
                    <Item img='/images/transport.jpg' text='Transportation infrastructure' /> */}
                </div>

            </div>
        </div>
    )
}

export default Projects