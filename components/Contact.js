import React, { Component } from 'react'

class Contact extends Component {
    state = {
        "emailSent": false,
        "email": "",
        "message": "",
        "invalidEmail": false,
        "blankMessage": false,
        "formValid": false
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateForm = () => {
        const { email, message } = this.state;

        const invalidEmail = !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
        const blankMessage = !message.trim();

        this.setState({ 
            invalidEmail,
            blankMessage,
            formValid: !invalidEmail && !blankMessage
        });
    }

    sendEmail = e => {
        e.preventDefault();

        this.validateForm();

        //TODO: Implement SendGrid
    }

    render() {
        return(
            <div className="bg-black h-screen">
                <h1 className="font-bold text-white contact-title text-center p-4">Contact Me</h1>
                {
                    this.state.formValid ? 
                        <div className="bg-white p-8 max-w-lg mx-auto mt-32 rounded">
                            <p className="font-semibold text-center">Thank you for emailing me, I will get back to you soon!</p>
                        </div>
                    :
                        <form className="p-8 max-w-lg mx-auto mt-32" onSubmit={this.sendEmail}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-white font-bold mb-2">
                                    Email
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="email" 
                                    name="email"
                                    type="email"
                                    placeholder="Email" 
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                <p className="text-red-500 text-xs italic font-bold">{ this.state.invalidEmail ? "Please input a valid email" : "" }</p>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-white font-bold mb-2">
                                    Message
                                </label>
                                <textarea 
                                    className="shadow appearance-none border rounded w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline message-textarea" 
                                    id="message"
                                    name="message"
                                    cols="10" 
                                    placeholder="Your message here..."
                                    value={this.state.message}
                                    onChange={this.onChange}
                                />
                                <p className="text-red-500 text-xs italic font-bold">{ this.state.blankMessage ? "Please type a message before sending" : "" }</p>
                            </div>
                            <div className="flex justify-end w-full">
                                <button className="bg-white hover:bg-black hover:text-white border-2 border-white font-bold py-2 px-6 rounded shadow">
                                    Send
                                </button>
                            </div>
                        </form>
                    }
            </div>
        );
    }
}

export default Contact;