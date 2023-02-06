import { Typography } from '@material-tailwind/react'
import React from 'react'

const HomeSection = ({ children, imgUrl, imgAlt, imageFirst, darkerBG, centeredTitle, hero }) => {
    return (
        <section className={`${darkerBG ? 'bg-gray-100' : ''} ${hero ? 'min-h-screen' : ''} w-full grid grid-cols-1 pb-24 pt-24 ${imgUrl ? 'lg:grid-cols-2' : ''} gap-10 px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32`}>
            <div className={`flex flex-col text-center lg:text-left gap-4 justify-center items-center lg:items-start ${imageFirst ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}`}>
                {centeredTitle && (
                    <Typography className='w-full mb-12 text-2xl md:text-3xl xl:text-4xl text-center' variant='h1'>
                        {centeredTitle}
                    </Typography>
                )}
                {children}
            </div>
            {imgUrl && (
                <div className={`flex justify-center ${imageFirst ? 'order2 lg:order-1' : 'order-1 lg:order-2'} ${hero && 'mt-8 '} lg:mt-0`}>
                    <img
                        className='section-img-clikkle'
                        src={imgUrl}
                        alt={imgAlt}
                    />
                </div>
            )}
        </section>
    )
}

export default HomeSection