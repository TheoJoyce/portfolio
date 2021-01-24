import React, { useEffect } from 'react'
import { FormspreeProvider } from '@formspree/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '../styles/index.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <FormspreeProvider project="1519626967953964241">
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </FormspreeProvider>
    )
}

export default App
