import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import HomeSection from '../shared/HomeSection'
import emailsectoin from '../../misc/emailsectoin.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import Section2 from '../shared/Section2'
import CenterMainTitle from '../shared/CenterMainTitle'
import LearnMoreSection from '../shared/LearnMoreSection'
import FindYourDomainSection from '../shared/FindYourDomainSection'
import StayUpToDateSection from '../shared/StayUpToDateSection'

const section2Items = [
    {
        imgSrc: 'https://domains.google/static/images/getting-started/email/tout-1.svg',
        lead: 'Create up to 100 aliases',
        paragraph: 'Choose useful aliases for your business such as info@, help@, or bookings@your-business.com.',

    },
    {
        imgSrc: 'https://domains.google/static/images/getting-started/email/tout-2.svg',
        lead: 'Use with your existing email',
        paragraph: 'Link your aliases to your current email address, in Gmail or elsewhere, to receive all your messages in one place.',

    },
    {
        imgSrc: 'https://domains.google/static/images/getting-started/email/tout-3.svg',
        lead: 'Custom send from any alias',
        paragraph: 'If you use Gmail as your primary email, you can customize the “From” field to send from any alias.',
    },
]

const plans = [
    { lead: 'Email', small: 'Professional email', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/gmail.svg' },
    { lead: 'Drive', small: 'Cloud storage and archiving', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/drive.svg' },
    { lead: 'Calendar', small: 'Shared team calendars', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/calendar.svg' },
    { lead: 'Meetings', small: 'Video and voice confrencing', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/meet.svg' },
    { lead: 'Chat', small: 'Team messaging', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/chat.svg' },
    { lead: 'Docs', small: 'Word processing', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/docs.svg' },
    { lead: 'Slides', small: 'Presentation builder', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/slides.svg' },
    { lead: 'Forms', small: 'Survey builder', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/forms.svg' },
    { lead: 'Sheets', small: 'Spreadsheet builder', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/sheets.svg' },
    { lead: 'Sites', small: 'Website builder', img: 'https://domains.google/static/images/getting-started/email/gsuite-icons/sites.svg' },
]

const pricing = [
    { name: 'Business Starter', price: 6, small: 'user/month', paragraph: 'Custom and secure business email, 30 GB storage and 100 participant video meetings.' },
    { name: 'Business Standard', price: 12, small: 'user/month', paragraph: 'Custom and secure business email, 2 TB of storage and 150 participant video meetings + recording.' },
    { name: 'Business Plus', price: 18, small: 'user/month', paragraph: 'Email, 5 TB of storage, 250 participant video meetings, and enhanced security and management controls.' },
]

const ProfessionalEmail = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen'>
            <HomeSection imgUrl={emailsectoin} imgAlt='hero img' hero>
                <Typography className='text-[28px] md:text-[32px] xl:text-[36px] fonts' variant='h1'>Get a professional email address</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Use built-in email forwarding or get professional email along with other tools from Google Workspace.</Typography>
                <Button onClick={() => navigate('/dashboard')} className='bg-primary'>Get Clikkle Workspace with the domains</Button>
            </HomeSection>
            <Section2 section2Items={section2Items} title='Email forwarding included with your domain' linkText={'More about email forwarding'} linkUrl='/' />
            <HomeSection imgUrl={`https://domains.google/static/images/getting-started/email/credibility.svg`} imgAlt='logo' imageFirst stayCol>
                <Typography className='font-normal text-2xl md:text-3xl xl:text-[36px] fonts w-full text-center' variant='h1'>Gain credibility with email from Google Workspace</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl w-full text-center' variant="lead">an email address at your domain. With Google Workspace, you’ll also get video conferencing, business-grade security, Google's full suite of collaborative apps, and more.</Typography>
                <a className=" text-primary no-underline w-full text-center" href="/dashboard">Upgrade to Google Workspace</a>
            </HomeSection>
            <CenterMainTitle text={'All Clikkle Workspace plans include'} />
            <div className=' border-b w-full grid grid-cols-1 place-content-center pb-24 pt-24 gap-10 px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32'>
                <div className='m-auto flex flex-col max-w-3xl gap-8 py-4 md:grid md:grid-cols-2 justify-center items-center border border-gray-400 rounded-lg'>
                    {plans.map((plan, i) => (
                        <div key={i} className='flex gap-8 items-center justify-start w-full px-12'>
                            <div className=''>
                                <img className='max-h-16 block' src={plan.img} alt='logo' />
                            </div>
                            <div className='grid place-items-start'>
                                <Typography className='text-lg lg:text-xl xl:text-2xl fonts' variant='lead'>{plan.lead}</Typography>
                                <Typography className='text-sm lg:text-base xl:text-lg fonts text-gray-600' variant='small'>{plan.small}</Typography>
                            </div>
                        </div>
                    ))}
                </div>
                <Typography className='text-lg lg:text-xl xl:text-2xl m-auto text-center' variant='lead'>All Google Workspace plans include an expanded set of applications, security, and management tools to help manage teams and businesses.</Typography>
                <Button onClick={() => navigate('/dashboard')} className='bg-primary justify-self-start m-auto'>Get Workspace</Button>
                <Link to='/dashboard' className='text-primary pt-12 m-auto'>
                    Have a domain from another registrar? Try Google Workspace today.
                </Link>
            </div>
            <HomeSection centeredTitle={'Straightforward pricing'}>
                <div className='w-full flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-3'>
                    {pricing.map((price, i) => (
                        <div key={i} className=' bg-white flex flex-col border-b rounded-lg border h-full shadow md:justify-between gap-2 items-center hover:shadow-xl transition-all'>
                            <div className='flex flex-col gap-2 justify-center items-center w-full pt-4 pb-4 fonts'>
                                <Typography as='div' variant='h6' className=' fonts text-center w-full text-black p-2 text-lg md:text-black md:text-xl xl:text-[22px]'>{price.name}</Typography>
                                <Typography as='div' variant='h1' className=' fonts text-center w-full text-black p-2 text-3xl md:text-black'>${price.price}</Typography>
                                <Typography as='div' variant='small' className=' fonts text-center w-full text-green-600 p-2 text-sm md:text-black md:text-base xl:text-xl'>{price.small}</Typography>
                            </div>
                            <div className='border-t p-8'>
                                <Typography className='text-base' variant='paragraph' >{price.paragraph}</Typography>
                            </div>
                        </div>
                    ))}
                </div>
                <Typography className='text-gray-500 mt-4' variant='h6'>After registering your domain, you have the option to activate the Workspace and switch between plans at any time.</Typography>
            </HomeSection>
            <LearnMoreSection />
            <FindYourDomainSection />
            <StayUpToDateSection />
        </div>
    )
}

export default ProfessionalEmail