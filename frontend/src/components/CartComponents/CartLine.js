import React from 'react'

const CartLine = ({ total, totalAfterDiscount, showDiscount }) => {
    return (
        <div>
            {showDiscount && (
                <span className='text-base text-gray-500 line-through'>
                    {total > totalAfterDiscount ? total : ''}
                </span>
            )}
            <span> ${totalAfterDiscount}</span>
        </div>
    )
}

export default CartLine