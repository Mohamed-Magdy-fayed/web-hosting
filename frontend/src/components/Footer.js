import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className=' bg-[#36344d] py-8 px-16 text-[#dadce0] text-sm flex flex-col gap-4 w-full'>
            <div className='flex gap-8 px-4 mx-auto'>
                <span className=' text-sm'>© 2020-2023 OurSite.com</span>
                <span onClick={() => navigate('/')} className='text-white cursor-pointer hover:underline'>Terms of Service</span>
                <span onClick={() => navigate('/')} className='text-white cursor-pointer hover:underline'>Privacy Policy</span>
            </div>
            <div className='px-4 mx-auto'>
                Our mission is to make life easier for website developers and their customers. We do it by offering easy to use, fast and reliable web hosting services.
            </div>
        </div>
    )
}

export default Footer