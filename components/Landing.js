
export default function Landing() {
    return(
        <div>
            <div className="h-screen bg-white bg-repeat" style={{ backgroundImage: "url(/dot-grid.png)" }}>
                <div className="text-center">
                    <div className="h-16"></div>
                    <img className="mx-auto rounded-full profile" src="/default-avatar.jpg"/>
                    <h1 className="text-gray-900 pt-4 name">Theo Joyce</h1>
                    <h2 className="text-gray-700 pb-4">Web Developer</h2>
                    <div className="flex shadow-md bg-gray-800 rounded h-12 w-56 mx-auto">
                        <span className="flex-grow">
                            <a target="_blank" href="https://reactjs.org/"><h2 className="mx-auto font-bold font-tech react-color text-3xl">Re</h2></a>
                        </span>
                        <span className="flex-grow">
                            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><h2 className="mx-auto font-bold font-tech js-color text-3xl" >JS</h2></a>
                        </span>
                        <span className="flex-grow">
                            <a target="_blank" href="https://expressjs.com/"><h2 className="mx-auto font-bold font-tech express-color text-3xl" >Ex</h2></a>
                        </span>
                        <span className="flex-grow">
                            <a target="_blank" href="https://www.postgresql.org/"><h2 className="mx-auto font-bold font-tech postgres-color text-3xl" >PS</h2></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}