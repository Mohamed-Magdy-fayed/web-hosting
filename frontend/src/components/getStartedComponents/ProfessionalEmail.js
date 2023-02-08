import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import HomeSection from '../shared/HomeSection'
import logo from '../../misc/logo.png'
import { Link, useNavigate } from 'react-router-dom'

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

const ProfessionalEmail = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen'>
            <HomeSection imgUrl={logo} imgAlt='hero img' hero>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Get a professional email address</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Use built-in email forwarding or get professional email along with other tools from Google Workspace.</Typography>
                <Button className='bg-primary'>Get Clikkle Workspace with the domains</Button>
            </HomeSection>
            <HomeSection darkerBG centeredTitle={`Email forwarding included with your domain`}>
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
                    More about email forwarding
                </Link>
            </HomeSection>
            <HomeSection imgUrl={`https://domains.google/static/images/getting-started/email/credibility.svg`} imgAlt='logo' imageFirst>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Gain credibility with email from Google Workspace</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">an email address at your domain. With Google Workspace, you’ll also get video conferencing, business-grade security, Google's full suite of collaborative apps, and more.</Typography>
                <a className=" text-primary no-underline" href="https://domains.google.com/m/registrar/transfer?_ga=2.259577162.1111017506.1675291279-1738315705.1675291279">Upgrade to Google Workspace</a>
            </HomeSection>
            <Typography className='w-full mt-12 text-2xl md:text-3xl xl:text-4xl text-center' variant='h1'>
                All Clikkle Workspace plans include
            </Typography>
            <div className='w-full grid grid-cols-1 place-content-center pb-24 pt-24 gap-10 px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32'>
                <div className='flex flex-col gap-8 py-4 md:grid md:grid-cols-2 justify-center items-center border border-gray-400 rounded-lg'>
                    {plans.map((plan, i) => (
                        <div key={i} className='flex gap-8 items-center justify-start w-full px-12'>
                            <div className=''>
                                <img className='max-h-16 block' src={plan.img} alt='logo' />
                            </div>
                            <div className='grid place-items-start'>
                                <Typography className='text-lg lg:text-xl xl:text-2xl' variant='lead'>{plan.lead}</Typography>
                                <Typography className='text-sm lg:text-base xl:text-lg text-gray-600' variant='small'>{plan.small}</Typography>
                            </div>
                        </div>
                    ))}
                </div>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant='lead'>All Google Workspace plans include an expanded set of applications, security, and management tools to help manage teams and businesses.</Typography>
                <Button className='bg-primary justify-self-start'>Get Workspace</Button>
                <Link to={`/`} className='text-primary pt-12'>
                    Have a domain from another registrar? Try Google Workspace today.
                </Link>
            </div>
            <HomeSection centeredTitle={'Straightforward pricing'}>
                <div className='w-full flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-3'>
                    {pricing.map((price, i) => (
                        <div key={i} className='bg-white flex flex-col border-b rounded-lg border h-full shadow md:justify-between gap-2 items-center hover:shadow-xl transition-all'>
                            <div className='h-[60%] flex flex-col gap-2 justify-center items-center w-full pt-4 pb-4'>
                                <Typography as='div' variant='h6' className=' text-center w-full text-black p-2 text-base md:text-black md:text-xl xl:text-2xl'>{price.name}</Typography>
                                <Typography as='div' variant='h1' className=' text-center w-full text-black p-2 text-5xl md:text-black md:text-6xl xl:text-7xl'>${price.price}</Typography>
                                <Typography as='div' variant='small' className=' text-center w-full text-green-600 p-2 text-sm md:text-black md:text-base xl:text-xl'>{price.small}</Typography>
                            </div>
                            <div className=' h-[40%] border-t px-2 py-4'>
                                <Typography className='text-lg lg:text-xl xl:text-2xl' variant='paragraph' >{price.paragraph}</Typography>
                            </div>
                        </div>
                    ))}
                </div>
                <Typography className='text-gray-500 mt-4' variant='h6'>After registering your domain, you have the option to activate the Workspace and switch between plans at any time.</Typography>
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

export default ProfessionalEmail