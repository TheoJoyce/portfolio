import React from 'react'
import PortfolioCard from './PortfolioCard'

const Work = () => {
    const placeholderCard = {
        image: '',
        title: 'Coming Soon',
        description: '',
        liveLink: '',
    }

    const portfolioCardsData = [placeholderCard, placeholderCard]

    return (
        <section id="my-work">
            <div className="min-h-screen pt-32">
                <div className="bg-card dark:bg-card-dark pt-12 pb-6 rounded-lg shadow max-w-95vw md:max-w-screen-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-dark dark:text-white text-center pb-12">My Work</h2>
                    <div className="flex flex-row flex-wrap justify-evenly">
                        {portfolioCardsData.map((d, k) => (
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
