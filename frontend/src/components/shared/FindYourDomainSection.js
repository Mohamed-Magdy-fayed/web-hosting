import { Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeSection from './HomeSection'

const FindYourDomainSection = () => {
    const navigate = useNavigate()

    return (
        <HomeSection mobileImgSecond>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 pb-12 pt-12 gap-10 px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32'>
                <div className='flex flex-col text-center lg:text-left gap-4 justify-center items-center lg:items-start'>
                    <Typography className='text-2xl md:text-3xl xl:text-4xl fonts' variant='h1'>Find your domain</Typography>
                    <form className="grid grid-cols-[1fr_94px] gap-0 justify-center items-center w-full rounded shadow mt-7 mx-auto mb-0 text-left">
                        <input className="h-16 pt-5 pr-0 pb-6 pl-14 w-full border-0 focus-visible:outline-none rounded-tl rounded-bl bg-[url(../misc/search_icon_grey.svg)] bg-no-repeat bg-[20px_center] text-base font-semibold" placeholder="Search for your domain" />
                        <button onClick={() => navigate('/cart')} className="flex justify-center items-center text-white p-0 w-full h-full rounded-tr rounded-br bg-primary border-0 font-semibold font-[Arial,sans-serif;]" type="button">Get it</button>
                    </form>
                </div>
                <div className={`flex justify-center lg:mt-0`}>
                    <img
                        className='section-img-clikkle lg:!absolute !bottom-0 lg:!right-0'
                        src={'https://domains.google/static/images/exports/08-24-2020/masked-footer.svg'}
                        alt={'imgAlt'}
                    />
                </div>
            </div>
        </HomeSection>
    )
}

export default FindYourDomainSection