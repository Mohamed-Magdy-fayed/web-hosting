import React, { useState } from 'react'
import Button from '../shared/Button'
import CartLine from './CartLine'
import PaymentForm from './PaymentForm'

// {
//     id: 3,
//     period: '24',
//     perMonth: '11.99',
//     discountPerMonth: '2.99',
//     freeDomain: true,
//     setupFees: false,
//     total: Number(24) * Number(11.99),
//     totalAfterDiscount: Number(24) * Number(2.99),
// },

const PaymentDetails = ({ product, plan, paymentType }) => {
    const [showCoupon, setShowCoupon] = useState(false)

    const details = {
        total: plan.period * plan.perMonth,
        totalAfterDiscount: plan.period * plan.discountPerMonth,
        domainNameFees: 9.99,
        setupFees: 4.99,
        discountPercentage: Number(((plan.perMonth - plan.discountPerMonth) / plan.perMonth).toFixed(2)) * 100,
        discountValue: (plan.period * plan.perMonth) - (plan.period * plan.discountPerMonth),
        taxes: 0,
    }

    return (
        <div className='bg-white flex flex-col gap-8 text-lg font-bold lg:col-span-2'>
            <div className='flex flex-row justify-between lg:items-center'>
                <span>{product.name} - {plan.period === 1 ? plan.period + ' Month' : plan.period + ' Months'} plan</span>
                <CartLine total={details.total} totalAfterDiscount={details.totalAfterDiscount} showDiscount></CartLine>
            </div>
            <div>
                {plan.freeDomain && (
                    <div className='flex justify-between items-center'>
                        <span>Domain Name</span>
                        <CartLine total={details.domainNameFees} totalAfterDiscount={0} showDiscount></CartLine>
                    </div>
                )}
                <div className='flex justify-between items-center'>
                    <span>Setup fees</span>
                    <CartLine total={details.setupFees} totalAfterDiscount={plan.setupFees ? details.setupFees : 0} showDiscount></CartLine>
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center'>
                    <span>Plan discount - {details.discountPercentage}%</span>
                    <CartLine total={details.discountValue} totalAfterDiscount={-details.discountValue} showDiscount={false}></CartLine>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Taxes & Fees</span>
                    <CartLine total={details.taxes} totalAfterDiscount={details.taxes} showDiscount={false}></CartLine>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-4xl'>Total</span>
                <CartLine total={details.total} totalAfterDiscount={details.totalAfterDiscount} showDiscount></CartLine>
            </div>
            <div>
                <span onClick={() => setShowCoupon(!showCoupon)} className='text-primary hover:text-accent select-none cursor-pointer'>Have a coupon code?</span>
                {showCoupon && (
                    <div className="grid grid-cols-4 gap-4">
                        <input type="text" className="col-span-2 w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-primary focus:ring-primary sm:text-sm" placeholder="Enter a coupon code" />
                        <Button text='Apply' type='primary'></Button>
                    </div>
                )}
            </div>
            <PaymentForm paymentType={paymentType}></PaymentForm>
        </div>
    )
}

export default PaymentDetails