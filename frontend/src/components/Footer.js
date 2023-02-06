import { Typography } from '@material-tailwind/react'
import React from 'react'

const Footer = () => {

    return (
        <div className=' bg-[#3c4043] py-8 px-8 text-[#dadce0] text-sm flex flex-col gap-4 w-full'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                <div className='flex flex-col items-start text-left'>
                    <Typography className='mb-2' variant='h6'>Get started</Typography>
                    <Typography variant='paragraph'>Domain search</Typography>
                    <Typography variant='paragraph'>Professional email</Typography>
                    <Typography variant='paragraph'>Website design</Typography>
                    <Typography variant='paragraph'>Online ads</Typography>
                </div>
                <div className='flex flex-col items-start text-left'>
                    <Typography className='mb-2' variant='h6'>Related products</Typography>
                    <Typography variant='paragraph'>Business Solutions</Typography>
                    <Typography variant='paragraph'>Clikkle Ads</Typography>
                    <Typography variant='paragraph'>Clikkle Business Profile</Typography>
                    <Typography variant='paragraph'>Clikkle Sites</Typography>
                    <Typography variant='paragraph'>Clikkle Workspace</Typography>
                    <Typography variant='paragraph'>More business products</Typography>
                </div>
                <div className='flex flex-col items-start text-left'>
                    <Typography className='mb-2' variant='h6'>Support</Typography>
                    <Typography variant='paragraph'>Help Center</Typography>
                    <Typography variant='paragraph'>FAQ</Typography>
                    <Typography variant='paragraph'>Contact us</Typography>
                </div>
                <div className='flex flex-col items-start text-left'>
                    <Typography className='mb-2' variant='h6'>Learn</Typography>
                    <Typography variant='paragraph'>Features</Typography>
                    <Typography variant='paragraph'>Domain basics</Typography>
                    <Typography variant='paragraph'>Choosing a name</Typography>
                    <Typography variant='paragraph'>Buying & transferring</Typography>
                    <Typography variant='paragraph'>Hosting & website</Typography>
                </div>
            </div>
            <div>
                <div className='border-t-2 border-t-white pt-2'>
                    <div className='flex items-center justify-start gap-4'>
                        <span>Clikkle</span>
                        <span>About</span>
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                    <div className='pt-2'>
                        English US
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer