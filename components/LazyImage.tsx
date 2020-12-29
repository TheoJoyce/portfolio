import React from 'react'
import Image from 'next/image'

type LazyImageType = {
    className?: string
    imageURL: string
    alt: string
    width: number
    height: number
}

const LazyImage = ({ className = '', imageURL, alt, width, height }: LazyImageType) => {
    return (
        <Image
            className={className}
            src={imageURL}
            alt={alt}
            layout="fixed"
            width={width}
            height={height}
            objectFit="cover"
            loading="lazy"
        />
    )
}

export default LazyImage
