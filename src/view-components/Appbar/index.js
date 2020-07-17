import React, { useState } from 'react'
import clsx from 'clsx'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import { AppbarDrawer } from '../Drawer/'
import { useStyles } from './AppbarStyles'

export const Appbar = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        console.log('open')
        setOpen(true)
    }
    const handleDrawerClose = () => {
        console.log('close')
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar variant="dense">
                    <IconButton
                        edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>
            <AppbarDrawer isOpen={open} handleClose={handleDrawerClose} />
        </div>
    )
}
