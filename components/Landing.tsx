
export default function Landing() {
    return(
        <div>
            <div className="h-screen bg-white bg-repeat" style={{ backgroundImage: "url(https://res.cloudinary.com/theojoyce/image/upload/v1582232684/dot-grid.jpg)" }}>
                <div className="text-center">
                    <div className="h-16"></div>
                    <img className="mx-auto rounded-full profile" src="https://res.cloudinary.com/theojoyce/image/upload/v1584910859/Memoji.jpg" alt="Picture of me" />
                    <h1 className="text-darker pt-4 name">Theo Joyce</h1>
                    <h2 className="text-dark pb-4">Web Developer</h2>
                    <div className="flex shadow-md bg-white rounded h-12 w-32 mx-auto transition duration-100 ease-in-out transform md:hover:-translate-y-px">
                        <span className="flex-grow p-3">
                            <a target="_blank" rel="noopener" href="https://github.com/TheoJoyce" title="Github">
                                <i data-feather="github" className="mx-auto"/>
                            </a>
                        </span>
                        <span className="flex-grow p-3">
                            <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/theojoyce/" title="LinkedIn">
                                <i data-feather="linkedin" className="mx-auto linkedin-icon"/>
                            </a>
                        </span>
                    </div>
                    <a 
                        className="inline-block shadow-md bg-white border rounded my-4 py-2 px-6 mx-auto font-bold transition duration-100 ease-in-out transform md:hover:-translate-y-px"
                        href="https://freelance.theojoyce.com"
                        target="_blank"
                        rel="noopener"
                    >
                        Freelance
                    </a>
                </div>
            </div>
        </div>
    )
}