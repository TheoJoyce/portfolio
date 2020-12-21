import React from 'react'
import { FormspreeProvider } from '@formspree/react'
import type { AppProps } from 'next/app'

import '../styles/index.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <FormspreeProvider project="1519626967953964241">
            <Component {...pageProps} />
        </FormspreeProvider>
    )
}

export default App
