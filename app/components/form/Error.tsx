import React from 'react'
import { ValidationError } from '@formspree/react'
import { ErrorPayload } from '@formspree/react/dist/types/src/types'

type ErrorProps = {
    field: string
    errors: ErrorPayload[]
}

const Error = ({ field, errors }: ErrorProps) => {
    const getPrefix = (): string => {
        return field.charAt(0).toUpperCase() + field.slice(1)
    }

    return (
        <div className="font-bold text-sm text-error italic mt-1">
            <ValidationError field={field} prefix={getPrefix()} errors={errors} />
        </div>
    )
}

export default Error
