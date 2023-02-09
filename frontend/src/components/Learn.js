import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import HomeSection from './shared/HomeSection'
import logo from '../misc/learn.jpeg'
import StayUpToDateSection from './shared/StayUpToDateSection'

const needs = [
  'All',
  'Domain basics',
  'Choosing a name',
  'Buying & Transferring',
  'Hosting & website',
]

const cards = [
  { img: 'https://domains.google/static/images/options/option-3.webp', small: 'Domain basics', lead: 'Domains is out of beta' },
  { img: 'https://domains.google/static/images/options/option-4.webp', small: 'Hosting & Website', lead: 'How to choose a web host in 4 steps' },
  { img: 'https://domains.google/static/images/options/option-2.webp', small: 'Buying & Transferring', lead: '5 things to watch out when buying a domain' },
  { img: 'https://domains.google/static/images/options/option-1.webp', small: 'Choosing a name', lead: 'How to come up with a good domain name' },
  { img: 'https://domains.google/static/images/options/option-3.webp', small: 'Domain basics', lead: 'Domains is out of beta' },
  { img: 'https://domains.google/static/images/options/option-4.webp', small: 'Hosting & Website', lead: 'How to choose a web host in 4 steps' },
  { img: 'https://domains.google/static/images/options/option-2.webp', small: 'Buying & Transferring', lead: '5 things to watch out when buying a domain' },
  { img: 'https://domains.google/static/images/options/option-1.webp', small: 'Choosing a name', lead: 'How to come up with a good domain name' },
]

const Learn = () => {

  return (
    <div>
      <HomeSection imgUrl={logo} imgAlt='hero img' hero>
        <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Learning center</Typography>
        <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Read up on popular topics and learn more about how to buy and transfer domains, choose a name, and more.</Typography>
      </HomeSection>
      <HomeSection centeredTitle={'Find the right domain ending for your needs'}>
        <div className='flex gap-4 flex-wrap w-full justify-center items-center'>
          {needs.map((need, i) => (
            <label>
              <input defaultChecked={i === 0} type="radio" name="needs" id={i} class="hidden peer" />
              <div class="peer-checked:bg-primary peer-checked:text-white custom-radio rounded-full px-2 py-1 border bg-white cursor-pointer select-none">{need}</div>
            </label>
          ))}
        </div>
        <div className='w-full flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-2 grid-flow-row'>
          {cards.map((card, i) => (
            <div key={i} className='flex gap-8 text-left p-4 border rounded-md w-full hover:shadow-md cursor-pointer transition-all'>
              <img className='block max-h-16' alt='logo' src={card.img} />
              <div className='flex flex-col gap-4'>
                <Typography variant='small' className='text-sm text-gray-500' >{card.small}</Typography>
                <Typography variant='lead' >{card.lead}</Typography>
              </div>
            </div>
          ))}
        </div>
      </HomeSection>
      <StayUpToDateSection />
    </div>
  )
}

export default Learn