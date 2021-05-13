import { useEffect } from 'react'
import { Head, BlitzPage, GetStaticProps } from 'blitz'
import gqlClient from '../../db/index'
import { gql } from 'graphql-request'

import { initGA, logPageView } from '../core/utils/analytics'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Contact from '../components/Contact'
import Work from '../components/Work'

import { WorkData } from '../components/Work'

declare global {
    interface Window {
        GA_INITIALIZED: boolean
    }
}

const Index = ({ portfolioCardData }: { portfolioCardData: WorkData[] }) => {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
    }, [])

    return (
        <div className="bg-background dark:bg-black">
            <Head>
                <title>Theo Joyce | React Web Dev</title>
                <link rel="preconnect" href="https://www.google-analytics.com" />
                <link rel="preconnect" href="https://www.google.com" />
                <link rel="preconnect" href="https://www.google.ca" />
                <link rel="preconnect" href="https://stats.g.doubleclick.net" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#426cff" />
                <meta name="msapplication-TileColor" content="#426cff" />
                <meta name="theme-color" content="#ffffff"></meta>
                <meta name="Description" content="Hi I'm Theo." />
            </Head>
            <NavBar />
            <About />
            <Work portfolioCardData={portfolioCardData} />
            <Contact />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const defaultData = [
        {
            image: '',
            title: 'TBD',
            description: '',
            liveLink: '',
        },
    ]

    let portfolioCardData = defaultData

    try {
        const result = await gqlClient.request(
            gql`
                {
                    allWorks {
                        data {
                            image
                            title
                            description
                            liveLink
                        }
                    }
                }
            `,
        )
        
        const { data }: { data: WorkData[] } = result.allWorks
        portfolioCardData = data
    } finally {
        return {
            props: {
                portfolioCardData,
            },
            revalidate: 3600,
        }
    }
}

Index.suppressFirstRenderFlicker = true

export default Index
