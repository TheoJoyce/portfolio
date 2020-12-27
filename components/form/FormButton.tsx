import React from 'react'

type FormButton = {
    submitting: boolean
}

const FormButton = ({ submitting }: FormButton) => {
    return (
        <button
            className="tracking-wide font-bold rounded-lg shadow px-6 py-3 quick-transition duration-5 bg-accent dark:bg-field-dark text-white hover:bg-card dark:hover:bg-accent hover:text-accent dark:hover:text-white hover:shadow-lg"
            type="submit"
            disabled={submitting}
        >
            {submitting ? <i className="gg-spinner-alt" /> : 'Send'}
        </button>
    )
}

export default FormButton
