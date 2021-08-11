import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './Styles'

const Footer = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.toolbar} />
            <Grid className={classes.container} container justifyContent='center'>
                <Grid item sm={6} md={3}>
                    <p>Figo</p>
                    <p>Dont Miss to Subscribe to our Feeds</p>
                </Grid>
                
                <Grid item sm={6} md={3}>
                    <p>Our Menu</p>
                    <ul>
                        <li>Lunch</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </Grid>
                <Grid item sm={6} md={3}>
                    <p>Links</p>
                    <ul>
                        <li>About Us</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </Grid>
                <Grid item sm={6} md={3}>
                    <p>Contact</p>
                    <ul>
                        <li>+9015752977</li>
                        <li>bolarinolabisi@gmail.com</li>
                        <li>Lagos, Nigeria</li>
                    </ul>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
