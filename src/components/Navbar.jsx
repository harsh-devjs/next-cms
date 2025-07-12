import Link from 'next/link'
import React from 'react'

const links = [
  {
    id: 1,
    title: 'Home',
    href: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    href: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    href: '/blog'
  },
  {
    id: 4,
    title: 'About',
    href: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    href: '/contact'
  },
  {
    id: 6,
    title: 'Dashboard',
    href: '/dashboard'
  }
]

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16'>
      <Link href='/' className='font-bold text-xl'>
        NextCms
      </Link>

      <div className="flex items-center gap-4">
        {links.map(link => (
          <Link href={link.href} key={link.id}>
            {link.title}
          </Link>
        ))}

        <button className="py-1 px-2 bg-green-600 rounded text-sm ml-3">Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
