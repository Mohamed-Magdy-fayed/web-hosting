import React from 'react'

const SectionContainer = ({ children }) => {
    return (
        <div className='px-8 md:px-12 lg:px-16 xl:px-20 w-full pb-8'>
            {children}
        </div>
    )
}

export default SectionContainer