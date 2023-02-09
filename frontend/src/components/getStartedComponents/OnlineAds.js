import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import HomeSection from '../shared/HomeSection'
import logo from '../../misc/market.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import Section2 from '../shared/Section2'
import LearnMoreSection from '../shared/LearnMoreSection'
import FindYourDomainSection from '../shared/FindYourDomainSection'
import StayUpToDateSection from '../shared/StayUpToDateSection'

const section2Items = [
    {
        imgSrc: 'https://domains.google/static/images/exports/08-24-2020/custom-ads-icon-1.svg',
        lead: 'Get noticed',
        paragraph: 'Start advertising online with Google Ads to help grow your business and get the results you want.',

    },
    {
        imgSrc: 'https://domains.google/static/images/exports/08-24-2020/custom-ads-icon-2.svg',
        lead: 'Understand your site visitors',
        paragraph: 'Measure your site performance with tools like Google Analytics and Reports in Google Domains.',

    },
    {
        imgSrc: 'https://domains.google/static/images/exports/08-24-2020/custom-ads-icon-3.svg',
        lead: 'Keep them coming back',
        paragraph: 'With Google Ads, you can adjust your goals, modify your audience, and change your budget over time to meet your needs.',
    },
]

const benefits = [
    {
        name: 'Ads tailored to the results you want',
        benefits: ['Get more calls', 'Increase store visits', 'Drive website traffic'],
        paragraph: 'Google Ads can help you get the results you want. Drive more traffic to your website, get more phone calls to your business, or even increase visits your physical store.'
    },
    {
        name: 'Adjust your monthly budget anytime',
        benefits: ['Get more calls', 'Increase store visits', 'Drive website traffic'],
        paragraph: 'Google Ads can work for any advertising budget. You’ll never pay more than the monthly cap you set, and you can adjust or pause anytime. Plus, we’ll show you estimated results for your budget.'
    },
]

const learnMoreItems = [
    {
        smallTitle: 'Domain basics',
        lead: 'When to upgrade to workspace',
        icon: 'https://domains.google/static/images/options/option-3.webp'
    },
    {
        smallTitle: 'Domain basics',
        lead: 'how to use email forwarding',
        icon: 'https://domains.google/static/images/options/option-3.webp'
    },
]

const OnlineAds = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen'>
            <HomeSection imgUrl={logo} imgAlt='hero img' hero>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Market your business online</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Learn how to get in front of customers and use Google Ads to grow your business.</Typography>
                <Button className='bg-primary'>Get Clikkle Ads</Button>
            </HomeSection>
            <Section2 section2Items={section2Items} title='Get people to visit your website' linkText={'Learn more about getting people to visit your site'} />
            <HomeSection imgUrl={`https://domains.google/static/images/getting-started/ads/grow.svg`} imgAlt='logo' imageFirst stayCol>
                <Typography className='text-3xl md:text-4xl xl:text-5xl w-full text-center' variant='h1'>Grow your business with Clikkle Ads</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl w-full text-center' variant="lead">Discover how Google Ads can help you attract new customers by reaching the right people at the right time. With Ads, you only pay for results, like clicks to your website or calls to your business.</Typography>
                <a className=" text-primary no-underline w-full text-center" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Learn more about Google Ads</a>
            </HomeSection>
            <HomeSection centeredTitle={'Choose your goals. Set a budget.'}>
                <div className='w-full flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-2 max-w-[800px] mx-auto'>
                    {benefits.map((benefit, i) => (
                        <div key={i} className='bg-white flex flex-col border-b rounded-lg border h-full shadow md:justify-between gap-2 items-center'>
                            <div className='h-[60%] flex flex-col gap-2 justify-center items-center w-full pt-4 pb-4'>
                                <Typography as='div' variant='h2' className=' text-center w-full text-black p-2 text-lg md:text-black md:text-xl xl:text-2xl'>{benefit.name}</Typography>
                                <div className='w-full px-4'>
                                    <Typography as='div' variant='paragraph' className=' text-left w-full text-black p-2 text-sm md:text-black md:text-base xl:text-xl'>{benefit.benefits[0]}</Typography>
                                    <Typography as='div' variant='paragraph' className=' text-left w-full text-black p-2 text-sm md:text-black md:text-base xl:text-xl'>{benefit.benefits[1]}</Typography>
                                    <Typography as='div' variant='paragraph' className=' text-left w-full text-black p-2 text-sm md:text-black md:text-base xl:text-xl'>{benefit.benefits[2]}</Typography>
                                </div>
                            </div>
                            <div className='border-t px-4 py-4'>
                                <Typography className='text-lg lg:text-xl xl:text-2xl my-8' variant='paragraph' >{benefit.paragraph}</Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </HomeSection>
            <LearnMoreSection />
            <FindYourDomainSection />
            <StayUpToDateSection />
        </div>
    )
}

export default OnlineAds