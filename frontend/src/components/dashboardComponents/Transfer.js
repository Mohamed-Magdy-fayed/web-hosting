import { Button, Input, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Transfer = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='max-w-3xl m-auto pt-12 px-4 md:px-8 xl:px-16 2xl:px-24'>
      <Input className='!p-4' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} label="Enter the domain name you want to transfer" icon={<FaSearch />} />
      <div className='flex items-center py-4'>
        <Typography variant='small'>Transferring multiple domains?</Typography>
        <Button className='text-primary ml-4' variant='text'>Start process</Button>
      </div>
      <div className='p-4'>
        <Typography variant='paragraph'>Why transfer to Google Domains?</Typography>
        <div className='p-4'>
          <div className='mt-4'>
            <Typography variant='h6' className='mb-2'>Easy domain management</Typography>
            <Typography variant='small'>We provide powerful tools and seamless integration points to ensure transparency and painless management of your domains</Typography>
          </div>
          <div className='mt-4'>
            <Typography variant='h6' className='mb-2'>Privacy protection</Typography>
            <Typography variant='small'>You choose how much personal contact information is shared. Included at no additional cost for most domains. <Link className='text-primary underline' to='/'>Learn more about privacy protection</Link></Typography>
          </div>
          <div className='mt-4'>
            <Typography variant='h6' className='mb-2'>Access to 24/7 support</Typography>
          </div>
        </div>
        <Typography variant='small'><Link className='text-primary underline' to='/'>Learn more about transferring policy</Link></Typography>
      </div>
    </div>
  )
}

export default Transfer