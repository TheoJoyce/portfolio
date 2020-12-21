import React from 'react'
import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'

const scrollDuration = 400

const NavBar = () => {
    return (
        <div className="relative z-20 pb-24">
            <header className="flex fixed items-center w-full h-24 bg-background shadow-nav">
                <nav className="flex px-4 w-full" role="navigation">
                    <div className="flex items-center mx-auto md:m-0">
                        <div
                            className="px-2 py-1 rounded-lg"
                            onClick={() => scroll.scrollTo(0, { duration: scrollDuration })}
                        >
                            <Image
                                src="v1608520172/TheoJoyce_Logo_White.png"
                                className="h-16 ml-4 cursor-pointer"
                                layout="fixed"
                                width={162}
                                height={64}
                                alt="Theo Joyce Logo"
                            />
                        </div>
                    </div>
                    <ul className="hidden md:flex flex-grow items-center justify-end">
                        <li>
                            <Link to="my-work" hashSpy={true} smooth={true} duration={scrollDuration}>
                                <p className="font-bold tracking-wide text-white hover:text-black hover:bg-white cursor-pointer rounded-full py-2 px-3 quick-transition hover:shadow-md select-none">
                                    My Work
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" hashSpy={true} smooth={true} duration={scrollDuration}>
                                <p className="font-bold tracking-wide text-white hover:text-black hover:bg-white cursor-pointer rounded-full py-2 px-3 ml-2 quick-transition hover:shadow-md select-none">
                                    Contact Me
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar