import React from 'react'

type PillButtonProps = {
    children: React.ReactNode
}

const PillButton = ({ children }: PillButtonProps) => {
    return (
        <button
            className="bg-accent py-3 px-6 sm:py-2 sm:px-4 rounded-full font-bold text-white text-lg md:text-base tracking-wide shadow transition duration-150 ease-in-out hover:bg-white hover:text-accent hover:shadow-lg"
            tabIndex={0}
        >
            {children}
        </button>
    )
}

export default PillButton
