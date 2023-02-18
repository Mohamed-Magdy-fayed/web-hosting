import React, { useEffect, useState } from 'react'

const plans = [
    {
        id: 1,
        period: '1',
        perMonth: '11.99',
        discountPerMonth: '11.99',
        freeDomain: false,
        setupFees: true,
        total: Number(1) * Number(11.99),
        totalAfterDiscount: Number(1) * Number(11.99),
    },
    {
        id: 2,
        period: '12',
        perMonth: '11.99',
        discountPerMonth: '2.99',
        freeDomain: true,
        setupFees: false,
        total: Number(12) * Number(11.99),
        totalAfterDiscount: Number(12) * Number(2.99),
    },
    {
        id: 3,
        period: '24',
        perMonth: '11.99',
        discountPerMonth: '2.99',
        freeDomain: true,
        setupFees: false,
        total: Number(24) * Number(11.99),
        totalAfterDiscount: Number(24) * Number(2.99),
    },
    {
        id: 4,
        period: '48',
        perMonth: '11.99',
        discountPerMonth: '2.99',
        freeDomain: true,
        setupFees: false,
        total: Number(48) * Number(11.99),
        totalAfterDiscount: Number(48) * Number(2.99),
    },
]

const ChoosePlan = ({ setPlan }) => {
    const [selected, setSelected] = useState(plans[0])
    const [save, setSave] = useState()

    useEffect(() => {
        const saving = (selected.perMonth * selected.period) - selected.total
        setSave(saving)
        setPlan(selected)
    }, [selected])


    return (
        <div className='lg:col-span-2 mt-8'>
            <div>
                <h1 className='text-3xl font-bold'>1- Choose a period</h1>
            </div>
            <div className='grid gap-8 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8'>
                {plans.map(plan => (
                    <div key={plan.id} onClick={() => setSelected(plan)} className='shadow border-2 border-primary text-center relative'>
                        <span className={`${selected.id === plan.id ? 'bg-primary' : 'bg-blue-gray-100 text-black'} text-white absolute top-[-5%] rounded-3xl p-1 left-[15%] w-[70%]`}>{plan.setupFees ? '$4.99 Setup fee' : `Save $${save}`}</span>
                        <div className='mt-12 text-3xl font-bold'>{plan.period === '1' ? plan.period + ' Month' : plan.period + ' Months'}</div>
                        <div>
                            <div className=' line-through text-gray-500 m-4'>{plan.perMonth}</div>
                            <div className='text-5xl font-bold text-primary'>{plan.discountPerMonth}</div>
                            <span className=' text-gray-500'>USD / Month</span>
                        </div>
                        {plan.freeDomain && (<div className='bg-primary text-center text-white w-full p-2 place-self-end'>Free domain for 1st year</div>)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChoosePlan