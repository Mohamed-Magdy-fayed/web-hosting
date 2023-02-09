import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'

const StayUpToDateSection = () => {
    return (
        <div className='bg-gray-100 p-8 flex flex-col w-full gap-4 items-start lg:flex-row lg:items-center lg:justify-between'>
            <div className=' max-w-md'>
                <Typography className='text-left w-full mb-4' variant='lead'>Stay up to date with Google Domains</Typography>
                <Typography className='text-left w-full text-gray-600' variant='small'>Sign up for Google Domains newsletters with product updates, special offers, and insights.</Typography>
            </div>
            <div className='flex gap-2 max-h-min w-full max-w-md'>
                <Input variant="static" placeholder="Enter your email address" />
                <Button className='bg-primary h-full whitespace-nowrap'>Sign Up</Button>
            </div>
        </div>
    )
}

export default StayUpToDateSection