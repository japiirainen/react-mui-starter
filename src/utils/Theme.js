import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

export const Dark = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: grey[300],
        },
        secondary: {
            main: grey[500],
        },
    },
})

export const Light = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: grey[100],
        },
        secondary: {
            main: '#ad1457',
        },
    },
})
