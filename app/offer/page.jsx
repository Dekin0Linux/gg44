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
          <p className="md:text-6xl text-lg font-light p-4 text-gray-500 text-center">Private Equity and Venture Capital</p>
          <div className="grid md:grid-cols-2 gap-4 py-10">
            <div className="w-full h-full">
              <img src="/images/Private-equity.jpeg" alt="img1" className="h-full object-cover" />
            </div>
            <div className>
              <p className="text-gray-500 md:leading-loose text-xl">
                From an operation, focused on small and large scale investments, we have grown our Private Equity funds into a business pursuing investments throughout Africa and executing not only typical leveraged buyout acquisitions of seasoned companies, but also investment and transactions involving growth-equity or start-up businesses in established industries, minority investments, corporate partnerships, structured securities and industry consolidations.
                <br />
                Our Venture capital program, is typically provided to early-stage start-up companies that have high growth potential in industries such as information technology ,Agribusiness, Health and Medicine and manufacturing related sectors. Our Venture capital and Private Equity investments funds, marries money to knowledge and opportunity and clearly defines what both parties will receive at the outcome of the project.
              </p>
            </div>
          </div>
        </section>





        <section className="my-20 px-3" data-aos="fade-up" data-aos-duration="3000">
          {/* grid md:grid-cols-2 gap-4 */}
          <p className="md:text-6xl text-lg font-light p-4 text-gray-500 text-center">Financial Credit Facilities</p>
          <div className="grid md:grid-cols-2 gap-4 py-10">
            <div className>
              <p className="text-gray-500 leading-loose text-xl">
                We offer a full range of investment and management services for international Trade and commerce and beyond. We are able to assist our clients with various Financial credit facilities, include revolving loan facilities, retail credit facilities (like credit cards), committed facilities, letters of credit to facilitate large scale projects and cross-border transactions.
              </p>
              <p className="md:text-md text-md font-semibold pt-5 text-sky-600">Bank Proof of Funds</p>
              <p className="text-gray-500 leading-loose">
                We offer bank proof of funds program to empower entrepreneurs and managers to successfully develop, expand and streamline new units or projects for the betterment of their firm. Our bank proof of funds service, irrevocably confirms funds availability for international trade and commerce. We issue Instruments (such as BG’s, MTN’s) by S.W.I.F.T  from reputable Money Center Banks.
              </p>

              <div>
                <p className="md:text-md text-md font-semibold pt-5 text-sky-600">Credit Enhancement</p>
                <p className="text-gray-500">
                  Our Credit enhancements program,is suitable for project developers or borrowers, who do not have the necessary credit rating, assets or equity capital to secure suitable financing from commercial banks and the mainstream capital markets. In select cases we are able to arrange for a credit enhancement or financial guarantee product, Such  as commercial letters of credit, standby letters of credit, revocable letters of credit, irrevocable letters of credit, revolving letters of credit, and red clause letters of credit, issued from top rated commercial banks, financial institution, government agencies or insurance companies, that can be used to secure repayment of financing.
                  Additionally, we are capable of organizing both the Credit Enhancement Instrument and corresponding loan.

                </p>
              </div>
            </div>

            <div className="w-full h-full">
              <img src="/images/Finance.jpg" alt="img2" className="h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default page