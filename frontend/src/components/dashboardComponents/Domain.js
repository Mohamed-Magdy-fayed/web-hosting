import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { BsExclamationCircle, BsFillCloudArrowUpFill, BsGlobe2, BsQuestionCircle } from 'react-icons/bs'
import { FaDatabase, FaIcons } from 'react-icons/fa'
import { MdFileDownload } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Domain = ({ domainData }) => {
  console.log(domainData);
  if (domainData.id === 0) return (
    <div></div>
  )

  return (
    <div className='flex flex-col gap-8'>
      <div className={`after:content-[''] relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-2 after:bg-primary after:bg-opacity-0 hover:after:bg-opacity-20 overflow-hidden border-b border-x rounded border`}>
        <div className='border-b p-4'>
          <div className='flex items-center gap-4'>
            <div className='p-2'>
              <BsGlobe2 />
            </div>
            <div className='flex flex-col'>
              <Typography variant='h6'>{domainData.domainName}</Typography>
              <Typography variant='small'>{domainData.status} | Created at {domainData.createdAt}</Typography>
            </div>
          </div>
        </div>
        <div className='flex justify-between p-4'>
          <div className='flex'>
            <div className='p-2'>
              <FaIcons></FaIcons>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <Typography variant='h6'>{domainData.domainType}</Typography>
              <Typography variant='small'>{domainData.status}</Typography>
              <Link to={'/'} className='text-xs text-primary hover:underline cursor-pointer'>See details</Link>
            </div>
          </div>
          <div className='flex items-start'>
            <div className='p-2'>
              <BsGlobe2></BsGlobe2>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <Typography variant='h6'>{domainData.domainName ? 'Domain' : 'Other'}</Typography>
              <Typography variant='small'>{domainData.siteLink}</Typography>
              <Link to={'/'} className={`text-xs text-primary hover:underline cursor-pointer ${domainData.siteLink.length > 0 ? '' : 'pointer-events-none select-none text-gray-600'}`}>Manage</Link>
            </div>
          </div>
          <div className='flex items-start'>
            <div className='p-2'>
              <BsExclamationCircle></BsExclamationCircle>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <Typography variant='h6'>Email</Typography>
              <Typography variant='small'>{domainData.emailStatus}</Typography>
              <Link to={'/'} className={`text-xs text-primary hover:underline cursor-pointer ${domainData.emailStatus !== 'Inactive' ? '' : 'pointer-events-none select-none text-gray-600'}`}>Manage</Link>
            </div>
          </div>
          <div className='flex items-start'>
            <div className='p-2'>
              <BsFillCloudArrowUpFill></BsFillCloudArrowUpFill>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <Typography variant='h6'>Daily backups</Typography>
              <Typography variant='small'>{domainData.dailyBackups}</Typography>
              <Link to={'/'} className='text-xs text-primary hover:underline cursor-pointer'>Manage</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <div className='row-span-3 flex flex-col gap-4'>
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
        <div className=' col-span-3 flex flex-col lg:flex-row gap-4'>
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

export default Domain