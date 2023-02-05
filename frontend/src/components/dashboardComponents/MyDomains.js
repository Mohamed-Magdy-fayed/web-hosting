import { Accordion, AccordionBody, AccordionHeader, Button, Input, Typography } from '@material-tailwind/react'
import React, { useContext, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdWavingHand } from 'react-icons/md'
import { GrServerCluster } from 'react-icons/gr'
import StoreContext from '../../context/store/StoreContext'
import logo from '../../misc/logo.png'
import Domain from './Domain'

const userDomains = [
  {
    id: 1,
    domainType: 'Premium web hosting',
    domainName: 'hostinger-com-demo.xyz',
    siteLink: '',
    expiryDate: '2030 - 12 - 13',
    status: 'Active',
    emailStatus: 'Inactive',
    dailyBackups: 'Inactive',
    createdAt: '2022 - 12 - 13'
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
    createdAt: '2021 - 8 - 28'
  },
]

const MyDomains = () => {
  const { store } = useContext(StoreContext)
  const [open, setOpen] = useState(0);
  const [domainData, setDomainData] = useState(
    {
      id: 0,
      domainType: '',
      domainName: '',
      expiryDate: ''
    }
  );

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const renderDomainDetails = () => {

  }

  if (!store.auth.user.hasDomains) return (
    <div className=' max-w-5xl mx-auto mt-12 flex flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Typography>Hi, {store.auth.user.name}</Typography>
          <MdWavingHand></MdWavingHand>
        </div>
        <div className='flex max-w-fit'>
          <Input min={0} type='text' label="Search" icon={<BiSearch />} />
        </div>
      </div>
      <div className={`after:content-[''] relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-2 after:bg-primary after:bg-opacity-0 hover:after:bg-opacity-20 overflow-hidden cursor-pointer border-b border-x rounded border ${open !== 1 ? 'rounded-b' : ''}`}>
        <Accordion open={open === 1}>
          <AccordionHeader className='p-2 flex items-center' onClick={() => handleOpen(1)}>
            <div className='flex items-center gap-2'>
              <Typography variant='h6'>Hosting</Typography>
            </div>
            <div className='ml-auto flex items-center justify-around gap-2'>

            </div>
          </AccordionHeader>
          <AccordionBody className='flex flex-col gap-4'>
            {userDomains.map(domain => (
              <div key={domain.id} className='flex justify-between items-center border-b-4 p-4'>
                <div className='flex items-center gap-4'>
                  <div>
                    <GrServerCluster size={50} />
                  </div>
                  <div>
                    <Typography variant='h6'>{domain.domainType}</Typography>
                    <div className='flex items-center gap-4'>
                      <Typography variant='small'>Expires on {domain.expiryDate}</Typography>
                      <div className='block h-6 w-2 mr-2 border-r-2 border-gray-400'></div>
                      <Typography className=' text-primary cursor-pointer hover:text-accent' variant='paragraph'>{domain.domainName}</Typography>
                    </div>
                  </div>
                </div>
                <div className='px-4'>
                  <Button onClick={() => setDomainData(domain)}>Manage</Button>
                </div>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      </div>
      <Domain domainData={domainData} />
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