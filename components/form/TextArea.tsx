import React, { useState, ChangeEvent } from 'react'
import { ErrorPayload } from '@formspree/react/dist/types/src/types'
import Error from './Error'
import { defaultInputClasses } from './Input'

type TextAreaProps = {
    id: string
    errors: ErrorPayload[]
    placeholder?: string
    name?: string
}

const TextArea = ({ id, placeholder = '', name = id, errors }: TextAreaProps) => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setValue(e.target.value)
    }

    return (
        <>
            <textarea
                className={`${defaultInputClasses} h-48 resize-none`}
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

export default TextArea
