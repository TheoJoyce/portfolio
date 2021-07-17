import React from 'react'
import PortfolioCard from './PortfolioCard'

export interface WorkData {
    image: string
    title: string
    description: string
    liveLink: string
}

interface WorkProps {
    portfolioCardData: WorkData[]
}

const Work = ({ portfolioCardData }: WorkProps) => {
    return (
        <section id="my-work" className="sm:mb-32 pt-48">
            <div>
                <div className="bg-card dark:bg-card-dark pt-12 pb-6 rounded-lg shadow max-w-95vw 2xl:max-w-screen-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-dark dark:text-white text-center pb-12">My Work</h2>
                    <div className="flex flex-row flex-wrap justify-evenly">
                        {portfolioCardData?.map((d, k) => (
                            <div key={k}>
                                <PortfolioCard
                                    image={d.image}
                                    title={d.title}
                                    description={d.description}
                                    liveLink={d.liveLink}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
