import Image from 'next/image'
import React from 'react'

const footerImages = [
    {
        id: 1,
        img: '/1.png'
    },
    {
        id: 2,
        img: '/2.png'
    },
    {
        id: 3,
        img: '/3.png'
    },
    {
        id: 4,
        img: '/4.png'
    },
]

const Footer = () => {
    return (
        <footer className='flex justify-between items-center h-20'>
            <div className="text-xs sm:text-sm">&copy;2025 NextCMS. All rights reserved.</div>
            <div className="flex items-center gap-3">
                {footerImages.map(img => (
                    <Image src={img.img} alt='' width={15} height={15} key={img.id} />
                ))}
            </div>
        </footer>
    )
}

export default Footer
