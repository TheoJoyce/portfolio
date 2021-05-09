import React, { FormEvent } from 'react'

type FormProps = {
    id: string
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
    children: React.ReactNode
}

const Form = ({ id, handleSubmit, children }: FormProps) => {
    return (
        <form
            id={id}
            className="flex flex-col w-full max-w-95vw md:max-w-screen-sm bg-card dark:bg-card-dark rounded-lg shadow mx-auto p-4 sm:p-8"
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    )
}

export default Form
