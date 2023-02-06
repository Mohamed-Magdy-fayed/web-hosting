import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const BasicCard = ({ linkUrl, linkText, head, paragraph, icon }) => {
    return (
        <div className='border-b rounded border w-full shadow flex flex-col md:justify-between gap-2 items-center'>
            <div className='p-4 flex items-center justify-between w-full gap-4'>
                <div className='flex flex-col gap-4 items-start w-full md:w-fit'>
                    <Typography variant='h6'>{head}</Typography>
                    <Typography variant='small'>{paragraph}</Typography>
                </div>
                <div>{icon}</div>
            </div>
            <Link to={linkUrl} className='p-4 w-full h-full hover:bg-primary hover:bg-opacity-10 border-t text-primary'>
                {linkText}
            </Link>
        </div>
    )
}

export default BasicCard