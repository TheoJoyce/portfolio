import React from 'react'
import { useForm } from '@formspree/react'
import Label from './form/Label'
import Input from './form/Input'
import TextArea from './form/TextArea'
import Form from './form/Form'
import FormButton from './form/FormButton'

const Contact = () => {
    const [state, handleSubmit] = useForm('contact')

    return (
        <section className="flex flex-col" id="contact">
            <div className="flex pt-24 md:pt-0 pb-24">
                {state.succeeded ? (
                    <div className="flex flex-col w-full max-w-95vw md:max-w-screen-sm bg-card dark:bg-card-dark rounded-lg shadow mx-auto p-4 sm:p-8 quick-transition card-pop">
                        <h2 className="text-center text-gray-dark dark:text-white font-bold">
                            Message sent! I will get back to you ASAP.
                        </h2>
                    </div>
                ) : (
                    <Form id="contact-form" handleSubmit={handleSubmit}>
                        <h1 className="font-bold text-3xl text-gray-dark dark:text-white mx-auto pb-6">Contact Me</h1>
                        <div className="px-3 mb-6">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="John Smith" errors={state.errors} />
                        </div>
                        <div className="px-3 mb-6">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" errors={state.errors} />
                        </div>
                        <div className="px-3 mb-6">
                            <Label htmlFor="message">Message</Label>
                            <TextArea id="message" placeholder="Your message here..." errors={state.errors} />
                        </div>
                        <div className="px-3 mb-6">
                            <div className="flex justify-end">
                                <FormButton submitting={state.submitting} />
                            </div>
                        </div>
                    </Form>
                )}
            </div>
        </section>
    )
}

export default Contact
