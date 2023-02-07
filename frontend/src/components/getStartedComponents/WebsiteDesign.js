import { Button, Input, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeSection from '../shared/HomeSection'
import logo from '../../misc/logo.png'

const section2Items = [
    {
        imgSrc: 'https://domains.google/static/images/exports/08-24-2020/website-design-icon-1.svg',
        lead: 'Time and budget',
        paragraph: 'Many web builders offer no charge plans or trials depending on the scale of your site. Consider using templates to save time.',

    },
    {
        imgSrc: 'https://domains.google/static/images/exports/08-24-2020/website-design-icon-2.svg',
        lead: 'Business needs',
        paragraph: 'Some builders are best suited for robust online stores, while others are fit to create a simple portfolio or blog.',

    },
    {
        imgSrc: 'https://domains.google/static/images/exports/08-24-2020/website-design-icon-3.svg',
        lead: 'Technical ability',
        paragraph: 'Choose a builder you will be comfortable using. Some are designed specifically for novice users, while others require more experience.',
    },
]

const tools = [
    {
        name: 'Wix',
        img: 'https://domains.google/static/images/getting-started/website/partners/wix.png',
        link: 'Get started',
        paragraph: 'With 500+ customizable templates, Wix is the perfect place to create a professional website, get advanced design features, business solutions, industry-leading SEO and more.'
    },
    {
        name: 'Squarespace',
        img: 'https://domains.google/static/images/getting-started/website/partners/bluehost-wordpress.png',
        link: 'Get started',
        paragraph: 'Build a website, sell online and build your brand with Squarespace. Just like millions of other dreamers, makers and doers.'
    },
    {
        name: 'Bluehost + Wordpress',
        img: 'https://domains.google/static/images/getting-started/website/partners/shopify.png',
        link: 'Get started',
        paragraph: 'Trusted by over 2 million websites globally, Bluehost allows you to harness the creative power of Wordpress and turn your Google Domain into a beautiful, functional website.'
    },
    {
        name: 'Shopify',
        img: 'https://domains.google/static/images/getting-started/website/partners/wix.png',
        link: 'Get started',
        paragraph: 'Set-up, design and manage your online store with Shopify, to make selling on desktop, mobile, social media, marketplaces, retail locations and pop-up stores easy.'
    },
    {
        name: 'Weebly',
        img: 'https://domains.google/static/images/getting-started/website/partners/weebly.svg',
        link: 'Get started',
        paragraph: 'With customizable designs, domains and eCommerce tools that are perfect for any online venture, Weebly’s powerful site builder makes it easy to create a professional website or online store.'
    },
    {
        name: 'Blogger',
        img: 'https://domains.google/static/images/getting-started/website/partners/weebly.svg',
        link: 'Get started',
        paragraph: 'Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates — all with flexible layouts and hundreds of background images — or design something new.'
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

const data = [
    {
        label: "1",
        value: "1",
        img: `https://domains.google/static/images/getting-started/website/google-sites/templates3.jpg`,
    },
    {
        label: "2",
        value: "2",
        img: `https://domains.google/static/images/getting-started/website/google-sites/templates1.jpg`,
    },
    {
        label: "3",
        value: "3",
        img: `https://domains.google/static/images/getting-started/website/google-sites/templates2.jpg`,
    },
    {
        label: "4",
        value: "4",
        img: `https://domains.google/static/images/getting-started/website/google-sites/templates4.jpg`,
    },

];

const WebsiteDesign = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen'>
            <HomeSection imgUrl={logo} imgAlt='hero img' hero>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Build your site, no coding required</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Free resources from Google and professional tools to design and host your website.</Typography>
                <Button>View design tools</Button>
            </HomeSection>
            <HomeSection darkerBG centeredTitle={`How to pick a website builder`}>
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
                    More about how to choose a website builder
                </Link>
            </HomeSection>
            <HomeSection centeredTitle={'Start for free with Google Sites'}>
                <Tabs value="html" className='w-full grid place-items-center'>
                    <TabsBody>
                        {data.map(({ value, img }) => (
                            <TabPanel key={value} value={value}>
                                <img src={img} alt={value} />
                            </TabPanel>
                        ))}
                    </TabsBody>
                    <TabsHeader className='bg-primary bg-opacity-25 w-fit'>
                        {data.map(({ value }) => (
                            <Tab className='bg-primary bg-opacity-25 rounded-full w-8' key={value} value={value}></Tab>
                        ))}
                    </TabsHeader>
                </Tabs>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant='lead'>Simply add text and drag and drop in your own photos, videos, and more. Your website will automatically work on both desktop and mobile — all with zero coding.</Typography>
                <Button className='bg-primary'>Get started</Button>
            </HomeSection>
            <HomeSection darkerBG centeredTitle={'Other tools for a pro look'}>
                <div className='w-full flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-3'>
                    {tools.map((tool, i) => (
                        <div key={i} className='bg-white flex flex-col border-b rounded-lg border shadow md:justify-between gap-2 items-center hover:shadow-xl transition-all'>
                            <div className='h-40 flex flex-col gap-2 justify-center items-center w-full pt-4 pb-4'>
                                <img className='block h-12' src={tool.img} alt={tool.name} />
                            </div>
                            <div className='border-t px-8 py-4 text-left'>
                                <Typography className=' text-primary text-lg lg:text-xl xl:text-2xl' variant='lead' >{tool.name}</Typography>
                                <Typography className='text-lg lg:text-xl xl:text-2xl my-8' variant='paragraph' >{tool.paragraph}</Typography>
                                <Link to={`/`} className='text-primary pt-12'>{tool.link}</Link>
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
        </div >
    )
}

export default WebsiteDesign