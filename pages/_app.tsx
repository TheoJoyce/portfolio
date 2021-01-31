import React from 'react'
import { FormspreeProvider } from '@formspree/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '../styles/index.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <FormspreeProvider project="1519626967953964241">
            <ThemeProvider attribute="class" defaultTheme="system">
                <React.StrictMode>
                    <Component {...pageProps} />
                </React.StrictMode>
            </ThemeProvider>
        </FormspreeProvider>
    )
}

export default App
