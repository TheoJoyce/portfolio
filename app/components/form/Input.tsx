import React, { useState, ChangeEvent } from 'react'
import { ErrorPayload } from '@formspree/react/dist/types/src/types'
import Error from './Error'

type InputProps = {
    id: string
    type?: 'text' | 'email'
    errors: ErrorPayload[]
    placeholder?: string
    name?: string
}

export const defaultInputClasses =
    'appearance-none block w-full bg-field dark:bg-field-dark text-gray-dark dark:text-white shadow-sm rounded-lg border border-field dark:border-card-dark py-3 px-4 transition duration-150 ease-in-out transform-gpu focus:outline-none focus:scale-102 focus:shadow-lg'

const Input = ({ type = 'text', id, placeholder = '', name = id, errors }: InputProps) => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }

    return (
        <>
            <input
                className={defaultInputClasses}
                type={type}
                id={id}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            <Error field={id} errors={errors} />
        </>
    )
}

export default Input
