import React from 'react'
import {Link} from 'react-scroll'

function Nav() {
  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[25px]'>
            <li className='text-white hover:text-accent cursor-pointer'>
                <Link
                    to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='transition-all duration-300'
                    >
                        Home
                </Link>
            </li>
            <li className='text-white hover:text-accent cursor-pointer'>
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='transition-all duration-300'
                    >
                        About
                </Link>
            </li>
            <li className='text-white hover:text-accent cursor-pointer'>
                <Link
                    to="portfolio"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='transition-all duration-300'
                    >
                        Portfolio
                </Link>
            </li>
            <li className='text-white hover:text-accent cursor-pointer'>
                <Link
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='transition-all duration-300'
                    >
                        Contact
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav