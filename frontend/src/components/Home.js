import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { FaIcons } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
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

const needs = [
  'Popular',
  'Art & Design',
  'Banking & Finance',
  'Community & Sports',
  'Marketing & Comms',
  'Tech & Dev',
  'Service & Retail',
]

const domainEndings = [
  { name: '.com', price: 12 },
  { name: '.org', price: 12 },
  { name: '.net', price: 12 },
  { name: '.dev', price: 12 },
  { name: '.app', price: 14 },
  { name: 'co', price: 30 },
]

const learnMoreItems = [
  {
    smallTitle: 'Buying and transferring',
    lead: 'how to come up with a good domain name',
    icon: <FaIcons size={50} />
  },
  {
    smallTitle: 'Buying and transferring',
    lead: 'how to come up with a good domain name',
    icon: <FaIcons size={50} />
  },
  {
    smallTitle: 'Buying and transferring',
    lead: 'how to come up with a good domain name',
    icon: <FaIcons size={50} />
  },
  {
    smallTitle: 'Buying and transferring',
    lead: 'how to come up with a good domain name',
    icon: <FaIcons size={50} />
  },
  {
    smallTitle: 'Buying and transferring',
    lead: 'how to come up with a good domain name',
    icon: <FaIcons size={50} />
  },
  {
    smallTitle: 'Buying and transferring',
    lead: 'how to come up with a good domain name',
    icon: <FaIcons size={50} />
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
                  <img src={item.imgSrc} width={100} height={100} alt={item.lead} />
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
      <HomeSection darkerBG centeredTitle={'Find the right domain ending for your needs'}>
        <div className='flex gap-4 flex-wrap w-full justify-center items-center'>
          {needs.map((need, i) => (
            <label>
              <input defaultChecked={i === 0} type="radio" name="needs" id={i} class="hidden peer" />
              <div class="peer-checked:bg-primary peer-checked:text-white custom-radio rounded-full px-2 py-1 border bg-white cursor-pointer select-none">{need}</div>
            </label>
          ))}
        </div>
        <div className='w-full flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-3'>
          {domainEndings.map((ending, i) => (
            <div key={i} className='bg-white flex flex-row md:flex-col p-2 border-b rounded-lg border w-full max-w-xs shadow md:justify-between gap-2 items-center hover:shadow-xl transition-all'>
              <Typography as='div' variant='h6' className=' w-2/3 text-primary border-r md:border-r-0 p-2 text-base md:text-black md:text-3xl xl:text-4xl'>{ending.name}</Typography>
              <Typography as='div' variant='h6' className='w-1/3 text-black md:text-primary text-base md:text-lg'>${ending.price}*</Typography>
            </div>
          ))}
        </div>
        <Typography className='text-gray-500 mt-4' variant='h6'>*Starting price per year</Typography>
      </HomeSection>
      <HomeSection>
        <Typography className='text-center w-full' variant='h4'>Learn more</Typography>
        <Typography className='text-center w-full' variant='lead'>Discover best practices and get your questions answered</Typography>
        <div className='flex flex-col justify-center w-full max-w-4xl mx-auto items-center gap-4 md:grid md:grid-cols-2'>
          {learnMoreItems.map(item => (
            <div className='bg-white max-w-full md:max-w-[100%] flex p-4 border-b rounded-lg border shadow md:justify-between gap-2 items-center hover:shadow-xl transition-all'>
              <div className=''>
                {item.icon}
              </div>
              <div className='text-left flex flex-col gap-4 p-2'>
                <Typography variant='small' className='text-gray-500 text-sm lg:text-base xl:text-lg'>{item.smallTitle}</Typography>
                <Typography variant='lead' className='text-lg lg:text-xl xl:text-2xl'>{item.lead}</Typography>
              </div>
            </div>
          ))}
        </div>
      </HomeSection>
      <HomeSection mobileImgSecond>
        <div className='flex flex-col text-center lg:text-left gap-4 justify-center items-center lg:items-start'>
          <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Find your domain</Typography>
          <form className="grid grid-cols-[1fr_94px] gap-0 justify-center items-center w-full rounded shadow mt-7 mx-auto mb-0 text-left">
            <input className="h-16 pt-5 pr-0 pb-6 pl-14 w-full border-0 focus-visible:outline-none rounded-tl rounded-bl bg-[url(../misc/search_icon_grey.svg)] bg-no-repeat bg-[20px_center] text-base font-semibold" placeholder="Search for your domain" />
            <button onClick={() => navigate('/cart')} className="flex justify-center items-center text-white p-0 w-full h-full rounded-tr rounded-br bg-[#1a73e8] border-0 font-semibold font-[Arial,sans-serif;]" type="button">Get it</button>
          </form>
        </div>
        <div className={`flex justify-center lg:mt-0`}>
          <img
            className='section-img-clikkle'
            src={logo}
            alt={'imgAlt'}
          />
        </div>
      </HomeSection>
      <div className='bg-gray-100 p-8 flex flex-col w-full gap-4 items-start lg:flex-row lg:items-center lg:justify-between'>
        <div className=' max-w-md'>
          <Typography className='text-left w-full mb-4' variant='lead'>Stay up to date with Google Domains</Typography>
          <Typography className='text-left w-full text-gray-600' variant='small'>Sign up for Google Domains newsletters with product updates, special offers, and insights.</Typography>
        </div>
        <div className='flex gap-2 max-h-min w-full max-w-md'>
          <Input variant="static" placeholder="Enter your email address" />
          <Button className='bg-primary h-full whitespace-nowrap'>Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default Home