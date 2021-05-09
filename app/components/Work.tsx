import PortfolioCard from './PortfolioCard'

const Work = () => {
    const freelanceOne = {
        image: '/v1607754158/ourkidschildcare.com__x4ntzf.png',
        title: 'Our Kids Child Care',
        description: 'A local daycare business',
        liveLink: 'https://ourkidschildcare.com/',
    }

    const portfolioCardsData = [freelanceOne]

    return (
        <section id="my-work" className="sm:mb-32 pt-48">
            <div>
                <div className="bg-card dark:bg-card-dark pt-12 pb-6 rounded-lg shadow max-w-95vw 2xl:max-w-screen-2xl mx-auto">
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
