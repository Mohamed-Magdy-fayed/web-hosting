import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import HomeSection from '../shared/HomeSection'
import logo from '../../misc/logo.png'
import { Link, useNavigate } from 'react-router-dom'

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
            <HomeSection darkerBG centeredTitle={`Get people to visit your website`}>
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
                <Link to={`/`} className='text-primary pt-12'>
                    Learn more about getting people to visit your site
                </Link>
            </HomeSection>
            <HomeSection imgUrl={`https://domains.google/static/images/getting-started/ads/grow.svg`} imgAlt='logo' imageFirst>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Grow your business with Clikkle Ads</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Discover how Google Ads can help you attract new customers by reaching the right people at the right time. With Ads, you only pay for results, like clicks to your website or calls to your business.</Typography>
                <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Learn more about Google Ads</a>
            </HomeSection>
            <HomeSection centeredTitle={'Choose your goals. Set a budget.'}>
                <div className='w-full flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-3'>
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
            <HomeSection>
                <Typography className='text-center w-full' variant='h4'>Learn more</Typography>
                <Typography className='text-center w-full' variant='lead'>Discover best practices and get your questions answered</Typography>
                <div className='flex flex-col justify-center w-full max-w-4xl mx-auto items-center gap-4 md:grid md:grid-cols-2'>
                    {learnMoreItems.map(item => (
                        <div className='bg-white w-full md:max-w-[100%] flex p-4 border-b rounded-lg border shadow md:grid gap-2 items-center hover:shadow-xl transition-all'>
                            <div className=''>
                                <img className='w-20' src={item.icon} alt='logo' />
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
                        <button onClick={() => navigate('/cart')} className="flex justify-center items-center text-white p-0 w-full h-full rounded-tr rounded-br bg-primary border-0 font-semibold font-[Arial,sans-serif;]" type="button">Get it</button>
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

export default OnlineAds