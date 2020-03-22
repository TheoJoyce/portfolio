export default function AboutMe() {
    function projectCard(i: number, imageURL: string, title: string, description: string, liveURL: string, githubURL: string) {
        return (
            <div key={i} className="bg-white shadow w-11/12 md:w-1/4 md:max-w-screen-lg mx-auto rounded-lg my-4 mx-2 transition duration-100 ease-in-out transform md:hover:-translate-y-px">
                <div className="bg-gray-dark w-full rounded-lg rounded-b-none pf-img-ph" style={{ backgroundImage: `url(${imageURL})` }} />
                <div className="px-6 py-4">
                <h2 className="font-bold text-gray-darker text-xl mb-2">{title}</h2>
                    <p className="text-gray-dark">
                        {description}
                    </p>
                </div>
                <div className="flex justify-end px-6 py-4">
                    {imageURL !== "" ?
                        <div>
                            <a className="inline-block mr-4" href={liveURL} target="_blank" rel="noopener" title="Live Project URL">
                                <i data-feather="link"/>
                            </a>
                            <a className="inline-block" href={githubURL} target="_blank" rel="noopener" title="GitHub Project URL">
                                <i data-feather="github"/>
                            </a>
                        </div>
                        :
                        <div>
                            <span className="inline-block opacity-50 cursor-not-allowed mr-4">
                                <i data-feather="link"/>
                            </span>
                            <span className="inline-block opacity-50 cursor-not-allowed">
                                <i data-feather="github"/>
                            </span>
                        </div>
                    }
                </div>
            </div>
        )
    }

    const projects = [
        {
            imageURL: "https://res.cloudinary.com/theojoyce/image/upload/v1584841728/AspenFinance_neqlqy.jpg",
            title: "Aspen Finance",
            description: "Savings and budgeting platform",
            liveURL: "https://aspen.theojoyce.com/",
            githubURL: "https://github.com/TheoJoyce/smart-credit"
        },
        {
            imageURL: "",
            title: "Project #2 TBD",
            description: "TBD",
            liveURL: "",
            githubURL: ""
        },
        {
            imageURL: "",
            title: "Project #3 TBD",
            description: "TBD",
            liveURL: "",
            githubURL: ""
        }
    ];

    return(
        <div className="w-full clipped">
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
            <div className="p-2" />
            <div className="flex flex-row flex-wrap">
                {projects.map((v, i) =>
                    projectCard(i, v.imageURL, v.title, v.description, v.liveURL, v.githubURL)
                )}
            </div>
            <div className="p-4" />
        </div>
    );
}