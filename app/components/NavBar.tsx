import { Image } from 'blitz'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useTheme } from 'next-themes'
import useMounted from '../hooks/useMounted'

import Moon from './icons/Moon'
import Sun from './icons/Sun'

const scrollDuration = 400

const NavBar = () => {
    const { theme, setTheme } = useTheme()
    const mounted = useMounted()

    const userPrefDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches

    const toggleTheme = () => {
        let newTheme = 'dark'

        if (theme === 'system') {
            if (userPrefDarkMode()) {
                newTheme = 'light'
            }
        } else if (theme === 'dark') {
            newTheme = 'light'
        }

        setTheme(newTheme)
    }

    const isDarkMode = () => theme === 'dark' || (theme === 'system' && userPrefDarkMode())

    return (
        <div className="relative z-20 pb-24">
            <header className="flex fixed items-center w-full h-24 bg-background dark:bg-black shadow-nav dark:shadow-nav-dark">
                <nav className="flex px-4 w-full" role="navigation">
                    <div className="flex items-center mx-auto md:m-0">
                        <div
                            className="px-2 py-1 rounded-lg"
                            onClick={() => scroll.scrollTo(0, { duration: scrollDuration })}
                        >
                            <Image
                                src="/v1608520172/TheoJoyce_Logo_White.png"
                                className="h-16 ml-4 cursor-pointer"
                                layout="fixed"
                                width={162}
                                height={64}
                                alt="Theo Joyce Logo"
                                loading="eager"
                            />
                        </div>
                    </div>
                    <ul className="flex flex-grow items-center justify-end">
                        <li className="mr-4 cursor-pointer" onClick={toggleTheme}>
                            {isDarkMode() && mounted ? (
                                <Moon className="text-white w-8" />
                            ) : (
                                <Sun className="text-white w-8" />
                            )}
                        </li>
                        <li className="hidden md:inline">
                            <Link to="my-work" hashSpy={true} smooth={true} duration={scrollDuration}>
                                <p className="font-bold tracking-wide text-white hover:text-black hover:bg-white cursor-pointer rounded-full py-2 px-3 quick-transition hover:shadow-md select-none">
                                    My Work
                                </p>
                            </Link>
                        </li>
                        <li className="hidden md:inline">
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
