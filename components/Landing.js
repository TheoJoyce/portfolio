
export default function Landing() {
    return(
        <div>
            <div className="h-screen bg-white bg-repeat" style={{ backgroundImage: "url(https://res.cloudinary.com/theojoyce/image/upload/v1582232684/dot-grid.webp)" }}>
                <div className="text-center">
                    <div className="h-16"></div>
                    <img className="mx-auto rounded-full profile" src="https://res.cloudinary.com/theojoyce/image/upload/v1582380989/default-avatar.webp" alt="Picture of me" />
                    <h1 className="text-darker pt-4 name">Theo Joyce</h1>
                    <h2 className="text-dark pb-4">Web Developer</h2>
                    <div className="flex shadow-md bg-white rounded h-12 w-32 mx-auto transition duration-100 ease-in-out transform md:hover:-translate-y-px">
                        <span className="flex-grow p-3">
                            <a target="_blank" rel="noreferrer" href="https://github.com/TheoJoyce" title="Github">
                                <i data-feather="github" className="mx-auto"></i>
                            </a>
                        </span>
                        <span className="flex-grow p-3">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/theojoyce/" title="LinkedIn">
                                <i data-feather="linkedin" className="mx-auto linkedin-icon"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}