import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeSection from '../shared/HomeSection'
import section3home from '../../misc/section3home.jpeg'
import DomainEndingsSection from '../shared/DomainEndingsSection'
import LearnMoreSection from '../shared/LearnMoreSection'
import FindYourDomainSection from '../shared/FindYourDomainSection'
import StayUpToDateSection from '../shared/StayUpToDateSection'
import Section2 from '../shared/Section2'

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

const DomainSearch = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen'>
            <HomeSection imgUrl={section3home} imgAlt='hero img'>
                <Typography className='font-normal text-3xl md:text-5xl xl:text-[64px] fonts' variant='h1'>Discover your perfect domain</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Learn how to choose a memorable name and select the right domain ending.</Typography>
                <form className="grid grid-cols-[1fr_94px] gap-0 justify-center items-center w-full rounded shadow mt-7 mx-auto mb-0 text-left">
                    <input className="h-16 pt-5 pr-0 pb-6 pl-14 w-full border-0 focus-visible:outline-none rounded-tl rounded-bl bg-[url(../misc/search_icon_grey.svg)] bg-no-repeat bg-[20px_center] text-base font-semibold" placeholder="Search for your domain" />
                    <button onClick={() => navigate('/cart')} className="flex justify-center items-center text-white p-0 w-full h-full rounded-tr rounded-br bg-primary border-0 font-semibold font-[Arial,sans-serif;]" type="button">Get it</button>
                </form>
                <a className="text-primary no-underline" href="/dashboard">Transfer a domain you already own</a>
            </HomeSection>
            <Section2 section2Items={section2Items} title='Choose the right domain name' linkText='Read more about how to choose a domain' linkUrl='/learn' />
            <HomeSection darkerBG centeredTitle={`Choose the right domain name`}>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 lg:flex-row'>
                        {section2Items.map(item => (
                            <div key={item.lead} className='flex flex-col gap-4 md:flex-row lg:flex-col'>
                                <div className='grid place-items-center'>
                                    <img src={item.imgSrc} width={130} height={130} alt={item.lead} />
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
                <Link to='/learn' className='text-primary pt-12'>
                    Read more about how to choose a domain
                </Link>
            </HomeSection>
            <HomeSection imgUrl={`https://domains.google/static/images/getting-started/domain/endings.svg`} imgAlt='logo' imageFirst stayCol>
                <Typography className='font-normal text-2xl md:text-3xl xl:text-[36px] fonts w-full text-center' variant='h1'>Pick from more than 300 domain endings</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl w-full text-center' variant="lead">Let the world know what you’re all about before they even reach your website. From .com to .design to .app express yourself with a descriptive domain ending that helps your business stand out.</Typography>
                <a className=" text-primary no-underline w-full text-center" href="/dashboard">Read more about domain endings</a>
            </HomeSection>
            <DomainEndingsSection />
            <LearnMoreSection />
            <FindYourDomainSection />
            <StayUpToDateSection />
        </div>
    )
}

export default DomainSearch