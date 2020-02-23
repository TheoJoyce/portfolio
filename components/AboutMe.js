export default function AboutMe() {
    return(
        <div className="h-screen w-full clipped">
            <div className="p-24"/>
            <div className="bg-white shadow md:w-full md:max-w-screen-sm w-11/12 p-8 mx-auto rounded-lg">
                <h1 className="text-center text-gray-dark text-3xl font-bold pb-4">👋</h1>
                <p>I'm a React web developer with a passion for programming. I love to learn new things about technology and web development every day.</p>
                <button className="text-white mx-auto mt-4 block rounded-full py-2 px-4 bg-button hover:bg-button-hover opacity-50 cursor-not-allowed">
                    <i data-feather="file-text" className="inline-block"/>
                    <span className="font-semibold align-text-top"> Resume</span>
                </button>
            </div>
            <div className="p-4" />
            <div className="bg-alert shadow md:w-full md:max-w-screen-sm w-11/12 p-4 mx-auto rounded-lg">
                <p className="text-white text-center font-semibold">My portfolio projects are currently under development</p>
            </div>
        </div>
    );
}