'use client'
import Link from 'next/link'
import { useState } from 'react';
import { RiMenu5Fill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

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

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <nav className='flex justify-between items-center h-16 relative'>
      <Link href='/' >
        <span className='font-extrabold text-xl lg:text-2xl'>
          NextCms
        </span>
      </Link>

      {/* SMALL SCREEN */}
      <div className="">
        <RiMenu5Fill onClick={toggleMenu} size={28} className='md:hidden absolute z-50 right-1 top-[19px]' />

        {/* SMALL SCREEN - MENU */}
        {menuOpen && <div className="flex flex-col w-full h-screen bg-[#111] items-center justify-center gap-4 absolute left-0 top-0 z-10 text-4xl">
          {links.map(link => (
            <Link href={link.href} key={link.id} onClick={()=>setMenuOpen(false)}>
              {link.title}
            </Link>
          ))}
          <button className="p-2 bg-red-600 rounded text-lg mt-20 flex items-center gap-2 ">
            <TbLogout size={20} />
            Logout
          </button>
        </div>}
      </div>

      {/* MEDIUM SCREEN AND ABOVE */}
      <div className="hidden md:flex items-center gap-4">
        {links.map(link => (
          <Link href={link.href} key={link.id}>
            {link.title}
          </Link>
        ))}

        <button className="py-1 px-2 bg-red-600 rounded text-sm ml-3 flex items-center gap-2 cursor-pointer">
          <TbLogout size={20} />
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
