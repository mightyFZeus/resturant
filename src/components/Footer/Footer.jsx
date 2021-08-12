import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './Styles'
import './Styles.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.toolbar} />
            <Grid className={classes.container} container justifyContent='center'>
                <Grid item sm={12} md={3}>
                    <p className='header'>Figo</p>
                    <p>Dont Miss to Subscribe to our Feeds</p>
                    <div className='icon-div'>
                        <TwitterIcon style={{color:'#06B025'}} />
                        <LinkedInIcon style={{color:'#06B025'}} />
                        <WhatsAppIcon style={{color:'#06B025'}} />
                        <InstagramIcon style={{color:'#06B025'}} />
                    </div>
                   
                </Grid>
                
                <Grid item sm={12} md={3}>
                    
                    <ul>
                    <p className='header'>Our Menu</p>
                        <li><p>Lunch</p></li>
                        <li><p>Terms of Use</p></li>
                        <li><p>Privacy Policy</p></li>
                    </ul>
                </Grid>
                <Grid justifyContent='center' item sm={12} md={3}>
                    
                    <ul>
                    <p className='header'>Links</p>
                        <li><p>About Us</p></li>
                        <li><p>Terms of Use</p></li>
                        <li><p>Privacy Policy</p></li>
                    </ul>
                </Grid>
                <Grid item sm={12} md={3}>
                   
                    <ul className='last'>
                    <p className='header'>Contact</p>
                        <li><p>+9015752977</p></li>
                        <li><p>bolarinolabisi36@gmail.com</p></li>
                        <li className='last'><p>Lagos, Nigeria</p></li>
                    </ul >
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
