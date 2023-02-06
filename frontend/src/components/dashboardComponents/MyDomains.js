import { Button, Input, Typography } from '@material-tailwind/react'
import React, { useContext, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdWavingHand } from 'react-icons/md'
import { GrServerCluster } from 'react-icons/gr'
import StoreContext from '../../context/store/StoreContext'
import logo from '../../misc/logo.png'
import UserServices from './UserServices'

const services = [
  {
    id: 1,
    serviceIcon: <GrServerCluster size={50} />,
    serviceName: 'Shared Web Hosting',
    serviceDescription: 'Shared Web Hosting',
    serviceMinPrice: 'Shared Web Hosting',
    userServices: [
      {
        id: 1,
        domainType: 'Premium web hosting',
        domainName: 'hostinger-com-demo.xyz',
        siteLink: '',
        expiryDate: '2030 - 12 - 13',
        status: 'Active',
        emailStatus: 'Inactive',
        dailyBackups: 'Inactive',
        createdAt: '2022 - 12 - 13',
        serviceIcon: <GrServerCluster size={50} />,
      },
      {
        id: 2,
        domainType: 'Web hosting',
        domainName: 'hostinger-com-demo.com',
        siteLink: '',
        expiryDate: '2040 - 8 - 28',
        status: 'Active',
        emailStatus: 'Inactive',
        dailyBackups: 'Inactive',
        createdAt: '2021 - 8 - 28',
        serviceIcon: <GrServerCluster size={50} />,
      },
    ]
  },
  {
    id: 2,
    serviceIcon: <GrServerCluster size={50} />,
    serviceName: 'Cloud Hosting',
    serviceDescription: 'Cloud',
    serviceMinPrice: 'Cloud',
    userServices: [
      {
        id: 1,
        domainType: 'Premium Cloud hosting',
        domainName: 'hostinger-com-demo.xyz',
        siteLink: '',
        expiryDate: '2030 - 12 - 13',
        status: 'Active',
        emailStatus: 'Inactive',
        dailyBackups: 'Inactive',
        createdAt: '2022 - 12 - 13',
        serviceIcon: <GrServerCluster size={50} />,
      },
      {
        id: 2,
        domainType: 'Cloud hosting',
        domainName: 'hostinger-com-demo.com',
        siteLink: '',
        expiryDate: '2040 - 8 - 28',
        status: 'Active',
        emailStatus: 'Inactive',
        dailyBackups: 'Inactive',
        createdAt: '2021 - 8 - 28',
        serviceIcon: <GrServerCluster size={50} />,
      },
    ]
  },
]

const MyDomains = () => {
  const { store } = useContext(StoreContext)
  const [domainData, setDomainData] = useState(
    {
      id: 0,
      domainType: '',
      domainName: '',
      expiryDate: ''
    }
  );

  if (!store.auth.user.hasDomains) return (
    <div className=' max-w-5xl mt-12 flex flex-col gap-8 mx-4'>
      <div className='flex md:justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Typography>Hi, {store.auth.user.name}</Typography>
          <MdWavingHand></MdWavingHand>
        </div>
        <div className='flex max-w-fit'>
          <Input min={0} type='text' label="Search" icon={<BiSearch />} />
        </div>
      </div>
      {services.map(service => (
        <UserServices key={service.id} service={service} setDomainData={setDomainData} />
      ))}
    </div>
  )

  return (
    <div className='flex flex-col gap-4 justify-end items-center h-full'>
      <img
        src={logo}
        alt=""
        className=" h-96 "
      />
      <Typography className='m-8'>No domains yet</Typography>
      <Button>Find the perfect one</Button>
      <Button variant='text'>Transfer a domain</Button>
      <Typography className='mb-8'>You're signed in as {store.auth.user.email}. Can't find your domain?</Typography>
    </div>
  )
}

export default MyDomains