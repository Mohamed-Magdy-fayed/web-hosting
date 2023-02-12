import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdChatbubbles } from 'react-icons/io'
import { MdCheck, MdCircle, MdOutlineCircle, MdSecurity, MdStars } from 'react-icons/md'
import { FaBitcoin, FaCcDiscover, FaCcMastercard, FaCcVisa, FaGooglePay, FaPaypal } from 'react-icons/fa'
import { SiAlipay, SiAmericanexpress } from 'react-icons/si'
import ChoosePlan from './CartComponents/ChoosePlan'
import PaymentDetails from './CartComponents/PaymentDetails'

const product = {
    name: 'Premium Web Hosting',
    options: ['100 Websites', 'Unmetered Traffic (Unlimited GB)', '24/7 Support'],
    security: ['Unlimited Free SSL', '99,90% Uptime Guarantee', 'Weekly Backups'],
    extra: ['100 GB SSD Storage', 'Cloudflare Protected Nameservers', 'Malware Scanner'],
}

const Cart = ({ }) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [plan, setPlan] = useState({})
    const [paymentType, setPaymentType] = useState('CC')

    const handleModal = () => {
        navigate('/signin')
    }

    return (
        <div className='flex items-center flex-col'>
            {/* Offers section */}
            <div className='shadow-md text-4xl bg-primary text-white rounded-lg w-96 m-12 p-12'>
                Offers Section
            </div>
            {/* Product info */}
            <div className='flex flex-col w-full'>
                <div className='bg-gray-100 mb-8'>
                    <h1 className='text-5xl text-center font-bold p-4'>Couple <span className='text-primary'>clicks</span> to complete your order</h1>
                </div>
                <div className='px-32'>
                    <h3 className='text-xl'>Selected plan: <span className=' text-primary font-bold'>{product.name}</span></h3>
                </div>
                <div className='flex gap-12 justify-around px-32'>
                    <div className=''>
                        <div className='flex items-center gap-1 mb-4 w-full'>
                            <IoMdChatbubbles></IoMdChatbubbles>
                            <span>All in one solution</span>
                        </div>
                        <div>
                            {product.options.map(item => (
                                <div key={item} className='flex items-center gap-1'>
                                    <MdCheck></MdCheck>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex items-center gap-1 mb-4'>
                            <MdSecurity></MdSecurity>
                            <span>Security</span>
                        </div>
                        <div>
                            {product.security.map(item => (
                                <div key={item} className='flex items-center gap-1'>
                                    <MdCheck></MdCheck>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex items-center gap-1 mb-4'>
                            <MdStars></MdStars>
                            <span>Extra</span>
                        </div>
                        <div>
                            {product.extra.map(item => (
                                <div key={item} className='flex items-center gap-1'>
                                    <MdCheck></MdCheck>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 content-start w-full mt-8'>
                    <ChoosePlan setPlan={setPlan}></ChoosePlan>
                    <div className='bg-gray-100 px-32 py-8'>
                        <div className='flex flex-col gap-4 justify-self-start'>
                            <h1 className='text-3xl font-bold'>2- Create your <span className=' text-primary'>account</span></h1>
                            <form className='flex flex-col p-4 gap-4 min-w-[30rem] rounded-b-lg'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-left text-primary'>
                                        <span>Already have an account?</span>
                                        <span className='text-primary ml-4 cursor-pointer hover:text-primary select-none' click={() => handleModal()}>Login</span>
                                    </label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} required type='email' className='border-2 rounded border-gray-200 focus-visible:border-blue p-2 focus-visible:outline-none' placeholder='email@email.com' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-100'>
                    <div className='px-32 py-8 '>
                        <div className='flex flex-col gap-4 justify-self-start'>
                            <h1 className='text-3xl font-bold'>3- Payment <span className=' text-primary'>method</span></h1>
                            <div className='grid grid-cols-3'>
                                <div className='flex flex-col gap-4 items-center'>
                                    <div
                                        onClick={() => { setPaymentType('CC') }}
                                        className='text-2xl flex gap-2 items-center cursor-pointer bg-white w-[80%] p-2 border-2 border-primary rounded-md'
                                    >
                                        {paymentType === 'CC' ? <MdCircle className='text-primary'></MdCircle> : <MdOutlineCircle></MdOutlineCircle>}
                                        <span>Credit Card</span>
                                        <FaCcVisa className='ml-auto text-2xl'></FaCcVisa>
                                        <FaCcDiscover className='ml-auto text-2xl'></FaCcDiscover>
                                        <SiAmericanexpress className='ml-auto text-2xl'></SiAmericanexpress>
                                        <FaCcMastercard className='ml-auto text-2xl'></FaCcMastercard>
                                    </div>
                                    <div
                                        onClick={() => { setPaymentType('PP') }}
                                        className='text-2xl flex gap-2 items-center cursor-pointer bg-white w-[80%] p-2 border-2 border-primary rounded-md'
                                    >
                                        {paymentType === 'PP' ? <MdCircle className='text-primary'></MdCircle> : <MdOutlineCircle></MdOutlineCircle>}
                                        <span>Paypal</span>
                                        <FaPaypal className='ml-auto text-2xl'></FaPaypal>
                                    </div>
                                    <div
                                        onClick={() => { setPaymentType('GP') }}
                                        className='text-2xl flex gap-2 items-center cursor-pointer bg-white w-[80%] p-2 border-2 border-primary rounded-md'
                                    >
                                        {paymentType === 'GP' ? <MdCircle className='text-primary'></MdCircle> : <MdOutlineCircle></MdOutlineCircle>}
                                        <span>Google Pay</span>
                                        <FaGooglePay className='ml-auto text-2xl'></FaGooglePay>
                                    </div>
                                    <div
                                        onClick={() => { setPaymentType('AP') }}
                                        className='text-2xl flex gap-2 items-center cursor-pointer bg-white w-[80%] p-2 border-2 border-primary rounded-md'
                                    >
                                        {paymentType === 'AP' ? <MdCircle className='text-primary'></MdCircle> : <MdOutlineCircle></MdOutlineCircle>}
                                        <span>AliPay</span>
                                        <SiAlipay className='ml-auto text-2xl'></SiAlipay>
                                    </div>
                                    <div
                                        onClick={() => { setPaymentType('CG') }}
                                        className='text-2xl flex gap-2 items-center cursor-pointer bg-white w-[80%] p-2 border-2 border-primary rounded-md'
                                    >
                                        {paymentType === 'CG' ? <MdCircle className='text-primary'></MdCircle> : <MdOutlineCircle></MdOutlineCircle>}
                                        <span>Coingate</span>
                                        <FaBitcoin className='ml-auto text-2xl'></FaBitcoin>
                                    </div>
                                </div>
                                <PaymentDetails paymentType={paymentType} product={product} plan={plan}></PaymentDetails>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart