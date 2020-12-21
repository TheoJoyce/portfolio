import React, { useState, useEffect } from 'react'
import LazyImage from './LazyImage'

type PortfolioCardProps = {
    image: string
    title: string
    description: string
    liveLink: string
}

const PortfolioCard = ({ image, title, description, liveLink }: PortfolioCardProps) => {
    const [imageFailed, setImageFailed] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const img = new Image()

        img.onerror = () => setImageFailed(true)
        img.src = `https://res.cloudinary.com/theojoyce/image/upload/${image}`
    }, [setImageFailed])

    return (
        <div className="mx-2 my-6">
            <div className="flex flex-col rounded-lg shadow hover:shadow-lg quick-transition card-pop proj-card transform-gpu hover:scale-102">
                {imageFailed ? (
                    <div className="flex bg-gray-dark h-32 rounded-t-lg proj-card-image font-bold text-white text-center">
                        <h3 className="m-auto text-3xl select-none">{title}</h3>
                    </div>
                ) : (
                    <div className="flex bg-white h-32 rounded-t-lg proj-card-image font-bold text-white text-center select-none overflow-hidden">
                        <LazyImage imageURL={image} width={570} height={320} />
                    </div>
                )}
                <div className="flex flex-col bg-white rounded-b-lg p-4">
                    <div className="flex flex-row">
                        <a
                            className="flex flex-row text-gray-dark hover:text-accent quick-transition"
                            href={liveLink}
                            rel="noopener noreferrer"
                            target="_blank"
                            onMouseOver={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <h3 className="font-bold text-xl pr-2">{title}</h3>
                            {liveLink && (
                                <i
                                    className={`gg-link my-auto quick-transition${
                                        isHovered ? ' text-accent' : ' text-background'
                                    }`}
                                />
                            )}
                        </a>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard
