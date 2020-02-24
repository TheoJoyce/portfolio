import React, { Component, ReactHTMLElement, ChangeEvent, FormEvent } from 'react'

class Contact extends Component {
    state = {
        "emailSent": false,
        "sending": false,
        "sendError": "",
        "email": "",
        "message": "",
        "blankMessage": false
    }

    onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateForm = async () => {
        const blankMessage = !this.state.message.trim();

        this.setState({ 
            blankMessage
        });
    }

    handleResponse = (status: number, m: string) => {
        if (status === 200) {
            this.setState({ 
                emailSent: true, 
                sending: false,
                email: "",
                message: "",
                sendError: ""
            });
        } else {
            this.setState({
                emailSent: false,
                sending: false,
                sendError: m
            });
        }
    }

    sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await this.validateForm();

        if (!this.state.blankMessage) {
            this.setState({ sending: true });

            const { email, message } = this.state;
            const res = await fetch('api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, message})
            });

            const text = await res.text();
            this.handleResponse(res.status, text);
        }
    }

    render() {
        return(
            <div className="bg-black h-screen">
                <h1 className="font-bold text-white contact-title text-center p-4">Contact Me</h1>
                {
                    this.state.emailSent ? 
                        <div className="bg-white p-8 max-w-lg mx-auto mt-32 rounded">
                            <p className="font-semibold text-center">Thank you for emailing me, I will get back to you soon.</p>
                        </div>
                    :
                        <form className="p-8 max-w-lg mx-auto mt-32" onSubmit={this.sendEmail}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-white font-bold mb-2">
                                    Email
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline" 
                                    id="email" 
                                    name="email"
                                    type="email"
                                    placeholder="Email" 
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-white font-bold mb-2">
                                    Message
                                </label>
                                <textarea 
                                    className="shadow appearance-none border rounded w-full h-48 py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline message-textarea whitespace-prewrap" 
                                    id="message"
                                    name="message"
                                    cols={10}
                                    placeholder="Your message here..."
                                    value={this.state.message}
                                    onChange={this.onChange}
                                />
                                <p className="text-alert text-xs italic font-bold">{ this.state.blankMessage ? "Please type a message before sending" : "" }</p>
                                <p className="text-alert text-xs italic font-bold">{ this.state.sendError ? this.state.sendError : "" }</p>
                            </div>
                            <div className="flex justify-end w-full">
                                { this.state.sending ?
                                    <button className="bg-black border-2 border-white py-2 px-6 rounded shadow">
                                        <img src="/icons/loader.svg" className="loading-spinner" alt="Loading..."/>
                                    </button>
                                :
                                    <button className="bg-white hover:bg-black hover:text-white border-2 border-white font-bold py-2 px-6 rounded shadow">
                                        Send
                                    </button>
                                }
                            </div>
                        </form>
                    }
            </div>
        );
    }
}

export default Contact;