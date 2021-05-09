import React from 'react'

type LabelProps = {
    children: React.ReactNode
    htmlFor: string
}

const Label = ({ children, htmlFor }: LabelProps) => {
    return (
        <label
            className="block uppercase text-gray-dark dark:text-white font-bold text-sm tracking-wide mb-2"
            htmlFor={htmlFor}
        >
            {children}
        </label>
    )
}

export default Label
