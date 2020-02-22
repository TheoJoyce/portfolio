export default function AboutMe() {
    return(
        <div className="h-screen w-full clipped">
            <div className="p-24"/>
            <div className="bg-white shadow md:w-full md:max-w-screen-sm w-11/12 p-8 mx-auto rounded-lg">
                <h1 className="text-center text-gray-dark text-3xl font-bold pb-4">👋</h1>
                <p>I'm a React web developer with a passion for programming. I love to learn new things about technology and web development every day.</p>
            </div>
            <div className="p-4" />
            <div className="bg-alert shadow md:w-full md:max-w-screen-sm w-11/12 p-4 mx-auto rounded-lg">
                <p className="text-white text-center font-semibold">My portfolio projects are currently under development</p>
            </div>
        </div>
    );
}