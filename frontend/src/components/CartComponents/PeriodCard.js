import React, { useState } from 'react'
import { IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline } from 'react-icons/io'

const PeriodCard = ({ plan, selected, setSelected }) => {

    // {
    //     id: 1,
    //     period: '1',
    //     perMonth: '11.99',
    //     discountPerMonth: '11.99',
    //     freeDomain: false,
    //     setupFees: true,
    //     total: Number(1) * Number(11.99),
    // },

    return (
        <div className={`bg-primary text-white rounded-md border-t-4 border-primary ${selected.id === plan.id ? 'border-accent' : ''} cursor-pointer px-4 py-2  text-xl font-bold flex gap-1 items-center`} onClick={() => setSelected(plan)}>
            {selected === plan.id ? <IoMdCheckmarkCircle className='text-accent'></IoMdCheckmarkCircle> : <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>}
            <span>{plan.period === 1 ? plan.period + ' Month' : plan.period + ' Months'}</span>
        </div>
    )
}

export default PeriodCard