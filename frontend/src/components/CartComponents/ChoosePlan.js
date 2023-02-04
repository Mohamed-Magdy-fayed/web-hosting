import React, { useEffect, useState } from 'react'
import PeriodCard from './PeriodCard'

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
    const [selected, setSelected] = useState({
        id: 2,
        period: '12',
        perMonth: '11.99',
        discountPerMonth: '2.99',
        freeDomain: true,
        setupFees: false,
        total: Number(12) * Number(2.99),
    })
    const [save, setSave] = useState()

    useEffect(() => {
        const saving = (selected.perMonth * selected.period) - selected.total
        setSave(saving)
        setPlan(selected)
    }, [selected])


    return (
        <div className='bg-indigo-100 px-32 py-8'>
            <div>
                <h1 className='text-3xl font-bold'>1- Choose a period</h1>
            </div>
            <div className='grid gap-8 py-8 grid-cols-2'>
                <div className='flex flex-col gap-8'>
                    {plans.map(plan => (
                        <div key={plan.id}>
                            <PeriodCard plan={plan} selected={selected} setSelected={setSelected}></PeriodCard>
                        </div>
                    ))}
                </div>
                <div className='shadow bg-white border-2 border-primary grid grid-cols-1 text-center relative'>
                    <span className='text-white absolute top-[-5%] bg-primary rounded-3xl p-1 left-[15%] w-[70%]'>{selected.setupFees ? '$4.99 Setup fee' : `Save $${save}`}</span>
                    <div className='mt-12 text-3xl font-bold'>{selected.period === '1' ? selected.period + ' Month' : selected.period + ' Months'}</div>
                    <div>
                        <div className=' line-through text-gray-500 m-4'>{selected.perMonth}</div>
                        <div className='text-5xl font-bold text-primary'>{selected.discountPerMonth}</div>
                        <span className=' text-gray-500'>USD / Month</span>
                    </div>
                    {selected.freeDomain && (<div className='bg-primary text-center text-white w-full p-2 place-self-end'>Free domain for 1st year</div>)}
                </div>
            </div>
        </div>
    )
}

export default ChoosePlan