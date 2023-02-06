import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { BsExclamationCircle, BsFillCloudArrowUpFill, BsGlobe2, BsQuestionCircle } from 'react-icons/bs'
import { FaDatabase, FaIcons } from 'react-icons/fa'
import { GrServerCluster } from 'react-icons/gr'
import { MdFileDownload } from 'react-icons/md'
import { Link, useLocation, useParams } from 'react-router-dom'

const services = [
  {
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

const Service = () => {
  // get the service
  const params = useParams()
  const serviceId = params.id
  const serviceData = services[0].userServices.filter(service => service.id !== serviceId)[0]

  return (
    <div className='flex flex-col gap-8 p-4 md:p-8 xl:p-16'>
      <div className={`after:content-[''] relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-2 after:bg-primary after:bg-opacity-0 hover:after:bg-opacity-20 overflow-hidden border-b border-x rounded border`}>
        <div className='border-b p-4'>
          <div className='flex items-center gap-4'>
            <div className='p-2'>
              <BsGlobe2 />
            </div>
            <div className='flex flex-col'>
              <Typography variant='h6'>{serviceData.domainName}</Typography>
              <Typography variant='small'>{serviceData.status} | Created at {serviceData.createdAt}</Typography>
            </div>
          </div>
        </div>
        <div className='grid gap-8 p-2 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex w-fit'>
            <div className='p-2'>
              <FaIcons></FaIcons>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <Typography variant='h6'>{serviceData.domainType}</Typography>
              <Typography variant='small'>{serviceData.status}</Typography>
              <Link to={'/'} className='text-xs text-primary hover:underline cursor-pointer'>See details</Link>
            </div>
          </div>
          <div className='flex w-fit'>
            <div className='p-2'>
              <BsGlobe2></BsGlobe2>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <Typography variant='h6'>{serviceData.domainName ? 'Domain' : 'Other'}</Typography>
              <Typography variant='small'>{serviceData.siteLink}</Typography>
              <Link to={'/'} className={`text-xs text-primary hover:underline cursor-pointer ${serviceData.siteLink.length > 0 ? '' : 'pointer-events-none select-none text-gray-600'}`}>Manage</Link>
            </div>
          </div>
          <div className='flex w-fit'>
            <div className='p-2'>
              <BsExclamationCircle></BsExclamationCircle>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <Typography variant='h6'>Email</Typography>
              <Typography variant='small'>{serviceData.emailStatus}</Typography>
              <Link to={'/'} className={`text-xs text-primary hover:underline cursor-pointer ${serviceData.emailStatus !== 'Inactive' ? '' : 'pointer-events-none select-none text-gray-600'}`}>Manage</Link>
            </div>
          </div>
          <div className='flex w-fit'>
            <div className='p-2'>
              <BsFillCloudArrowUpFill></BsFillCloudArrowUpFill>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <Typography variant='h6'>Daily backups</Typography>
              <Typography variant='small'>{serviceData.dailyBackups}</Typography>
              <Link to={'/'} className='text-xs text-primary hover:underline cursor-pointer'>Manage</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4'>
        <div className='lg:row-span-3 md:col-span-1 col-span-3 flex flex-col gap-4'>
          <div>
            <div className='border rounded-lg border-primary p-2'>
              <div>
                <BsQuestionCircle></BsQuestionCircle>
                <Typography variant='small'>Loading time</Typography>
              </div>
              <div>
                <Link to={'/'} className='text-xs text-primary hover:underline cursor-pointer'>Run page speed test</Link>
              </div>
            </div>
          </div>
          <div className='border rounded-lg border-primary p-2'>
            <Typography variant='small'>No data</Typography>
            <Link to={'/'} className='text-xs text-primary hover:underline cursor-pointer'>See malware scanner</Link>
          </div>
        </div>
        <div className='lg:col-span-3 col-span-3 md:col-span-1 flex flex-col lg:flex-row gap-4'>
          <div className='flex-grow'>
            <div className='border rounded-lg border-primary p-2 h-full flex items-center gap-2'>
              <AiFillFolder size={30}></AiFillFolder>
              <Typography variant='h6'>File manager</Typography>
            </div>
          </div>
          <div className='flex-grow'>
            <div className='border rounded-lg border-primary p-2 h-full flex items-center gap-2'>
              <FaDatabase size={30}></FaDatabase>
              <Typography variant='h6'>Databases</Typography>
            </div>
          </div>
          <div className='flex-grow'>
            <div className='border rounded-lg border-primary p-2 h-full flex items-center gap-2'>
              <MdFileDownload size={30}></MdFileDownload>
              <Typography variant='h6'>Installer</Typography>
            </div>
          </div>
        </div>
        <div className='row-span-2 col-span-3 grid place-items-center gap-2 p-2 border rounded-lg border-primary'>
          <img className='m-12' src='https://hpanel-main.hostinger.com/img/loader-check.svg' alt='all good' />
          <Typography variant='h5'>Your website is running smoothly</Typography>
          <Typography variant='small'>No issues were found</Typography>
        </div>
      </div>
    </div>
  )
}

export default Service