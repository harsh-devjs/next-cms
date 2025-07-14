import Link from 'next/link'
import React from 'react'

const Button = ({ text, url }) => {
    return (
        <Link href={url} className={`py-2 px-3 bg-green-600 text-gray-50 rounded cursor-pointer w-fit font-light`}>
            {text}
        </Link>
    )
}

export default Button
