import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeSection from './HomeSection'

const Section2 = ({ section2Items, title, linkText, linkUrl }) => {
    return (
        <HomeSection darkerBG centeredTitle={title}>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4 lg:flex-row'>
                    {section2Items.map(item => (
                        <div key={item.lead} className='flex flex-col gap-4 md:flex-row lg:flex-col'>
                            <div className='grid place-items-center'>
                                <img src={item.imgSrc} width={130} height={130} alt={item.lead} />
                            </div>
                            <div>
                                <div>
                                    <Typography variant='lead'>
                                        {item.lead}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant='paragraph'>
                                        {item.paragraph}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {linkText && (
                <Link to={linkUrl} className='text-primary pt-12 w-full text-center'>
                    {linkText}
                </Link>
            )}
        </HomeSection>
    )
}

export default Section2