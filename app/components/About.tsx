import React from 'react'
import { Image } from 'blitz'

import GitHub from './icons/GitHub'
import LinkedIn from './icons/LinkedIn'
import PillButton from './PillButton'

const About = () => {
    return (
        <section id="about">
            <div className="pt-48">
                <div className="flex h-full items-center justify-center">
                    <div className="flex flex-col md:flex-row max-w-95vw lg:max-w-840px bg-card dark:bg-card-dark rounded-lg shadow hover:shadow-md quick-transition p-8 -mt-24 text-center">
                        <div className="flex flex-grow flex-col">
                            <div className="w-64 h-64 rounded-full md:m-8 mb-2 overflow-hidden ml-auto mr-auto">
                                <Image
                                    src="/v1585433175/mypicture_rvdifg.jpg"
                                    alt="Theo Joyce"
                                    layout="fixed"
                                    width={256}
                                    height={256}
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                            <h2 className="text-gray-dark dark:text-white text-4xl md:text-2xl font-bold">
                                Theo Joyce
                            </h2>
                            <div className="flex mx-auto my-4 space-x-4">
                                <a href="https://github.com/TheoJoyce" rel="noreferrer" target="_blank">
                                    <GitHub className="text-github dark:text-white w-12 md:w-8" />
                                </a>
                                <a href="https://www.linkedin.com/in/theojoyce/" rel="noreferrer" target="_blank">
                                    <LinkedIn className="w-12 md:w-8 ml-4 md:ml-0" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-gray-dark dark:text-white text-5xl font-bold pb-6 md:text-left">
                                About Me
                            </h1>
                            <p className="text-gray-dark dark:text-white text-xl md:text-lg text-left pt-2">
                                I&apos;m a React web developer with a passion for programming. I love to learn new
                                things about technology and web development every day.
                            </p>
                            <div className="flex justify-end mt-8 mx-auto md:mt-auto md:mx-0">
                                <a
                                    className="flex"
                                    href="https://res.cloudinary.com/theojoyce/image/upload/v1611854832/Theo%20Joyce%27s%20Resume.pdf"
                                    rel="noreferrer"
                                    target="_blank"
                                    tabIndex={-1}
                                >
                                    <PillButton>Resume</PillButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
