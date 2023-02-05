import { Typography } from '@material-tailwind/react'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import logo from '../../misc/logo.png'

const Billing = () => {

  return (
    <div className='flex flex-col justify-end items-center h-full'>
      <img
        src={logo}
        alt=""
        className=" h-96 "
      />
      <Typography className='m-8'>No billing activity yet</Typography>
      <div className='mb-8 gap-4 flex min-w-fit items-center justify-between'>
        <Typography className=''>Manage your payments profile and payment methods in the payments center</Typography>
        <Link to='/' className='flex items-center gap-2 text-primary'>
          <BiLinkExternal></BiLinkExternal>
          <Typography variant='small'>Manage</Typography>
        </Link>
      </div>
    </div>
  )
}

export default Billing