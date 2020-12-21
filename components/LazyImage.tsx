import React from 'react'
import Image from 'next/image'

type LazyImageType = {
    className?: string
    imageURL: string
    width: number
    height: number
}

const LazyImage = ({ className = '', imageURL, width, height }: LazyImageType) => {
    return (
        <Image
            className={className}
            src={imageURL}
            layout="fixed"
            width={width}
            height={height}
            objectFit="cover"
            loading="lazy"
        />
    )
}

export default LazyImage
