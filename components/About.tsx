import React from 'react'
import GitHub from './icons/GitHub'
import LinkedIn from './icons/LinkedIn'
import LazyImage from './LazyImage'
import PillButton from './PillButton'

const About = () => {
    return (
        <section id="about">
            <div className="h-screen pt-24 bg-background">
                <div className="flex h-full items-center justify-center">
                    <div className="flex flex-col md:flex-row bg-card rounded-lg shadow hover:shadow-md quick-transition p-8 -mt-24 text-center about-me-card">
                        <div className="flex flex-grow flex-col">
                            <div className="w-64 h-64 rounded-full md:m-8 mb-2 overflow-hidden ml-auto mr-auto">
                                <LazyImage imageURL="v1585433175/mypicture_rvdifg.jpg" width={256} height={256} />
                            </div>
                            <h2 className="text-gray-dark text-2xl font-bold">Theo Joyce</h2>
                            <div className="flex mx-auto my-4 space-x-4">
                                <a href="https://github.com/TheoJoyce" rel="noreferrer" target="_blank">
                                    <GitHub />
                                </a>
                                <a href="https://www.linkedin.com/in/theojoyce/" rel="noreferrer" target="_blank">
                                    <LinkedIn />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-gray-dark text-5xl font-bold pb-6 md:text-left">About Me</h1>
                            <p className="text-gray-dark text-lg text-left pt-2">
                                I&apos;m a React web developer with a passion for programming. I love to learn new things about technology and web
                                development every day.
                            </p>
                            <div className="flex justify-end mt-8 mx-auto md:mt-auto md:mx-0">
                                <a
                                    className="flex"
                                    href="https://res.cloudinary.com/theojoyce/image/upload/Theo%20Joyce's%20Resume.pdf"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <PillButton text="Resume" />
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
