import React from 'react'

type PillButtonProps = {
    text: string
}

const PillButton = ({ text }: PillButtonProps) => {
    return (
        <button className="bg-accent py-2 px-4 rounded-full font-bold text-white tracking-wide shadow transition duration-150 ease-in-out hover:bg-white hover:text-accent hover:shadow-lg">
            {text}
        </button>
    )
}

export default PillButton
