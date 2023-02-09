import { Button, Input, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CenterMainTitle from '../shared/CenterMainTitle'
import FindYourDomainSection from '../shared/FindYourDomainSection'
import HomeSection from '../shared/HomeSection'
import Section2 from '../shared/Section2'
import StayUpToDateSection from '../shared/StayUpToDateSection'

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
                <Typography className='font-normal text-3xl md:text-5xl xl:text-[64px] fonts' variant='h1'>Build it with Google Sites</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Create a website with your domain for $0. No coding skills necessary.</Typography>
            </HomeSection>
            <HomeSection darkerBG centeredTitle={`Create a custom website`}>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant='lead'>Simply add text and drag and drop in your own photos, videos, and more. Your website will automatically work on both desktop and mobile — all with zero coding.</Typography>
                <Tabs value="html" className='w-full grid place-items-center mx-auto'>
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
            <CenterMainTitle text={'A simple site with powerful tools'} />
            <HomeSection imgUrl={'https://domains.google/static/images/getting-started/website/google-sites/tools1.jpg'} imageFirst imgAlt='logo'>
                <Typography className='font-normal text-3xl md:text-5xl xl:text-[64px] fonts' variant='h1'>Publish with your domain</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Domains and Sites work together, so you can publish your website without technical know-how. Simply register a domain with Google Domains and publish your site to the web in just a few clicks.</Typography>
            </HomeSection>
            <HomeSection imgUrl={'https://domains.google/static/images/getting-started/website/google-sites/tools2.jpg'} imgAlt='logo'>
                <Typography className='font-normal text-3xl md:text-5xl xl:text-[64px] fonts' variant='h1'>Showcase your content</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Easily embed a doc with your restaurant’s menu, your store’s physical location on Google Maps, or a YouTube video about your business. No coding skills required.</Typography>
            </HomeSection>
            <HomeSection imageFirst imgUrl={'https://domains.google/static/images/getting-started/website/google-sites/tools3.jpg'} imgAlt='logo'>
                <Typography className='font-normal text-3xl md:text-5xl xl:text-[64px] fonts' variant='h1'>Collaborate and co-edit in real time</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Sites makes it easy to collaborate with your team. Streamline your website updates with the same real-time collaboration and version history features you’re familiar with from Docs.</Typography>
            </HomeSection>
            <HomeSection imgUrl={'https://domains.google/static/images/getting-started/website/google-sites/tools4.jpg'} imgAlt='logo'>
                <Typography className='font-normal text-3xl md:text-5xl xl:text-[64px] fonts' variant='h1'>Measure traffic and performance</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Once your website is live, you can measure and track its performance while gaining valuable insights using Analytics.</Typography>
            </HomeSection>
            <Section2 section2Items={section2Items} title='Google Sites includes' />
            <FindYourDomainSection />
            <StayUpToDateSection />
        </div >
    )
}

export default ClikkleSites