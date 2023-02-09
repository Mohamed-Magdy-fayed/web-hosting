import { Typography } from '@material-tailwind/react'
import React from 'react'

const CenterMainTitle = ({text}) => {
    return (
        <Typography className='w-full mt-12 text-[28px] md:text-[32px] xl:text-4xl text-center fonts' variant='h1'>
            {text}
        </Typography>
    )
}

export default CenterMainTitle