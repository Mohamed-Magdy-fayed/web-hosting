import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import HomeSection from './shared/HomeSection'
import StayUpToDateSection from './shared/StayUpToDateSection'

const Support = () => {
  return (
    <div>
      <HomeSection imgUrl={'https://domains.google/static/images/support/hero.webp'} imgAlt='hero img' >
        <Typography className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl' variant='h1'>Helpful humans available 24/7</Typography>
      </HomeSection>
      <div className='px-8 md:px-12 lg:px-16 xl:px-24 my-0 py-0'>
        <div className='flex flex-col gap-8 md:grid md:gap-12 md:grid-cols-3 md:items-baseline w-full border-y py-12'>
          <div className='flex flex-col gap-12'>
            <div className='grid place-items-start max-w-xs'>
              <img alt='img' className='w-32' src='https://domains.google/static/images/support/tout-1.webp' />
            </div>
            <div className='text-left'>
              <Typography className='text-2xl md:text-3xl lg:text-4xl' variant='lead'>How can we help?</Typography>
            </div>
          </div>
          <div className=' flex flex-col gap-8 items-start col-span-2'>
            <Typography className='text-left text-lg md:text-xl lg:text-2xl' variant='paragraph'>Find out how we can help by visiting our global support page.</Typography>
            <Button className='bg-primary'>Reach out</Button>
          </div>
        </div>
      </div>
      <div className='px-8 md:px-12 lg:px-16 xl:px-24 my-0 py-0'>
        <div className='flex flex-col gap-8 md:grid md:gap-12 md:grid-cols-3 md:items-baseline w-full border-y py-12'>
          <div className='flex flex-col gap-12'>
            <div className='grid place-items-start max-w-xs'>
              <img alt='img' className='w-32' src='https://domains.google/static/images/support/tout-2.png' />
            </div>
            <div className='text-left'>
              <Typography className='text-2xl md:text-3xl lg:text-4xl' variant='lead'>Can't find what you're looking for?</Typography>
            </div>
          </div>
          <div className=' flex flex-col gap-8 items-start col-span-2'>
            <Typography className='text-left text-lg md:text-xl lg:text-2xl' variant='paragraph'>Request an unsupported domain ending (TLD) or country.</Typography>
            <Button className='bg-primary'>Tell us</Button>
          </div>
        </div>
      </div>
      <div className='px-8 md:px-12 lg:px-16 xl:px-24 my-0 py-0'>
        <div className='flex flex-col gap-8 md:grid md:gap-12 md:grid-cols-3 md:items-baseline w-full border-y py-12'>
          <div className='flex flex-col gap-12'>
            <div className='grid place-items-start max-w-xs'>
              <img alt='img' className='w-32' src='https://domains.google/static/images/support/faq.webp' />
            </div>
            <div className='text-left'>
              <Typography className='text-2xl md:text-3xl lg:text-4xl' variant='lead'>Frequently asked questions</Typography>
            </div>
          </div>
          <div className=' flex flex-col gap-8 items-start col-span-2'>
            <Typography className='text-left text-lg md:text-xl lg:text-2xl' variant='paragraph'>Which domain endings does Google Domains offer?</Typography>
            <Typography className='text-left text-lg md:text-xl lg:text-2xl' variant='paragraph'>With over 300 domain endings to choose from, Google Domains makes it easy to find a simple, memorable domain that’s just right for you. Visit our TLD Overview page to see the full list of endings available.</Typography>
          </div>
        </div>
      </div>
      <div className='px-8 md:px-12 lg:px-16 xl:px-24 my-0 py-0'>
        <div className='flex flex-col gap-8 md:grid md:gap-12 md:grid-cols-3 md:items-baseline w-full border-y py-12'>
          <div className='flex flex-col gap-12'>
            <div className='grid place-items-start max-w-xs'>
              <img alt='img' className='w-32' src='https://domains.google/static/images/support/tout-1.webp' />
            </div>
            <div className='text-left'>
              <Typography className='text-2xl md:text-3xl lg:text-4xl' variant='lead'>Help Center</Typography>
            </div>
          </div>
          <div className=' flex flex-col gap-8 items-start col-span-2'>
            <Typography className='text-left text-lg md:text-xl lg:text-2xl' variant='paragraph'>Find answers to technical questions like transferring a domain, domain management, and troubleshooting.</Typography>
            <Button className='bg-primary'>Go to hep center</Button>
          </div>
        </div>
      </div>
      <StayUpToDateSection />
    </div>
  )
}

export default Support