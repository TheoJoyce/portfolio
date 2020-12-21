import React from 'react'
import PortfolioCard from './PortfolioCard'

const Work = () => {
    const placeholderCard = {
        image: 'image.png',
        title: 'Coming Soon',
        description: '',
        liveLink: '',
    }

    const portfolioCardsData = [placeholderCard, placeholderCard, placeholderCard]

    return (
        <section id="my-work">
            <div className="min-h-screen pt-24 bg-background">
                <div className="bg-card pt-12 pb-6 rounded-lg shadow work-card mx-auto">
                    <h2 className="text-4xl font-bold text-gray-dark text-center pb-12">My Work</h2>
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
