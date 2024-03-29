import React from 'react'
import Navbar from '../components/home/Navbar'

function page() {
  return (
    <div>
      <div className="bg-slate-950 h-[60vh] about-bg">
        <Navbar />
        <div className="h-full overflow-hidden text-center text-white flex items-center justify-center" data-aos="fade-up" data-aos-duration="3000">
          <h2 className="text-6xl font-semibold my-5">About Us</h2>
        </div>
      </div>


      <div className="container mx-auto">
        <div className='md:flex my-10 gap-5'>
          <div className="flex-1 p-5 md:p-0" data-aos="fade-right">
            <img src="/images/3.jpg" alt="image" className="object-cover w-full h-full" />
          </div>
          <div className="flex-1  p-5 md:p-0" data-aos="fade-left" data-aos-duration="3000">
            <h3 className="text-3xl font-semibold my-5">Know More About us</h3>
            <p className="text-lg text-gray-600">GG44 Holdings Ltd, is a multi-industry holding company based in Ghana, we work directly with and on behalf of private companies seeking debt/equity/project financing from export credit agencies, grant providing agencies, private sources of capital and funds for purposes of privatization, restructuring or start-up capital for businesses in Africa. </p>
            <br />
            <p className="text-lg text-gray-600">
              The solutions we provide reflect the insights generated by our diverse, global business platform, which encompasses private equity funds,Venture Capital, real estate funds, hedge fund solutions, credit funds and independent advisory and restructuring practices. Our solid financial base, including strong capital and liquidity which ensures our capacity to deliver on our commitments
            </p>
            <br />
            <p className="text-lg text-gray-600">
              Above all, we have made it our No. 1 priority to serve the needs of our investors and clients. This commitment is reflected in a culture that values integrity, professionalism and a passion for excellence. It also leads us to operate with prudence, financial discipline, a long-term perspective, and a clear understanding that trust is something we must earn every day.
            </p>
            <p className="text-lg text-gray-600">
              <b>FINANCIAL ADVISORY </b> <br />
              we advise our clients throughout the capital raising process. GG44 Holdings ltd, often gets involved at the earliest stages of project development or at bid stage with support to our clients during the negotiation of the projects’ contractual frameworks to ensure that the proposed commercial arrangements are conducive to implementing an optimal financing package in the context of a limited recourse financing strategy.

            </p>
          </div>
        </div>


        <div className="my-10" data-aos="fade-up" data-aos-duration="3000">
          <div>
            <div className="grid md:grid-cols-2">
              <div className="bg-slate-100 md:p-20 p-10">
                <h3 className="text-3xl font-semibold my-5">Our Mission</h3>
                <p className="text-gray-400 text-xl ">
                  To deliver investment solutions, unlock value and propel growth. Our capital programs, fuels the development of businesses and communities across Africa. Our strategy, is to help companies and governments stabilize, grow and thrive during challenging times. We invest in emerging markets and industries that will be the wellsprings of future opportunity.
                </p>
              </div>
              <div className="bg-slate-50 md:p-20 p-10 text-xl">
                <h3 className="text-3xl font-semibold my-5">Our Vision</h3>
                <p className="text-gray-400 ">
                  To commit ourselves to the success of our company, by pursuing business excellence, the growth of our employees, and to seeking unique investments opportunities with good returns for our investors.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default page