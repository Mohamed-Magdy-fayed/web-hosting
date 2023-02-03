import React from 'react'
import heroIMG from '../misc/hero-img.png'
import img1 from '../misc/img1.jpeg'

const Home = () => {
  return (
    <div>
      <section className="h-screen w-full grid grid-cols-[1fr_50%] gap-10 justify-between items-center pl-[100px] pr-[76px]">
        <div className="flex flex-col text-left gap-4">
          <h1 className=" text-6xl tex">Find your place online</h1>
          <span className=" text-2xl">Choose from more than 300 domain endings.</span>
          <span className=" text-2xl">Get 24/7 Google support from real humans.</span>
          <form className="grid grid-cols-[1fr_94px] gap-0 justify-center items-center w-full rounded shadow mt-7 mx-auto mb-0 text-left">
            <input className="h-16 pt-5 pr-0 pb-6 pl-14 w-full border-0 focus-visible:outline-none rounded-tl rounded-bl bg-[url(../misc/search_icon_grey.svg)] bg-no-repeat bg-[20px_center] text-base font-semibold" placeholder="Search for your domain" />
            <button className="flex justify-center items-center text-white p-0 w-full h-full rounded-tr rounded-br bg-[#1a73e8] border-0 font-semibold font-[Arial,sans-serif;]" type="button">Get it</button>
          </form>
          <a className=" text-[#1a73e8] no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Transfer a domain you already own</a>
        </div>
        <div>
          <img
            src={heroIMG}
            alt="hero img"
          />
        </div>
      </section>
      <section className=' lg:pt-[113px] lg:pb-[124px] md:px-[35px] text-center bg-[#f5f5f5] px-[25px] py-16'>
        <div className='lg:p-[0_100px] md:max-w-[1440px] md:px-[40px] md:mx-auto max-w-[unset]'>
          <div className='mb-[60px] lg:text-4xl lg:leading-[44px] font-[Arial,sans-serif;]'>
            <span className='lg:text-4xl lg:leading-10'>
              Put the power of Google behind your domain
            </span>
          </div>
          <div className='grid gap-x-[30px] grid-cols-3'>
            <div className='lg:mb-0 mb-12'>
              <div className='lg:w-[130px] lg:inline-block mb-[20px] inline-block'>
                <img className='block' src='https://domains.google/static/images/exports/08-24-2020/GOE004-15_Icons_100x100-Home_Page_3_Simple_Pricing_Extra_Included.svg' width={100} height={100} />
              </div>
              <div className='lg:px-[15px]'>
                <div className='md:text-2xl md:leading-8 font-[Arial,sans-serif] !text-2xl !leading-8 mb-[18px]'>
                  <span>
                    Simple pricing. Extras included.
                  </span>
                </div>
                <div className='font-[Arial,sans-serif;] text-base leading-6 text-[#202124]'>
                  <span className=''>
                    Domains start at $7/year. Email forwarding, privacy protection, one-click DNSSEC, Google 2-Step Verification, and more included.
                  </span>
                </div>
              </div>
            </div>
            <div className='lg:mb-0 mb-12'>
              <div className='lg:w-[130px] lg:inline-block mb-[20px] inline-block'>
                <img className='block' src='https://domains.google/static/images/exports/08-24-2020/GOE004-15_Icons_100x100-Home_Page_1_Speed_Security_Support.svg' width={100} height={100} />
              </div>
              <div className='lg:px-[15px]'>
                <div className='md:text-2xl md:leading-8 font-[Arial,sans-serif] !text-2xl !leading-8 mb-[18px]'>
                  <span>
                    Speed. Security. Support.
                  </span>
                </div>
                <div className='font-[Arial,sans-serif;] text-base leading-6 text-[#202124]'>
                  <span>
                    Experience speed and security using DNS servers that run on Google infrastructure with 24/7 support.
                  </span>
                </div>
              </div>
            </div>
            <div className='lg:mb-0 mb-12'>
              <div className='lg:w-[130px] lg:inline-block mb-[20px] inline-block'>
                <img className='block' src='https://domains.google/static/images/exports/08-24-2020/GOE004-15_Icons_100x100-Home_Page_2_More_Endings_More_Options.svg' width={100} height={100} />
              </div>
              <div className='lg:px-[15px]'>
                <div className='md:text-2xl md:leading-8 font-[Arial,sans-serif] !text-2xl !leading-8 mb-[18px]'>
                  <span>
                    More endings. More options.
                  </span>
                </div>
                <div className='font-[Arial,sans-serif;] text-base leading-6 text-[#202124]'>
                  <span>
                    Choose from more than 300 domain endings. From .com to .photography to .cafe, find a simple, memorable domain that's just right for you.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:mt-[35px] md:text-sm font-[Arial,sans-serif;] text-[13px] leading-5 tracking-[.25px]'>
          <a className='text-[#1967d2] cursor-pointer no-underline font-medium' href="https://domains.google/learn/why-domains/">
            <span>
              More reasons to choose Google Domains
            </span>
          </a>
        </div>
      </section>
      <section class="md:m-[0_auto] md:max-w-[1440] md:!overflow-x-visible relative">
        <div class=" relative z-50">
          <h2 class="lg:pt-[113px] md:pt-[85px] md:pb-[60px] lg:text-4xl leading-[44px] font-[Arial,sans-serif;] text-center p-[64px_25px_8px]">
            <span>
              All the tools to get started. All in one&nbsp;place.
            </span>
          </h2>
        </div>
      </section>
      <section className='md:m-[0_auto] md:max-w-[1440] md:!overflow-x-visible relative'>
        <div className=' relative z-50'>
          <section className='lg:pb-4 md:pb-16 pb-12 lg:gap-7 lg:p-[0_100px] md:grid md:items-center md:px-9 md:gap-9 grid-cols-2 flex flex-col-reverse px-[30px]'>
            <div className='lg:flex lg:flex-col lg:justify-center'>
              <h2 className="lg:text-4xl leading-[44px] md:text-2xl md:leading-8 m-0">
                <span className="text">
                  Discover your perfect&nbsp;domain
                </span>
              </h2>
              <h3 className="md:mt-4 lg:text-2xl lg:leading-8 mt-[14px]">
                <span className="text">
                  Find the right name to help people find you. Use our search and suggestion tools. Pick from hundreds of domain name&nbsp;endings.
                </span>
              </h3>
              <a className="md:text-sm text-[13px] leading-5 tracking-[.25px] inline-block mt-[22px] text-[#1a73e8] cursor-pointer no-underline font-medium" href="/get-started/domain-search/" data-category="transfer" data-action="nav to register">
                <span>
                  Learn how to find the right&nbsp;domain
                </span>
              </a>
            </div>
            <div className='md:order-[-1] w-full'>
              <img src={img1} alt='alt' />
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Home