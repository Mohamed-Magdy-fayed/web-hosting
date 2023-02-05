import { Button, Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import StoreContext from '../../context/store/StoreContext'
import logo from '../../misc/logo.png'

const MyDomains = () => {
  const { store } = useContext(StoreContext)

  console.log(store.auth);
  return (
    <div className='flex flex-col justify-end items-center h-full'>
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