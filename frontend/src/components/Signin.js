import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { checkAuth, loginUser } from '../api/auth';
import StoreContext from '../context/store/StoreContext'
import logo from '../misc/logo.png'
import Button from './shared/Button'
import validator from "validator";
import AppLoading from './shared/AppLoading';

const Signin = () => {
  const { store, setLoading, login } = useContext(StoreContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loadingBtn, setLoadingBtn] = useState(false)

  const navigate = useNavigate()

  const handleSignin = () => {
    setLoadingBtn(true)
    if (email.length === 0 || password.length === 0) return toast.error('please fill all the data', { toastId: 'loginError' })
    if (validator.isEmail(email)) {
      loginUser(email, password)
        .then(res => {
          login({ user: res.data.user })
          toast.success(`Welcome ${res.data.user.name}`)
          setLoadingBtn(false)
          navigate('/dashboard')
        })
        .catch(e => {
          console.log(e);
          setLoadingBtn(false)
          toast.error(e.response.data)
        })
    } else {
      toast.error('Invalid email')
    }
  }

  useEffect(() => {
    setLoading(true)
    checkAuth()
      .then(res => {
        if (res.data.message) return setLoading(false)
        if (res.data.user) {
          login({ user: res.data.user })
          setLoading(false)
          navigate('/dashboard')
        }
      })
      .catch(e => {
        toast.error(e.response.data.message)
        setLoading(false)
        console.log(e);
      })
  }, [])

  if (store.loading) {
    return (
      <AppLoading />
    )
  }

  return (
    <div className='grid grid-cols-2 items-center min-h-screen gap-12'>
      <div className='justify-self-end p-12'>
        <img onClick={() => navigate('/')} className=' w-[4-vw] cursor-pointer' src={logo} alt='logo' />
      </div>
      <div className='flex flex-col gap-4 justify-self-start text-center shadow-md rounded-lg border-t-2 border-t-green'>
        <h1 className='p-2 rounded-t-lg text-2xl font-bold'>Login to your <span className=' text-primary'>account</span></h1>
        <form className='flex flex-col p-4 gap-4 min-w-[30rem] rounded-b-lg'>
          <div className='flex flex-col gap-2'>
            <label className='text-left text-primary'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} required type='email' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='email@email.com' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-left text-primary'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} required type='password' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='password' />
          </div>
          <div className='flex justify-around'>
            <Link className=' text-primary hover:text-accent' to='/register'>Need an account?</Link>
            <Link className=' text-warn hover:text-accent' to='/resetpassword'>Forgot your password?</Link>
          </div>
          <Button disabled={loadingBtn} click={handleSignin} text='Sign In' type='accent'></Button>
        </form>
      </div>
    </div>
  )
}

export default Signin