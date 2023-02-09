import { Button } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SigninButton = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-around items-center'>
            <Button className='!min-w-fit !py-2 !px-8 text-primary border-primary whitespace-nowrap' variant='outlined' onClick={() => navigate('/signin')}>Sign In</Button>
        </div>
    )
}
