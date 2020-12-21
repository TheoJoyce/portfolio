import React, { useState, ChangeEvent } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const [state, handleSubmit] = useForm('contact')

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break
            case 'email':
                setEmail(e.target.value)
                break
            case 'message':
                setMessage(e.target.value)
                break
            default:
                break
        }
    }

    return (
        <section className="flex flex-col min-h-screen pt-24 pb-12 bg-background" id="contact">
            <div className="flex p-4 md:p-12 pt-24">
                {state.succeeded ? (
                    <div className="flex flex-col w-11/12 contact-card bg-card rounded-lg shadow mx-auto p-4 sm:p-8 quick-transition card-pop">
                        <h2 className="text-center text-gray-dark font-bold">
                            Message sent! I will get back to you ASAP.
                        </h2>
                    </div>
                ) : (
                    <form
                        id="contact-form"
                        className="flex flex-col w-11/12 contact-card bg-card rounded-lg shadow mx-auto p-4 sm:p-8"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="font-bold text-3xl text-gray-dark mx-auto pb-6">Contact Me</h1>
                        <div className="form-input-wrapper">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                id="name"
                                placeholder="John Smith"
                                name="name"
                                value={name}
                                onChange={onChange}
                            />
                            <span className="font-bold text-sm text-error italic">
                                <ValidationError field="name" prefix="Name" errors={state.errors} />
                            </span>
                        </div>
                        <div className="form-input-wrapper">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="form-input"
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                            <span className="font-bold text-sm text-error italic">
                                <ValidationError field="email" prefix="Email" errors={state.errors} />
                            </span>
                        </div>
                        <div className="form-input-wrapper">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="form-input form-textarea"
                                id="message"
                                placeholder="Your message here..."
                                name="message"
                                value={message}
                                onChange={onChange}
                            />
                            <span className="font-bold text-sm text-error italic">
                                <ValidationError field="message" prefix="A message" errors={state.errors} />
                            </span>
                        </div>
                        <div className="form-input-wrapper">
                            <div className="flex justify-end">
                                <button className="button button-white" type="submit" disabled={state.submitting}>
                                    {state.submitting ? <i className="gg-spinner-alt" /> : 'Send'}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </section>
    )
}

export default Contact
