import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeSection from './shared/HomeSection'
import logo from '../misc/logo.png'

const sections = [
  {
    sectionName: 'Integrate Google products and partner services',
    imgs: [
      'https://domains.google/static/images/features-2022/automatic-verification.svg',
      'https://domains.google/static/images/features-2022/google-built-in.svg',
      'https://domains.google/static/images/features-2022/auto-link.svg',
    ],
    titles: ['Automatic domain verification', 'Google products built-in', 'Auto-link with hosts and design platforms'],
    paragrphes: [
      'Integrate your website with other Google properties without needed to verify TXT records.',
      'Manage or add Google Workspace and view web traffic report in Google Search Counsel, all from your domains dashboard.',
      'Use your domains dashboard to auto-link your domain with one of our trusted partners Shopify, Squarespace, WIX, Bluehost, and Weebly.'
    ],
  },
  {
    sectionName: 'Enhance safety with Google security',
    imgs: [
      'https://domains.google/static/images/features-2022/free-whois-privacy.svg',
      'https://domains.google/static/images/features-2022/two-factor-authentication.svg',
      'https://domains.google/static/images/features-2022/one-click-dnssec.svg',
    ],
    titles: ['Free WHOIS privacy', '2-factor authentication', 'Free one-click DNSSEC'],
    paragrphes: [
      'Protect yourself from spam and identity abuse by keeping your contact info private on WHOIS and RDAP.',
      'Add another layer of protection with Google 2-Step Verification.',
      'Safeguard your domains from threats like DNS spoofing and cache poison attacks.'
    ],
  },
  {
    sectionName: 'Scale and grow with super-fast speed',
    imgs: [
      'https://domains.google/static/images/features-2022/fast-dns.svg',
      'https://domains.google/static/images/features-2022/email-alias-and-sub-domains.svg',
      'https://domains.google/static/images/features-2022/fast-multi-domain-registration.svg',
    ],
    titles: ['Super-fast DNS', '100 email alias and sub-domains included', 'Fast multi-domain registration'],
    paragrphes: [
      'Scale to meet your website’s traffic demands and provides super-fast DNS resolution at no cost.',
      'With free email forwarding, get up to 100 alias email addresses with your domain. Design as many sites as you need with up to 100 sub-domains.',
      'Streamlined purchase and registration processes makes it easy to get multiple domains at once.'
    ],
  },
  {
    sectionName: 'Collaborate and export to streamline work',
    imgs: [
      'https://domains.google/static/images/features-2022/share-domain-control.svg',
      'https://domains.google/static/images/features-2022/share-favorite-domains.svg',
      'https://domains.google/static/images/features-2022/dns-export.svg',
    ],
    titles: ['Share domain control', 'Share favorited domains', 'DNS export'],
    paragrphes: [
      'Give clients or coworkers permission to manage a domain alongside you.',
      'Favorite domains and share with others before purchase.',
      'Download your DNS records to standard formats like BIND or YAML for easy migrations and to upload to other DNS servers.'
    ],
  },
]

const Features = () => {
  const navigate = useNavigate()
  return (
    <div>
      <HomeSection imgUrl={logo} imgAlt='hero img' hero>
        <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Included features to make things easy</Typography>
        <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Find your domain, create your site, and manage your online presence. All with Google simplicy and security.</Typography>
        <form className="grid grid-cols-[1fr_94px] gap-0 justify-center items-center w-full rounded shadow mt-7 mx-auto mb-0 text-left">
          <input className="h-16 pt-5 pr-0 pb-6 pl-14 w-full border-0 focus-visible:outline-none rounded-tl rounded-bl bg-[url(../misc/search_icon_grey.svg)] bg-no-repeat bg-[20px_center] text-base font-semibold" placeholder="Search for your domain" />
          <button onClick={() => navigate('/cart')} className="flex justify-center items-center text-white p-0 w-full h-full rounded-tr rounded-br bg-[#1a73e8] border-0 font-semibold font-[Arial,sans-serif;]" type="button">Get it</button>
        </form>
      </HomeSection>
      {sections.map(section => (
        <HomeSection centeredTitle={section.sectionName}>
          <div className='md:px-12 p-4 flex flex-col gap-8 lg:flex-row border-y rounded-lg  lg:border'>
            <div className='grid place-items-center md:hidden'>
              <img src={section.imgs[0]} alt='logo' />
            </div>
            <div className='flex gap-8 text-left lg:flex-col'>
              <img className='md:block hidden max-h-32' alt='logo' src={section.imgs[0]} />
              <div className='flex flex-col gap-4'>
                <Typography variant='h6' >{section.titles[0]}</Typography>
                <Typography variant='paragraph' >{section.paragrphes[0]}</Typography>
              </div>
            </div>
            <div className='flex gap-8 text-left lg:flex-col lg:border-x lg:px-8'>
              <img className='md:block hidden max-h-32' alt='logo' src={section.imgs[1]} />
              <div className='flex flex-col gap-4'>
                <Typography variant='h6' >{section.titles[1]}</Typography>
                <Typography variant='paragraph' >{section.paragrphes[1]}</Typography>
              </div>
            </div>
            <div className='flex gap-8 text-left lg:flex-col'>
              <img className='md:block hidden max-h-32' alt='logo' src={section.imgs[2]} />
              <div className='flex flex-col gap-4'>
                <Typography variant='h6' >{section.titles[2]}</Typography>
                <Typography variant='paragraph' >{section.paragrphes[2]}</Typography>
              </div>
            </div>
          </div>
        </HomeSection>
      ))}
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

export default Features