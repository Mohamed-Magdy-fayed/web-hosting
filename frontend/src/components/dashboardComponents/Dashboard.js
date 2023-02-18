import React, { useContext, useEffect, useState } from 'react'
import { FaCreditCard, FaSearch } from 'react-icons/fa'
import { MdAccountCircle, MdContactSupport, MdFeedback, MdMenu } from 'react-icons/md'
import { BiTransfer } from 'react-icons/bi'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import StoreContext from '../../context/store/StoreContext'
import GetNewDomain from './GetNewDomain'
import MyDomains from './MyDomains'
import Transfer from './Transfer'
import Billing from './Billing'
import Account from './Account'
import { Button, Dialog, DialogBody, DialogHeader, Navbar } from '@material-tailwind/react'
import Service from './Service'
import WebHosting from '../HostingComponents/WebHosting';
import ProHosting from '../HostingComponents/ProHosting';
import VPS from '../HostingComponents/VPS';
import EmailHosting from '../HostingComponents/EmailHosting';
import CMS from '../HostingComponents/CMS';
import FreeHosting from '../HostingComponents/FreeHosting';
import WebsiteBuilder from '../HostingComponents/WebsiteBuilder';
import BuyHosting from '../HostingComponents/BuyHosting';

const dashboardMenuItems = [
  { url: '/dashboard/getnewdomain', itemName: 'Get a new domain', icon: FaSearch },
  { url: '/dashboard', itemName: 'My services', icon: MdMenu },
  { url: '/dashboard/transfer', itemName: 'Transfer', icon: BiTransfer },
  { url: '/dashboard/billing', itemName: 'Billing', icon: FaCreditCard },
  { url: '/dashboard/account', itemName: 'Account', icon: MdAccountCircle },
  { url: '/dashboard/webhosting', itemName: 'Web hosting', icon: MdMenu },
  { url: '/dashboard/pro', itemName: 'Professional hosting', icon: MdMenu },
  { url: '/dashboard/vps', itemName: 'VPS hosting', icon: MdMenu },
  { url: '/dashboard/email', itemName: 'Email hosting', icon: MdMenu },
  { url: '/dashboard/cms', itemName: 'CMS hosting', icon: MdMenu },
  { url: '/dashboard/free', itemName: 'Free Hosting', icon: MdMenu },
  { url: '/dashboard/builder', itemName: 'Website builder', icon: MdMenu },
  { url: '/dashboard/buy', itemName: 'Buy Hosting', icon: MdMenu },
]

const otherButtons = [
  { itemName: 'Send feedback', icon: MdFeedback },
  { itemName: 'Help and support', icon: MdContactSupport },
]

const Dashboard = () => {
  const location = useLocation()
  const [open, setOpen] = useState({ isOpened: false, title: '' })
  const { store, toggleDashboardMenu, closeDashboardMenu } = useContext(StoreContext)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth <= 960 && closeDashboardMenu()
    );
  });

  return (
    <div className='flex-grow flex flex-row relative'>
      <Navbar className={` h-full rounded-none min-w-max z-50 pl-0 pr-4 flex flex-col w-max transition-all ${store.dashboardMenu.isOpened ? 'translate-x-[0] absolute lg:static' : 'translate-x-[-100%] absolute'}`}>
        {dashboardMenuItems.map(item => (
          <Link onClick={() => window.innerWidth <= 960 && toggleDashboardMenu} key={item.url} to={item.url} className={`pl-4 text-gray-700 flex gap-2 items-center tracking-wide font-[500_0.875rem/1.25rem_"Google_Sans",Roboto,Arial,sans-serif;] rounded-r-3xl p-2 hover:bg-gray-100 ${location.pathname === item.url ? '!bg-primary !bg-opacity-20' : ''}`}>
            <item.icon></item.icon>
            <span>{item.itemName}</span>
          </Link>
        ))}
        <div className='w-full h-4 p-4 border-b mb-6'></div>
        {otherButtons.map(item => (
          <button onClick={() => setOpen({ isOpened: true, title: item.itemName })} key={item.itemName} className={`w-full pl-4 text-gray-700 flex gap-2 items-center tracking-wide font-[500_0.875rem/1.25rem_"Google_Sans",Roboto,Arial,sans-serif;] rounded-r-3xl p-2 hover:bg-gray-100`}>
            <item.icon></item.icon>
            <span>{item.itemName}</span>
          </button>
        ))}
      </Navbar>
      <div className={`flex-grow`}>
        <Routes>
          <Route index element={<MyDomains />} />
          <Route path="getnewdomain" element={<GetNewDomain />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="billing" element={<Billing />} />
          <Route path="account" element={<Account />} />
          <Route path="service/:id" element={<Service />} />
          <Route path="webhosting" element={<WebHosting />} />
          <Route path="pro" element={<ProHosting />} />
          <Route path="vps" element={<VPS />} />
          <Route path="email" element={<EmailHosting />} />
          <Route path="cms" element={<CMS />} />
          <Route path="free" element={<FreeHosting />} />
          <Route path="builder" element={<WebsiteBuilder />} />
          <Route path="buy" element={<BuyHosting />} />
        </Routes>
      </div>
      <Dialog className='min-w-fit' open={open.isOpened} handler={() => setOpen({ isOpened: false, title: '' })}>
        <DialogHeader>{open.title}</DialogHeader>
        <DialogBody className=' max-w-sm'>
          <div>
            Content
          </div>
          <div className='flex justify-between'>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpen({ isOpened: false, title: '' })}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button variant="gradient" color="green" onClick={() => setOpen({ isOpened: false, title: '' })}>
              <span>Confirm</span>
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  )
}

export default Dashboard