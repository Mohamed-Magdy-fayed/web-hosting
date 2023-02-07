import { Button, Input, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeSection from '../shared/HomeSection'
import logo from '../../misc/logo.png'

const section2Items = [
    {
        imgSrc: 'https://domains.google/static/images/getting-started/website/google-sites/features1.png',
        lead: 'Create up to 100 aliases',
        paragraph: 'Automatically optimized for desktop, tablet, and mobile',

    },
    {
        imgSrc: 'https://domains.google/static/images/getting-started/website/google-sites/features2.png',
        lead: 'Use with your existing email',
        paragraph: 'No need to find or pay for third-party hosting',

    },
    {
        imgSrc: 'https://domains.google/static/images/getting-started/website/google-sites/features3.png',
        lead: 'Custom send from any alias',
        paragraph: 'Express your style with our pre-designed font and color palettes',
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

const ClikkleSites = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen'>
            <HomeSection imgUrl={'https://domains.google/static/images/getting-started/website/google-sites/hero.jpg'} imgAlt='hero img' hero>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Build it with Google Sites</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Create a website with your domain for $0. No coding skills necessary.</Typography>
            </HomeSection>
            <HomeSection darkerBG centeredTitle={`Create a custom website`}>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant='lead'>Simply add text and drag and drop in your own photos, videos, and more. Your website will automatically work on both desktop and mobile — all with zero coding.</Typography>
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
                <Button className='bg-primary'>Get started</Button>
            </HomeSection>
            <Typography className='w-full mt-12 text-2xl md:text-3xl xl:text-4xl text-center' variant='h1'>
                A simple site with powerful tools
            </Typography>
            <HomeSection imgUrl={'https://domains.google/static/images/getting-started/website/google-sites/tools1.jpg'} imgAlt='logo'>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Publish with your domain</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Domains and Sites work together, so you can publish your website without technical know-how. Simply register a domain with Google Domains and publish your site to the web in just a few clicks.</Typography>
            </HomeSection>
            <HomeSection imgUrl={'https://domains.google/static/images/getting-started/website/google-sites/tools2.jpg'} imgAlt='logo'>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Showcase your content</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Easily embed a doc with your restaurant’s menu, your store’s physical location on Google Maps, or a YouTube video about your business. No coding skills required.</Typography>
            </HomeSection>
            <HomeSection imageFirst imgUrl={'https://domains.google/static/images/getting-started/website/google-sites/tools3.jpg'} imgAlt='logo'>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Collaborate and co-edit in real time</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Sites makes it easy to collaborate with your team. Streamline your website updates with the same real-time collaboration and version history features you’re familiar with from Docs.</Typography>
            </HomeSection>
            <HomeSection imgUrl={'https://domains.google/static/images/getting-started/website/google-sites/tools4.jpg'} imgAlt='logo'>
                <Typography className='text-3xl md:text-4xl xl:text-5xl' variant='h1'>Measure traffic and performance</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Once your website is live, you can measure and track its performance while gaining valuable insights using Analytics.</Typography>
            </HomeSection>
            <HomeSection darkerBG centeredTitle={`Google Sites includes`}>
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

export default ClikkleSites