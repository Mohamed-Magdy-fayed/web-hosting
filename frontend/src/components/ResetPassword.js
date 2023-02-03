import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { resetPassword, resetPasswordLink } from '../api/auth';
import logo from '../misc/logo.png'
import Button from './shared/Button'
import validator from "validator";
import AppLoading from './shared/AppLoading';

const ResetPassword = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')
    const [loadingBtn, setLoadingBtn] = useState(false)
    const params = useParams();
    const navigate = useNavigate();

    const handleSendResetpassword = () => {
        if (password.length === 0) return toast.error('Please fill in the data', { toastId: 'Error' })
        if (password !== passwordConf) return toast.error('passwords don\'t match', { toastId: 'ErrorConf' })
        setLoadingBtn(true)
        const token = params.id
        resetPasswordLink(password, token)
            .then(res => {
                console.log(res);
                toast.success(`Password changed successfully`)
                navigate('/signin')
                setLoadingBtn(false)
            })
            .catch(e => {
                console.log(e);
                setLoadingBtn(false)
                toast.error(e.response.data.message)
            })
    }

    const handleResetpassword = () => {
        setLoadingBtn(true)
        if (email.length === 0) return toast.error('Please type your email!', { toastId: 'Error' })
        if (validator.isEmail(email)) {
            resetPassword(email)
                .then(res => {
                    console.log(res);
                    toast.success(`Please check your email!`)
                    setLoadingBtn(false)
                })
                .catch(e => {
                    console.log(e);
                    setLoadingBtn(false)
                    toast.error(e.response.data)
                })
        } else {
            toast.error('Not a valid email')
        }
    }

    if (params.id) {
        return (
            <div className='grid grid-cols-2 items-center min-h-screen gap-12'>
                <div className='justify-self-end p-12'>
                    <img className='h-64' src={logo} alt='logo' />
                </div>
                <div className='flex flex-col gap-4 justify-self-start text-center shadow-md rounded-lg border-t-2 border-t-green'>
                    <h1 className='p-2 rounded-t-lg text-2xl font-bold'>Reset your <span className=' text-blue'>password</span></h1>
                    <form className='flex flex-col p-4 gap-4 min-w-[30rem] rounded-b-lg'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-left text-blue'>New Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} required type='password' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='new password' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-left text-blue'>Confirm your password</label>
                            <input onChange={(e) => setPasswordConf(e.target.value)} value={passwordConf} required type='password' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='confirm password' />
                        </div>
                        <div className='flex justify-around'>
                            <Link className=' text-green hover:text-orange' to='/signin'>Go to login</Link>
                        </div>
                        <Button disabled={loadingBtn} click={handleSendResetpassword} text='Reset' type='warn'></Button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-2 items-center min-h-screen gap-12'>
            <div className='justify-self-end p-12'>
                <img className='h-64' src={logo} alt='logo' />
            </div>
            <div className='flex flex-col gap-4 justify-self-start text-center shadow-md rounded-lg border-t-2 border-t-green'>
                <h1 className='p-2 rounded-t-lg text-2xl font-bold'>Reset your <span className=' text-blue'>password</span></h1>
                <form className='flex flex-col p-4 gap-4 min-w-[30rem] rounded-b-lg'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-left text-blue'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} required type='email' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='email@email.com' />
                    </div>
                    <div className='flex justify-around'>
                        <Link className=' text-green hover:text-orange' to='/signin'>Go to login</Link>
                    </div>
                    <Button disabled={loadingBtn} click={handleResetpassword} text='Reset' type='warn'></Button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword