import { Button, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { MdLock, MdTimer } from 'react-icons/md'

const PaymentForm = ({ paymentType }) => {
    const [nameOnCard, setnameOnCard] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardDate, setCardDate] = useState('')
    const [cardCVC, setCardCVC] = useState('')

    const handlePaymentSubmit = () => {
        
    }

    const handleDateFormat = (e) => {
        const inputChar = String.fromCharCode(e.keyCode);
        const code = e.keyCode;
        const allowedKeys = [8];
        if (allowedKeys.indexOf(code) !== -1) {
            return;
        }

        setCardDate(e.target.value.replace(
            /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
        ).replace(
            /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
        ).replace(
            /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
        ).replace(
            /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        ).replace(
            /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
        ).replace(
            /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        ).replace(
            /\/\//g, '/' // Prevent entering more than 1 `/`
        ))
    }

    const cardNumberFormat = (value) => {
        const v = value
            .replace(/\s+/g, "")
            .replace(/[^0-9]/gi, "")
            .substr(0, 16);
        const parts = [];

        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4));
        }

        return parts.length > 1 ? parts.join(" ") : value;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {paymentType === 'CC' ? (
                <>
                    <input type="text" value={nameOnCard} onChange={(e) => setnameOnCard(e.target.value)} className="p-3 rounded-md border-2 border-primary pl-7 pr-12 focus:border-primary focus:ring-primary" placeholder="Name on Card" />
                    <input type="text" value={cardNumber} onChange={(e) => setCardNumber(cardNumberFormat(e.target.value))} className="hide-number-input-arrows p-3 rounded-md border-2 border-primary pl-7 pr-12 focus:border-primary focus:ring-primary" placeholder="Card Number" />
                    <input type="text" value={cardDate} onChange={handleDateFormat} maxLength={5} className="p-3 rounded-md border-2 border-primary pl-7 pr-12 focus:border-primary focus:ring-primary" placeholder="Expiry Date" />
                    <input type="text" value={cardCVC} onChange={(e) => setCardCVC(e.target.value)} maxLength={3} className="hide-number-input-arrows p-3 rounded-md border-2 border-primary pl-7 pr-12 focus:border-primary focus:ring-primary" placeholder="CVC" />
                </>
            ) : paymentType === 'CG' ? (
                <div className=' col-span-2 flex flex-col gap-4 p-4'>
                    <span className='text-gray-700 text-base'>You are about to pay using cryptocurrency. Due to its nature cryptocurrencies, tokens, and digital assets are irreversible, and their exchange rates are highly volatile and transitory. We can not be responsible for any risk including but not limited to exchange rate risk and market risk.
                        <span className='text-bold text-black text-lg'>
                            Products purchased using cryptocurrencies, tokens or digital assets are not refundable.
                        </span>
                    </span>
                    <span className='text-gray-700 text-base'>Please note that crypto payments are not received instantly as they require multiple confirmations on the blockchain. Payment confirmation can take up to few hours but usually happens within 20 min.</span>
                    <span className='text-gray-700 text-base'>Once you complete the payment , click “Continue to dashboard” and you will be redirected to the control panel.</span>
                </div>
            ) : (
                <></>
            )}
            <Button className='bg-primary' onClick={handlePaymentSubmit}>Submit secure payment</Button>
            <div className='flex flex-col gap-2 items-start'>
                <span className='flex items-center justify-evenly'><MdTimer></MdTimer> 30-Day Money-Back Guarantee</span>
                <span className='flex items-center justify-evenly'><MdLock></MdLock> Encrypted and Secure Payments</span>
            </div>
            <div className='md:col-span-2 mt-4 text-gray-700 text-base flex flex-wrap'>
                <Typography>By checking out you agree with our</Typography>
                <a href='/' className='text-primary hover:text-accent cursor-pointer'>
                    Terms of Service.
                </a>
                <Typography>We will process your personal data for the fulfillment of your order and other purposes as per our</Typography>
                <a href='/' className='text-primary hover:text-accent cursor-pointer'>
                    Privacy Policy
                </a>
                <Typography>. You can cancel recurring payments at any time.</Typography>
            </div>
        </div>
    )
}

export default PaymentForm