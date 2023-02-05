import { Button, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logoutUser } from '../api/auth'
import StoreContext from '../context/store/StoreContext'
import logo from '../misc/clikkle host logo 2.png'

const navItems = [
    {
        itemName: 'Overview',
        url: '/',
        hasChildren: false,
    },
    {
        itemName: 'Get started',
        url: '/getstarted',
        hasChildren: false,
    },
    {
        itemName: 'Features',
        url: '/features',
        hasChildren: false,
    },
    {
        itemName: 'Learn',
        url: '/learn',
        hasChildren: false,
    },
    {
        itemName: 'Support',
        url: '/support',
        hasChildren: false,
    },
]

const NavbarComponent = () => {

    const { store, logout, toggleDashboardMenu } = useContext(StoreContext)
    const location = useLocation()
    const navigate = useNavigate()

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <div className='flex h-full flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            {navItems.map(item => (
                <Link key={item.itemName} className={`p-5 after:content-[""] after:absolute relative after:bottom-0 after:right-[20%] after:h-1 after:w-[60%] after:rounded-t-md text-black ${location.pathname === item.url ? 'after:bg-primary' : 'border-transparent'} grid items-center h-full px-6`} to={item.url}>
                    <Typography variant='small'>{item.itemName}</Typography>
                </Link>
            ))}
        </div>
    )

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                logout()
            })
            .catch(e => toast.error(e.response.data.message))
    }

    return (
        <Navbar className='max-w-full rounded-none !py-0 sticky top-0 border-none shadow z-[50000]'>
            <div className='flex items-center justify-between gap-12'>
                <div className='flex gap-8'>
                    {location.pathname.includes('dashboard') && (
                        <IconButton
                            variant="text"
                            className="  !text-primary ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => toggleDashboardMenu()}
                        >
                            {store.dashboardMenu.isOpened ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    )}
                    <Link to='/' className='flex items-center justify-between'>
                        <img className='h-12 min-w-fit' src={logo} alt='logo' />
                    </Link>
                    <div className="hidden lg:block">{navList}</div>
                </div>
                <div className='flex gap-4 items-center'>
                    {store.auth.authed ? (
                        <div className='flex justify-around items-center gap-4'>
                            <Link to={'/dashboard'}>
                                <Typography className='text-black' variant='lead'>Hi {store.auth.user.name}</Typography>
                            </Link>
                            <Button className='!min-w-fit !py-2 !px-8 text-primary border-primary' variant='outlined' onClick={() => handleLogout()}>Log Out</Button>
                        </div>
                    ) : (
                        <div className='flex justify-around items-center'>
                            <Button className='!min-w-fit !py-2 !px-8 text-primary border-primary' variant='outlined' onClick={() => navigate('/signin')}>Sign In</Button>
                        </div>
                    )}
                    <IconButton
                        variant="text"
                        className="  !text-primary ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </MobileNav>
        </Navbar>
    )
}

export default NavbarComponent