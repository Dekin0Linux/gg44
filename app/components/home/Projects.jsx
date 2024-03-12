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
        <div className="my-20 bg-slate-950 text-white py-20">
            <div className="container mx-auto" data-aos="fade-up"  data-aos-duration="3000">
                <p className="text-3xl md:text-6xl font-semibold pb-5 text-white text-center p-4">OUR INVESTMENT SECTORS</p>

                <div className="grid md:grid-cols-5 grid-cols-1 gap-5 my-5 p-4 md:p-0">
                    <Item img='/images/techImg.jpg' text='Blockchain and Technology Innovations' />
                    <Item img='/images/industry.jpeg' text='Private Equity Investment Funds' />
                    <Item img='/images/transport.jpg' text='Civil Infrastructure development' />
                    <Item img='/images/sport.jpg' text='Media and Entertainment' />
                    <Item img='/images/hospitality.jpg' text='Lifestyle&Hospitality' />
                </div>

            </div>
        </div>
    )
}

export default Projects