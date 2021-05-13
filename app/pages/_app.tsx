import { FormspreeProvider } from '@formspree/react'
import type { AppProps } from 'blitz'
import { ThemeProvider } from 'next-themes'

import '../core/styles/index.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <FormspreeProvider project="1519626967953964241">
            <ThemeProvider attribute="class" defaultTheme="system">
                <Component {...pageProps} />
            </ThemeProvider>
        </FormspreeProvider>
    )
}

export default App
