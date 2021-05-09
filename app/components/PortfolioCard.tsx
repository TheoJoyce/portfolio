import { useState } from 'react'
import LazyImage from './LazyImage'

type PortfolioCardProps = {
    image: string
    title: string
    description: string
    liveLink: string
}

const PortfolioCard = ({ image, title, description, liveLink }: PortfolioCardProps) => {
    const [isHovered, setIsHovered] = useState(false)

    const titleElement = <h3 className="text-gray-dark dark:text-white font-bold text-xl pr-2">{title}</h3>

    return (
        <div className="mx-2 my-6">
            <div
                className="flex flex-col rounded-lg shadow w-90vw max-w-lg hover:shadow-lg quick-transition card-pop transform-gpu hover:scale-102 tab-focus dark:tab-focus-dark"
                tabIndex={0}
            >
                {!image ? (
                    <div className="flex bg-gray-dark dark:bg-field-dark rounded-t-lg h-80 font-bold text-white text-center">
                        <h3 className="m-auto text-3xl select-none">{title}</h3>
                    </div>
                ) : (
                    <div className="flex bg-card dark:bg-black rounded-t-lg h-80 font-bold text-white text-center select-none overflow-hidden">
                        <LazyImage imageURL={image} alt={title} width={570} height={320} />
                    </div>
                )}
                <div className="flex flex-col bg-card dark:bg-black rounded-b-lg p-4">
                    <div className="flex flex-row">
                        {liveLink && (
                            <a
                                className="flex flex-row hover:text-accent quick-transition"
                                href={liveLink}
                                rel="noopener noreferrer"
                                target="_blank"
                                onMouseOver={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {titleElement}
                                <i
                                    className={`gg-link my-auto quick-transition${
                                        isHovered ? ' text-accent' : ' text-background'
                                    }`}
                                />
                            </a>
                        )}
                        {!liveLink && titleElement}
                    </div>
                    <p className="dark:text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard
