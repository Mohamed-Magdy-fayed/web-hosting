import React from 'react'
import logo from '../../misc/logo.png'

const AppLoading = () => {
    return (
        <div className='grid place-items-center h-screen'>
            <img className='h-[25vh] animate-pulse' src={logo} alt='loading' />
        </div>
    )
}

export default AppLoading