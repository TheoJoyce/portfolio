import '../styles/index.css'

import Head from 'next/head'

import Landing from '../components/Landing'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'

export default () => {
    return (
        <div>
            <Head>
                <title>Theo Joyce | React Web Dev</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu&display=swap" rel="stylesheet"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5061ff"/>
                <meta name="msapplication-TileColor" content="#5061ff"/>
                <meta name="theme-color" content="#5061ff"></meta>
            </Head>
            <Landing />
            <AboutMe />
            <Contact />
        </div>
    );
}