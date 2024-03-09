import React from 'react'
import Navbar from '../components/home/Navbar'

function page() {
  return (
    <div className="">
      <div className="bg-slate-950 h-[60vh]">
        <Navbar />
        <div className="h-full overflow-hidden text-center text-white flex items-center justify-center" data-aos="fade-up" data-aos-duration="3000">
          <h2 className="text-6xl font-semibold my-5">Our Services</h2>
        </div>
      </div>

      <div className="container mx-auto md:my-20 m-5">
        <p className="md:text-3xl text-xl font-semibold pb-5 text-sky-600 text-center">WHAT WE DO</p>

        {/* SERVICE ONE  */}

        <section className="my-10 px-3" data-aos="fade-up" data-aos-duration="3000">
        {/* grid md:grid-cols-2 gap-4 */}
          <div className="">
            {/* <div className="w-full h-full">
              <img src="/images/projectF.jpg" alt="img1" className="h-full object-cover" />
            </div> */}
            <div className>
              <p className="md:text-xl text-lg font-light bg-blue-500 p-4 text-white">PROJECT FINANCING AND MANAGEMENT </p>
              <p className="text-gray-500 md:leading-loose">
                GG44 Holdings, primarily focuses it’s Equity funds, on business development and project finance in Africa. We offer a full range of investment and management services from project conception to project completion and beyond. We are able to assist our clients in assessing and managing the many variables that can affect the outcome of a project, including the political, social, legal and other risks that are inherent in complex, large scale projects and cross-border transactions.
                <br />
                We have a significant experience in helping clients navigate the complexities on each phase of Project transaction including:
              </p>
              <ul className="list-disc px-5 text-blue-700">
                <li>Preliminary evaluation and due diligence</li>
                <li>Interfacing with local counsel and host country negotiations</li>
                <li>Drafting, reviewing and negotiating project documents, term sheets, financing agreements and security documents</li>
                <li>Overseeing the disbursement process, including satisfaction of conditions of disbursement</li>
                <li>Advising during operational period</li>
                <li>Escrow services (GG44 Holdings, provides a subsidiary escrow service , by providing a contractual arrangement in which we act as an intermediary to invest, receives and disburses money or property for the primary transacting parties, with the disbursement dependent on conditions agreed to by the transacting parties)</li>
              </ul>
              <p>GG44 Holdings, has significant experience representing clients in many of the most active regions for business, project development and finance in Africa and the Middle East. our firm has the experience and track record in structured project finance that is second to none.</p>

              <p className="md:text-md text-xl font-semibold pt-5 text-sky-600">Who we work with</p>
              <small>Our large clientele consists of medium, large and multi-national corporations including:</small>
              <ul className="list-disc px-5 text-blue-700">
                <li>Infrastructure Projects backed by governments or municipality</li>
                <li>Insurance Companies</li>
                <li>Real estate Development Companies</li>
                <li>Central Banks of developing countries</li>
                <li>Private Bankers</li>
              </ul>
              <b>How to proceed</b>
              <p>Please <a href="#">contact our offices</a>  to receive information about required paperwork and details.</p>
            </div>
          </div>
        </section>





        <section className="my-20 px-3" data-aos="fade-up" data-aos-duration="3000">
          {/* grid md:grid-cols-2 gap-4 */}
          <div className="">
            <div className>
              <p className="md:text-xl text-lg font-light bg-blue-500 p-4 text-white">Bank Instruments and Securities</p>
              <p className="text-gray-500 leading-loose">
              At GG44 Holdings, we represent corporate entities in connection with the issuance of bonds, notes, commercial paper, and other capital market instruments.
              We have deep knowledge in matters related to securities products, securities transfer law, compliance, and financial process intellectual property, among others. We are able to utilize the services of world’s largest securities houses to satisfy your needs.
              </p>
              <p className="md:text-md text-md font-semibold pt-5 text-sky-600">Bank Proof of Funds</p>
              <p className="text-gray-500 leading-loose">
                We offer bank proof of funds program to empower entrepreneurs and managers to successfully
                develop, expand and streamline new units or projects for the betterment of their firm, employees and
                community. <br />
                Our bank proof of funds service, irrevocably confirms funds availability for the purchase of Bank
                Debenture Instruments (such as BG’s, MTN’s) by S.W.I.F.T from reputable Money Center Bank. <br />
              </p>

              <b>Our proof of funds lease program includes:</b>
              <ul className="list-disc px-5 text-blue-700">
                <li>A Funding Commitment in an amount of US $1 Million to US $10 Million (larger amounts can
                  be arranged upon agreement) issued by Top North American Banks,Western European
                  Money Center Banks and Top rated Gulf region Banks.</li>
                <li>A courier-delivered hard copy of the Funding Commitment, issued by S.W.I.F.T or Key
                  Tested Telex;
                </li>
                <li>A validity period of 10,15 or 30 days; that can be extended to one year</li>
              </ul>

              <b>As benefits entrepreneurs receive:</b>
              <ul className="list-disc px-5 text-blue-700">
                <li>A possibility to purchase and sell Bank Debenture Instruments without large amounts of cash
                  and at discounted price;</li>
                <li>The Funding Commitment by S.W.I.F.T or Key Tested Telex issued electronically by North
                  American or Western European Money Center Bank in a Standard Format that is accepted
                  by all Major Money Center Banks worldwide
                </li>
                <li>Business Credit Enhancement</li>
              </ul>

              <div>
                <p> <b>How to proceed:</b> <br />
                Please contact our offices to discuss the amount of fee deposit and arrangement of contract and escrow agreement. </p>
              </div>

              <div>
                <p className="md:text-md text-md font-semibold pt-5 text-sky-600">Credit Enhancement</p>
                <p className="text-gray-500">
                  Credit enhancements are suitable for project developers or borrowers, who do not have the
                  necessary credit rating, assets or equity capital to secure suitable financing from commercial banks
                  and the mainstream capital markets. <br />
                  Together with our financial partners and brokerage agents, we can provide a solution for this
                  problem. In select cases we are able to arrange for a credit enhancement or financial guarantee
                  product to be underwritten and issued from a rated commercial bank, financial institution,
                  government agencies or insurance company that can be used to secure repayment of financing.
                </p>
                <p className="text-gray-500">The most common forms of credit enhancement loans are a <b>STAND BY LETTER OF CREDIT (SBLC) </b> or BANK
                  GUARANTEE (BG); however, in some situations we utilize other forms to meet the needs and requirements
                  of our clients which are more common in international transactions.</p>
                <p className="text-gray-500">We have the preference for clients who have or can obtain a lending facility with their bank. We are then able to structure a specific type of credit enhancement service specifically for the interested lending bank’s requirements to ensure that we are able to secure the transaction to the bank’s complete satisfaction <br />
                  Additionally, we are capable of organizing both the Credit Enhancement Instrument and
                  corresponding loan.</p>
                <p> <b>How to proceed:</b> <br />
                  In order to apply, please submit an executive summary to the business plan. Upon our approval, a
                  complete and detailed business plan and additional documentation will be required.
                </p>
              </div>
            </div>

            {/* <div className="w-full h-full">
              <img src="/images/projectF.jpg" alt="img2" className="h-full object-cover" />
            </div> */}
          </div>
        </section>





        <section className="my-20 p-3" data-aos="fade-up" data-aos-duration="3000">
          {/* grid md:grid-cols-2 gap-4 */}
          <div className="">
            <div className>
              <p className="md:text-xl text-lg font-light bg-blue-500 p-4 text-white">Joint venture</p>
              <p className="text-gray-500 md:leading-loose">
                GG44 Holdings, understands the role that both the entrepreneur and the lender play in a joint
                venture. Simply stated, a joint venture is a loan option that merges the passion and vision of an
                entrepreneur with the financial backing of the lender. Together, these two entities form a single
                purpose entity called a joint venture. <br />
                Joint ventures, marry money to knowledge and opportunity and clearly define what both parties will
                receive at the outcome of the project. In a typical joint venture, the lender will receive a percentage
                of ownership in the project on top of collecting the interest rate on the loan. <br />
                The joint venture’s entrepreneur will also receive a percentage of ownership in the project and often
                receives compensation for his or her time for the role they play (general contractor, etc.).
                Traditionally, the investor is paid back in full, plus interest, before the entrepreneur receives any
                monetary compensation.
              </p>
              <p className="md:text-md text-xl font-semibold pt-5 text-sky-600">Venture capital</p>
              <p className="text-gray-500 md:leading-loose">
                Our Venture capital program, is typically provided to early-stage start-up companies that have high
                growth potential in industries such as information technology ,Agribusiness, Health and Medicine
                and manufacturing. Venture capital investments are generally made as cash investments in
                exchange for shares in the company <br />
              </p>


              <div>
                <p> <b>How to proceed:</b> <br />
                  Please contact our offices to receive information about required paperwork and details.</p>
              </div>

            </div>

            {/* <div className="w-full h-full">
              <img src="/images/projectF.jpg" alt="img2" className="h-full object-cover" />
            </div> */}
          </div>
        </section>


      </div>
    </div>
  )
}

export default page