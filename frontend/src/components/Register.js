import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { registerUser } from '../api/auth';
import StoreContext from '../context/store/StoreContext'
import logo from '../misc/logo.png'
import Button from './shared/Button'
import validator from "validator";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const { login } = useContext(StoreContext)

    const navigate = useNavigate()

    const handleEmailError = (email) => {
        setEmail(email)
        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('invalid email')
        }
    }

    const handleRegister = () => {
        if (name.length === 0 || email.length === 0 || password.length === 0 || confPassword.length === 0) return toast.error('please fill all the data', { toastId: 'loginError' })
        if (password !== confPassword) return toast.error('Passwords don\'t match', { toastId: 'passwordMatch' })

        if (validator.isEmail(email)) {
            toast.promise(registerUser(name, email, password), {
                pending: {
                    render() {
                        return 'Creating your account...'
                    },
                },
                success: {
                    render({ data }) {
                        navigate('/signin')
                        return `Account ${data.data.user.email} created please login to continue`
                    },
                },
                error: {
                    render({ data }) {
                        console.log(data);
                        return data.response.data.message
                    }
                }
            })
        } else {
            toast.error("Please, enter valid Email!");
        }
    }

    return (
        <div className='grid grid-cols-2 items-center min-h-screen gap-12'>
            <div className='justify-self-end p-12'>
                <img onClick={() => navigate('/')} className='w-[40vw] cursor-pointer' src={logo} alt='logo' />
            </div>
            <div className='flex flex-col gap-4 justify-self-start text-center shadow-md rounded-lg border-t-2 border-t-green'>
                <h1 className='border border-b-gray-200 p-2 rounded-t-lg text-2xl font-bold'>Create an <span className=' text-primary'>account</span></h1>
                <form className='flex flex-col p-4 gap-4 min-w-[30rem] rounded-b-lg'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-left text-primary'>Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} required type='text' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='John Doe' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-left text-primary'>Email</label>
                        <input onChange={(e) => handleEmailError(e.target.value)} value={email} required type='email' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='email@email.com' />
                        {emailError.length > 0 && (
                            <p className='text-warn text-sm text-left'>{emailError}</p>
                        )}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-left text-primary'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} required type='password' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='password' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-left text-primary'>Confirm Password</label>
                        <input onChange={(e) => setConfPassword(e.target.value)} value={confPassword} required type='password' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='password confirmation' />
                    </div>
                    <div className='flex justify-around'>
                        <Link className=' text-primary hover:text-accent' to='/signin'>Alraedy a user?</Link>
                    </div>
                    <Button click={handleRegister} text='Create Account' type='accent'></Button>
                </form>
            </div>
        </div>
    )
}

export default Register