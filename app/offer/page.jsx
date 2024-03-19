import React from 'react'
import Navbar from '../components/home/Navbar'

function page() {
  return (
    <div className="">
      <div className="bg-slate-950 h-[60vh] service-bg">
        <Navbar />
        <div className="h-full overflow-hidden text-center text-white flex items-center justify-center" data-aos="fade-up" data-aos-duration="3000">
          <h2 className="text-6xl md:text:8xl font-semibold my-5">Our Services</h2>
        </div>
      </div>

      <div className="container mx-auto md:my-20 m-5">
        <p className="md:text-3xl text-xl font-semibold pb-5 text-sky-600 text-center underline">WHAT WE DO</p>

        {/* SERVICE ONE  */}

        <section className="my-10 px-3" data-aos="fade-up" data-aos-duration="3000">
          <p className="md:text-6xl text-3xl md:font-light font-bold p-4 text-gray-500 text-center">Private Equity and Venture Capital</p>
          <div className="grid md:grid-cols-2 gap-4 py-10">
            <div className="w-full h-full">
              <img src="/images/13.jpg" alt="img1" className="h-full object-cover" />
            </div>
            <div className>
              <p className="text-gray-500 md:leading-loose text-xl">
                From an operation, focused on small and large scale investments, we have grown our Private Equity funds into a business pursuing investments throughout Africa and executing not only typical leveraged buyout acquisitions of seasoned companies, but also investment and transactions involving growth-equity or start-up businesses in established industries, minority investments, corporate partnerships, structured securities and industry consolidations.
                <br /> <br />
                Our Venture capital program, is typically provided to early-stage start-up companies that have high growth potential in industries such as information technology ,Agribusiness, Health and Medicine and manufacturing related sectors. Our Venture capital and Private Equity investments funds, marries money to knowledge and opportunity and clearly defines what both parties will receive at the outcome of the project.
              </p>
            </div>
          </div>
        </section>





        <section className="md:my-20 my-10 px-3" data-aos="fade-up" data-aos-duration="3000">
          {/* grid md:grid-cols-2 gap-4 */}
          <p className="md:text-6xl text-3xl md:font-light font-bold p-4 text-gray-500 text-center">Trade Finance</p>
          <div className="grid md:grid-cols-2 gap-4 md:py-10">
            <div className>
              <p className="text-gray-500 leading-loose text-xl">
                At GG44 Holdings, Our trade financing programs,comprises of a set of techniques or financial instruments used to mitigate the risks inherent in international trade and commerce, to ensure payment to exporters while assuring the delivery of goods and services to importers.
              </p>
              <p className="text-gray-500 leading-loose text-xl">
                We assist our clients, with various Financial credit facilities, include revolving loan facilities, retail credit facilities , committed facilities, letters of credit to facilitate large scale projects and cross-border transactions.
              </p>

              <p className="text-gray-500 leading-loose text-xl">
                We Understand that, Suppliers and supply chain management is crucial to trade finance; the different actors in any global supply chain may use financing products to help fund the production of goods, exporting of services or perhaps the shipment of trade using a mixture of pre-export or post-export financing.
              </p>

              <div className='mt-3'>
                <h4 className='text-center font-bold p-3'>Our Financing Modules.</h4>
                <p className="md:text-md text-md font-semibold text-sky-600">Credit Enhancement Instruments</p>
                <p className="text-gray-500 text-lg">
                  Our Credit enhancements program,is suitable for project developers or borrowers, who do not have the necessary credit rating, assets or equity capital to secure suitable financing from commercial banks and the mainstream capital markets.

                </p>
                <p className="text-gray-500 text-lg">In select cases we are able to arrange for a credit enhancement or financial guarantee instruments, Such  as : <b> commercial letters of credit, standby letters of credit, revocable letters of credit, irrevocable letters of credit, revolving letters of credit, Advance payment guarantee, Documentary Letters of Credit </b>, Deferred Payment Guarantee, and red clause letters of credit, issued from top rated commercial banks, and financial institution,which can be used to secure repayment of financing. <br />
                  Additionally, we are capable of organizing both the Credit Enhancement Instrument and corresponding loan
                </p>
              </div>
              <div className='pt-5'>
                <h4>Bank Proof of Funds</h4>
                <p className="md:text-md text-md font-semibold  text-sky-600">Credit Enhancement Instruments</p>
                <p className="text-gray-500 text-lg">
                  We offer bank proof of funds program to empower entrepreneurs and managers to successfully develop, expand and streamline new units or projects for the betterment of their firm. Our bank proof of funds service, irrevocably confirms funds availability for international trade and commerce. We issue Instruments (such as BG’s, MTN’s) by S.W.I.F.T  from reputable Money Center Banks.
                </p>
              </div>

            </div>

            
            <div className="w-full md:h-1/2 items-start">
              <img src="/images/2.jpg" alt="img2" className="h-full object-cover" />
            </div>
          </div>


          <div className='pt-5 bg-gray-100 p-10 my-10'>
            <h4 className='text-center text-xl font-bold'>HOW TO APPLY</h4>
            <div className='my-5'>
              <p className="md:text-md text-md font-semibold  text-sky-600">1. Apply for Financial Instrument</p>
              <p className="text-gray-500 text-lg">
                <b>Dear Applicant</b> <br />
                Please <a href="#" className='text-blue-500'>click to fill the form</a>  with the basic information required to apply for Bank Guarantee or Stand by Letter of Credits. We will contact you within two working days
              </p>
            </div>
            <div>
              <p className="md:text-md text-md font-semibold  text-sky-600">2. Equity/Venture Financing</p>
              <p className="text-gray-500 text-lg">
                <b>Dear Applicant</b> <br />
                Please submit a detailed Executive Summary of your business, including locations and contacts details, to <a href='mailto:management@GG44holdings.com.' className='text-blue-500'>management@GG44holdings.com.</a>   We will contact you within two working days.
              </p>
            </div>


          </div>

        </section>
      </div>
    </div>
  )
}

export default page