import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({ url, text, type, click, disabled }) => {
    // button colors
    let colorClasses = ''

    switch (type) {
        case 'primary':
            colorClasses = 'hover:bg-accent text-white bg-primary'
            break;
        case 'accent':
            colorClasses = 'hover:bg-primary text-white bg-accent'
            break;
        case 'warn':
            colorClasses = 'hover:bg-warn text-white bg-accent'
            break;

        default:
            break;
    }

    if (!url) return (
        <button disabled={disabled} type='button' onClick={() => click()} className={`px-4 py-2 rounded ${colorClasses} shadow text-lg font-semibold`}>{text}</button>
    )

    return (
        <Link to={url} className={`px-4 py-2 rounded ${colorClasses} shadow text-lg font-semibold`}>{text}</Link>
    )
}

export default Button