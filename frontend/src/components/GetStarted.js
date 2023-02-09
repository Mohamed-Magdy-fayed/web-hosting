import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import ClikkleSites from './getStartedComponents/ClikkleSites'
import DomainSearch from './getStartedComponents/DomainSearch'
import OnlineAds from './getStartedComponents/OnlineAds'
import ProfessionalEmail from './getStartedComponents/ProfessionalEmail'
import WebsiteDesign from './getStartedComponents/WebsiteDesign'

const navItems = [
  {
    itemName: 'Domain Search',
    url: '/getstarted/domainsearch',
    hasChildren: false,
  },
  {
    itemName: 'Professional email',
    url: '/getstarted/professionalemail',
    hasChildren: false,
  },
  {
    itemName: 'Website design',
    url: '/getstarted/websitedesign',
    hasChildren: false,
  },
  {
    itemName: 'Clikkle sites',
    url: '/getstarted/clikklesites',
    hasChildren: false,
  },
  {
    itemName: 'Online ads',
    url: '/getstarted/onlineads',
    hasChildren: false,
  },
]

const GetStarted = () => {
  const location = useLocation()

  return (
    <div className='relative'>
      <div className='border-b flex flex-wrap gap-4 items-center justify-center sticky top-12 backdrop-blur-3xl z-[1000]'>
        {navItems.map(item => (
          <Link key={item.itemName} className={`h-[63px] px-2 after:content-[""] after:absolute relative after:bottom-0 after:right-[15%] after:h-1 after:w-[70%] after:rounded-t-md text-black ${location.pathname === item.url ? 'after:bg-primary' : 'border-transparent'} grid items-center h-full`} to={item.url}>
            <Typography className={`${location.pathname === item.url ? 'text-gray-900' : 'text-gray-600'}`} variant='small'>{item.itemName}</Typography>
          </Link>
        ))}
      </div>
      <Routes>
        <Route path='/domainsearch' element={<DomainSearch />} />
        <Route path='/professionalemail' element={<ProfessionalEmail />} />
        <Route path='/websitedesign' element={<WebsiteDesign />} />
        <Route path='/clikklesites' element={<ClikkleSites />} />
        <Route path='/onlineads' element={<OnlineAds />} />
      </Routes>
    </div>
  )
}

export default GetStarted