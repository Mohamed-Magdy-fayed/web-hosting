import { Typography } from '@material-tailwind/react'
import React from 'react'

const HomeSection = ({ children, imgUrl, imgAlt, imageFirst, darkerBG, centeredTitle, hero, mobileImgSecond, videoUrl, stayCol }) => {
    return (
        <section className={`${darkerBG ? 'bg-gray-100' : ''} relative ${hero ? 'min-h-screen' : ''} w-full grid grid-cols-1 pb-24 pt-24 ${(imgUrl || videoUrl) && !stayCol ? 'lg:grid-cols-2' : ''} gap-10 px-6 md:pl-20 lg:pl-16 xl:pl-20 2xl:pl-28 md:pr-12 lg:pr-8 xl:pr-12 2xl:pr-20`}>
            <div className={`flex flex-col text-center lg:text-left gap-4 justify-center items-center lg:items-start ${imageFirst ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}`}>
                {centeredTitle && (
                    <Typography className='w-full mb-12 font-normal !fonts text-2xl md:text-3xl xl:text-4xl text-center' variant='h1'>
                        {centeredTitle}
                    </Typography>
                )}
                {children}
            </div>
            {imgUrl && (
                <div className={`flex justify-center ${imageFirst ? 'order-2 lg:order-1' : 'order-1 lg:order-2 w-full max-w-xl'} ${hero && 'mt-8 '} lg:mt-0`}>
                    <img
                        className='section-img-clikkle'
                        src={imgUrl}
                        alt={imgAlt}
                    />
                </div>
            )}
            {videoUrl && (
                <div className={`flex justify-center ${imageFirst ? 'order-2 lg:order-1' : 'order-1 lg:order-2 w-full max-w-xl'} ${hero && 'mt-8 '} lg:mt-0`}>
                    <video width="100%" height="100%" autoPlay loop>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </div>
            )}
        </section>
    )
}

export default HomeSection