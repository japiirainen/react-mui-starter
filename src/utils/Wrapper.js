import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { Dark, Light } from './Theme'
import { App } from '../App'

export const Wrapper = () => {
    const [theme, setTheme] = useState(Light)

    return (
        <Router>
            <CssBaseline>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </CssBaseline>
        </Router>
    )
}
