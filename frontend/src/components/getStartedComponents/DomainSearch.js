import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { FaIcons } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import HomeSection from '../shared/HomeSection'
import logo from '../../misc/logo.png'

const section2Items = [
    {
        imgSrc: 'https://domains.google/static/images/exports/08-24-2020/GOE004-15-Icons_100x100-Domain-Search-1_Keep-It-Short-and-Simple.svg',
        lead: 'Keep it short and simple',
        paragraph: 'When it comes to a domain name, less is more. Shorter, uncomplicated names are easier to remember.',

    },
    {
        imgSrc: 'https://domains.google/static/images/exports/08-24-2020/GOE004-15-Icons_100x100-Domain-Search-2_Use-Brand-and-Keywords.svg',
        lead: 'Use brand and keywords',
        paragraph: 'Using relevant words help users find you in a search. Your domain name should reflect your brand, service, or industry.',

    },
    {
        imgSrc: 'https://domains.google/static/images/exports/08-24-2020/GOE004-15-Icons_100x100-Domain-Search-3_Consider-Alternatives.svg',
        lead: 'Consider alternatives',
        paragraph: 'If your first choice is unavailable, don’t let that hold you back from starting. Use our search and suggestion tools to explore alternatives.',

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

const DomainSearch = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen'>
            <HomeSection imgUrl={logo} imgAlt='hero img' hero>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Discover your perfect domain</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Learn how to choose a memorable name and select the right domain ending.</Typography>
                <form className="grid grid-cols-[1fr_94px] gap-0 justify-center items-center w-full rounded shadow mt-7 mx-auto mb-0 text-left">
                    <input className="h-16 pt-5 pr-0 pb-6 pl-14 w-full border-0 focus-visible:outline-none rounded-tl rounded-bl bg-[url(../misc/search_icon_grey.svg)] bg-no-repeat bg-[20px_center] text-base font-semibold" placeholder="Search for your domain" />
                    <button onClick={() => navigate('/cart')} className="flex justify-center items-center text-white p-0 w-full h-full rounded-tr rounded-br bg-[#1a73e8] border-0 font-semibold font-[Arial,sans-serif;]" type="button">Get it</button>
                </form>
                <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Transfer a domain you already own</a>
            </HomeSection>
            <HomeSection darkerBG centeredTitle={`Choose the right domain name`}>
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
                    Read more about how to choose a domain
                </Link>
            </HomeSection>
            <HomeSection imgUrl={`https://domains.google/static/images/getting-started/domain/endings.svg`} imgAlt='logo' imageFirst>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Pick from more than 300 domain endings</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Let the world know what you’re all about before they even reach your website. From .com to .design to .app express yourself with a descriptive domain ending that helps your business stand out.</Typography>
                <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Read more about domain endings</a>
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

export default DomainSearch