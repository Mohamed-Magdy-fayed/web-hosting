import { Typography } from '@material-tailwind/react'
import React from 'react'
import HomeSection from './HomeSection'

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
    { name: '.me', price: 14 },
    { name: 'us', price: 30 },
]

const DomainEndingsSection = ({}) => {
    return (
        <HomeSection darkerBG centeredTitle={'Find the right domain ending for your needs'}>
            <div className='flex gap-4 flex-wrap fonts w-full justify-center items-center'>
                {needs.map((need, i) => (
                    <label>
                        <input defaultChecked={i === 0} type="radio" name="needs" id={i} class="hidden peer" />
                        <div className="peer-checked:bg-primary fonts peer-checked:text-white custom-radio rounded-full px-3 py-1 border bg-white cursor-pointer select-none text-sm">{need}</div>
                    </label>
                ))}
            </div>
            <div className='w-full flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-3 xl:grid-cols-4'>
                {domainEndings.map((ending, i) => (
                    <div key={i} className={`${i > domainEndings.length - 3 && 'hidden xl:flex'} bg-white flex flex-row md:flex-col p-2 border-b rounded-lg border w-full max-w-xs shadow md:justify-between gap-2 items-center hover:shadow-xl transition-all`}>
                        <Typography as='div' variant='h6' className=' w-2/3 text-primary border-r md:border-r-0 p-2 text-base fonts md:text-black md:text-3xl xl:text-4xl lg:w-full text-center'>{ending.name}</Typography>
                        <Typography as='div' variant='h6' className='w-1/3 text-black md:text-primary text-base md:text-lg fonts  lg:w-full text-center'>${ending.price}*</Typography>
                    </div>
                ))}
            </div>
            <Typography className='text-gray-500 mt-4 w-full text-center' variant='h6'>*Starting price per year</Typography>
        </HomeSection>
    )
}

export default DomainEndingsSection