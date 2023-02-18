import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const footerGroups = [
    {
        groupName: 'Get started',
        groupLinks: [
            {
                url: '/getstarted/domainsearch',
                linkText: 'Domain search',
            },
            {
                url: '/getstarted/professionalemail',
                linkText: 'Professional email',
            },
            {
                url: '/getstarted/websitedesign',
                linkText: 'Website design',
            },
            {
                url: '/getstarted/onlineads',
                linkText: 'Online ads',
            },
        ],
    },
    {
        groupName: 'Related products',
        groupLinks: [
            {
                url: '/',
                linkText: 'Business Solutions',
            },
            {
                url: '/',
                linkText: 'Clikkle Ads',
            },
            {
                url: '/',
                linkText: 'Clikkle Business Profile',
            },
            {
                url: '/',
                linkText: 'Clikkle Sites',
            },
            {
                url: '/',
                linkText: 'Clikkle Workspace',
            },
            {
                url: '/',
                linkText: 'More business products',
            },
        ],
    },
    {
        groupName: 'Support',
        groupLinks: [
            {
                url: '/support',
                linkText: 'Help center',
            },
            {
                url: '/support',
                linkText: 'FAQ',
            },
            {
                url: '/support',
                linkText: 'Contact us',
            },
        ],
    },
    {
        groupName: 'Learn',
        groupLinks: [
            {
                url: '/learn',
                linkText: 'Features',
            },
            {
                url: '/learn',
                linkText: 'Domain basics',
            },
            {
                url: '/learn',
                linkText: 'Choosing a name',
            },
            {
                url: '/learn',
                linkText: 'Buying & transferring',
            },
            {
                url: '/learn',
                linkText: 'Hosting & website',
            },
        ],
    },
    {
        groupName: 'Hosting',
        groupLinks: [
            {
                url: '/webhosting',
                linkText: 'Web hosting',
            },
            {
                url: '/pro',
                linkText: 'Profissional Web hosting',
            },
            {
                url: '/vps',
                linkText: 'VPS hosting',
            },
            {
                url: '/email',
                linkText: 'Email hosting',
            },
            {
                url: '/cms',
                linkText: 'CMS hosting',
            },
            {
                url: '/free',
                linkText: 'Free website hosting',
            },
            {
                url: '/builder',
                linkText: 'Website builder',
            },
            {
                url: '/buy',
                linkText: 'Buy hosting',
            },
        ],
    },
]

const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className=' bg-[#3c4043] py-8 px-8 text-[#dadce0] text-sm flex flex-col gap-4 w-full'>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
                {footerGroups.map(group => (
                    <div key={group.groupName} className='flex flex-col items-start text-left'>
                        <Typography className='mb-2' variant='h6'>{group.groupName}</Typography>
                        {group.groupLinks.map((link, i) => (
                            <Link key={i} to={link.url} className='cursor-pointer hover:underline' variant='paragraph'>{link.linkText}</Link>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <div className='border-t-2 border-t-white pt-2'>
                    <div className='flex items-center justify-start gap-4'>
                        <span>Clikkle</span>
                        <span>About</span>
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                    <div className='pt-2'>
                        English US
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer