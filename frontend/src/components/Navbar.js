import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logoutUser } from '../api/auth'
import StoreContext from '../context/store/StoreContext'
import logo from '../misc/logo.png'
import Button from './shared/Button'

const navItems = [
    {
        itemName: 'Overview',
        url: '/overview',
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

const Navbar = () => {

    const { store, logout } = useContext(StoreContext)
    console.log(store);
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                logout()
                navigate('/signin')
            })
            .catch(e => toast.error(e.response.data.message))
    }

    return (
        <nav className='flex gap-12 justify-between px-8 min-h-[3rem] shadow sticky top-0 bg-gray-100'>
            <Link to='/' className='flex gap-4 py-2 justify-center items-center'>
                <img className='h-12' src={logo} alt='logo' />
                <span>Clikkle HOST</span>
            </Link>
            <div className='flex m-0 justify-around items-center'>
                {navItems.map(item => (
                    <Link key={item.itemName} className={`border-b-2 ${location.pathname === item.url ? 'border-green' : 'border-blue'} grid items-center h-full px-6 hover:border-green`} to={item.url}>
                        <span>{item.itemName}</span>
                    </Link>
                ))}
            </div>
            {store.auth.authed ? (
                <div className='flex justify-around items-center gap-4'>
                    <span>
                        Hi {store.auth.user.name}
                    </span>
                    <Button text='Logout' type='accent' click={() => handleLogout()}></Button>
                </div>
            ) : (
                <div className='flex justify-around items-center'>
                    <Button url='/signin' text='Sign In' type='primary'></Button>
                </div>
            )}
        </nav>
    )
}

export default Navbar