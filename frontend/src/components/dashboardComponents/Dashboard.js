import React, { useContext, useState } from 'react'
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
import { Button, Dialog, DialogBody, DialogHeader } from '@material-tailwind/react'

const dashboardMenuItems = [
  { url: '/dashboard/getnewdomain', itemName: 'Get a new domain', icon: FaSearch },
  { url: '/dashboard', itemName: 'My domains', icon: MdMenu },
  { url: '/dashboard/transfer', itemName: 'Transfer', icon: BiTransfer },
  { url: '/dashboard/billing', itemName: 'Billing', icon: FaCreditCard },
  { url: '/dashboard/account', itemName: 'Account', icon: MdAccountCircle },
]

const otherButtons = [
  { itemName: 'Send feedback', icon: MdFeedback },
  { itemName: 'Help and support', icon: MdContactSupport },
]

const Dashboard = () => {
  const location = useLocation()
  const [open, setOpen] = useState({ isOpened: false, title: '' })

  return (
    <div className='flex-grow grid grid-cols-[15rem_1fr] relative'>
      <div className=' py-4 pr-4 sticky top-0'>
        {dashboardMenuItems.map(item => (
          <Link key={item.url} to={item.url} className={`pl-4 text-gray-700 flex gap-2 items-center tracking-wide font-[500_0.875rem/1.25rem_"Google_Sans",Roboto,Arial,sans-serif;] rounded-r-3xl p-2 hover:bg-gray-100 ${location.pathname === item.url ? '!bg-primary !bg-opacity-20' : ''}`}>
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
      </div>
      <div className=''>
        <Routes>
          <Route index element={<MyDomains />} />
          <Route path="getnewdomain" element={<GetNewDomain />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="billing" element={<Billing />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </div>
      <Dialog open={open.isOpened} handler={() => setOpen({ isOpened: false, title: '' })}>
        <DialogHeader>{open.title}</DialogHeader>
        <DialogBody>
          <div className='flex justify-between'>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpen({ isOpened: false, title: '' })}
              className="mr-1"
            >
              <span>Cancel</span>
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