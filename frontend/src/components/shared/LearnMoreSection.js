import { Typography } from '@material-tailwind/react'
import React from 'react'
import HomeSection from './HomeSection'

const learnMoreItems = [
    {
        smallTitle: 'Choosing a name',
        lead: 'how to come up with a good domain name',
        icon: 'https://domains.google/static/images/options/option-1.webp'
    },
    {
        smallTitle: 'Buying and transferring',
        lead: 'how to come up with a good domain name',
        icon: 'https://domains.google/static/images/options/option-2.webp'
    },
    {
        smallTitle: 'Choosing a name',
        lead: 'how to come up with a good domain name',
        icon: 'https://domains.google/static/images/options/option-1.webp'
    },
    {
        smallTitle: 'Choosing a name',
        lead: 'how to come up with a good domain name',
        icon: 'https://domains.google/static/images/options/option-1.webp'
    },
    {
        smallTitle: 'Choosing a name',
        lead: 'how to come up with a good domain name',
        icon: 'https://domains.google/static/images/options/option-1.webp'
    },
    {
        smallTitle: 'Choosing a name',
        lead: 'how to come up with a good domain name',
        icon: 'https://domains.google/static/images/options/option-1.webp'
    },
]

const LearnMoreSection = () => {
    return (
        <HomeSection>
            <Typography className='text-center w-full text-2xl md:text-4xl fonts' variant='h4'>Learn more</Typography>
            <Typography className='text-center w-full' variant='lead'>Discover best practices and get your questions answered</Typography>
            <div className='flex flex-col justify-center w-full max-w-4xl mx-auto items-center gap-4 md:grid md:grid-cols-2'>
                {learnMoreItems.map(item => (
                    <div className='bg-white max-w-full md:max-w-[100%] flex p-4 border-b rounded-lg border shadow md:justify-between gap-2 items-center hover:shadow-xl transition-all'>
                        <div className='w-[80px]'>
                            <img src={item.icon} alt='icon' />
                        </div>
                        <div className='text-left flex flex-col gap-4 p-2'>
                            <Typography variant='small' className='text-gray-500 text-[11px] tracking-[0.8px] fonts leading-6 uppercase'>{item.smallTitle}</Typography>
                            <Typography variant='lead' className='text-lg fonts leading-6'>{item.lead}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </HomeSection>
    )
}

export default LearnMoreSection