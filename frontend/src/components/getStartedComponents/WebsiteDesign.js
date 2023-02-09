import { Button, Input, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeSection from '../shared/HomeSection'
import codingsite from '../../misc/codingsite.jpeg'
import Section2 from '../shared/Section2'
import LearnMoreSection from '../shared/LearnMoreSection'
import FindYourDomainSection from '../shared/FindYourDomainSection'
import StayUpToDateSection from '../shared/StayUpToDateSection'

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
            <HomeSection imgUrl={codingsite} imgAlt='hero img' hero>
                <Typography className='font-normal text-3xl md:text-5xl xl:text-[64px] fonts' variant='h1'>Build your site, no coding required</Typography>
                <Typography className='text-lg lg:text-xl xl:text-2xl' variant="lead">Free resources from Google and professional tools to design and host your website.</Typography>
            </HomeSection>
            <Section2 section2Items={section2Items} title='How to pick a website builder' linkText={'More about how to choose a website builder'} />
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
                        <div key={i} className='bg-white flex flex-col border-b h-full rounded-lg border shadow md:justify-between gap-2 items-center hover:shadow-xl transition-all'>
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
            <LearnMoreSection />
            <FindYourDomainSection />
            <StayUpToDateSection />
        </div >
    )
}

export default WebsiteDesign