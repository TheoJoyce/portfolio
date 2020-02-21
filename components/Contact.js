export default function Contact() {
    return(
        <div className="bg-black h-screen">
            <h1 className="font-bold text-white contact-title text-center p-4">Contact Me</h1>
            <div className="p-8 max-w-lg mx-auto mt-32">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-bold mb-2">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-white font-bold mb-2">
                        Message
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline message-textarea" id="message" cols="10" placeholder="Your message here..."/>
                </div>
                <div className="flex justify-end w-full">
                    <button className="bg-white hover:bg-black hover:text-white border-2 border-white font-bold py-2 px-6 rounded shadow">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}