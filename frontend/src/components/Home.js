import { Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroIMG from '../misc/hero-img.png'
import img1 from '../misc/img1.jpeg'
import logo from '../misc/logo.png'
import HomeSection from './shared/HomeSection'

const section2Items = [
  {
    imgSrc: 'https://domains.google/static/images/exports/08-24-2020/GOE004-15_Icons_100x100-Home_Page_3_Simple_Pricing_Extra_Included.svg',
    lead: 'Simple pricing. Extras included.',
    paragraph: 'Domains start at $7/year. Email forwarding, privacy protection, one-click DNSSEC, Google 2-Step Verification, and more included.',

  },
  {
    imgSrc: 'https://domains.google/static/images/exports/08-24-2020/GOE004-15_Icons_100x100-Home_Page_1_Speed_Security_Support.svg',
    lead: 'Speed. Security. Support.',
    paragraph: 'Experience speed and security using DNS servers that run on Google infrastructure with 24/7 support.',

  },
  {
    imgSrc: 'https://domains.google/static/images/exports/08-24-2020/GOE004-15_Icons_100x100-Home_Page_2_More_Endings_More_Options.svg',
    lead: 'More endings. More options.',
    paragraph: 'Choose from more than 300 domain endings. From .com to .photography to .cafe, find a simple, memorable domain that\'s just right for you.',

  },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <HomeSection imgUrl={logo} imgAlt='hero img' hero>
        <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Find your place online</Typography>
        <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Choose from more than 300 domain endings. Get 24/7 Google support from real humans.</Typography>
        <form className="grid grid-cols-[1fr_94px] gap-0 justify-center items-center w-full rounded shadow mt-7 mx-auto mb-0 text-left">
          <input className="h-16 pt-5 pr-0 pb-6 pl-14 w-full border-0 focus-visible:outline-none rounded-tl rounded-bl bg-[url(../misc/search_icon_grey.svg)] bg-no-repeat bg-[20px_center] text-base font-semibold" placeholder="Search for your domain" />
          <button onClick={() => navigate('/cart')} className="flex justify-center items-center text-white p-0 w-full h-full rounded-tr rounded-br bg-[#1a73e8] border-0 font-semibold font-[Arial,sans-serif;]" type="button">Get it</button>
        </form>
        <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Transfer a domain you already own</a>
      </HomeSection>
      <HomeSection darkerBG centeredTitle={`Put the power of Google behind your domain`}>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 lg:flex-row'>
            {section2Items.map(item => (
              <div key={item.lead} className='flex flex-col gap-4 md:flex-row lg:flex-col'>
                <div className='grid place-items-center'>
                  <img src={item.imgSrc} width={100} height={100} />
                </div>
                <div>
                  <div>
                    <Typography variant='lead'>
                      {item.lead}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant='paragraph'>
                      {item.paragraph}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HomeSection>
      <Typography className='w-full mt-12 text-2xl md:text-3xl xl:text-4xl text-center' variant='h1'>
        All the tools to get started. All in one place.
      </Typography>
      <HomeSection imgUrl={logo} imgAlt='logo' imageFirst>
        <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Find your place online</Typography>
        <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Choose from more than 300 domain endings. Get 24/7 Google support from real humans.</Typography>
        <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Transfer a domain you already own</a>
      </HomeSection>
      <HomeSection imgUrl={logo} imgAlt='logo'>
        <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Get a professional email address</Typography>
        <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Try built-in email forwarding to create up to 100 email aliases, or get professional email along with other tools from Google Workspace.</Typography>
        <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Learn about Google Workspace and email forwarding</a>
      </HomeSection>
      <HomeSection imgUrl={logo} imgAlt='logo' imageFirst>
        <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Build your site, no coding required</Typography>
        <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Whether you need to build a simple site, a blog, or a robust e-commerce solution, we have the tools and partners to help you build your website like a pro.</Typography>
        <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Learn how to build and host your site</a>
      </HomeSection>
      <HomeSection imgUrl={logo} imgAlt='logo'>
        <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Market your business online</Typography>
        <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Get in front of customers searching for businesses like yours with Google Ads. Increase website traffic, phone calls, and store visits all on any budget.</Typography>
        <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Learn about Google Ads</a>
      </HomeSection>
      <HomeSection centeredTitle={'Find the right domain ending for your needs'}>
        <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Market your business online</Typography>
        <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Get in front of customers searching for businesses like yours with Google Ads. Increase website traffic, phone calls, and store visits all on any budget.</Typography>
        <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Learn about Google Ads</a>
      </HomeSection>
    </div>
  )
}

export default Home