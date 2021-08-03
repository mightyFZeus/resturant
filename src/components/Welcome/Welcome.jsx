import React from 'react'
import {Grid} from '@material-ui/core'
import chef1 from '../../assets/images/chef1.png'
import './Styles.css'
import useStyles from './Styles'

const Header = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.toolbar}/>
             <Grid container  justify="center" md={12} spacing={2}>
                    <Grid md={6}  className={classes.test}>
                        <Grid container  justify="space-evenly" md={12} spacing={1}>
                
                            <Grid  item xs={12} lg={2}    md={12} >
                                <img className='road-to' src={chef1}  alt='Road to knowledge' />
                            </Grid> 
                        </Grid>
                </Grid>
                <Grid className={classes.test1}  item xs={12}  md={6} order={{ md: 1, lg: 2 }} >
                        <p className='welcome'>Welcome</p>
                      <h4 className='welcome-head'>Welcome to Figo  Resturant</h4>
                      <p >
                          Quickly predominate standard complaint architecture and may have prospective internal or organic resources
                      </p>
                      <p >
                          Quickly predominate standard complaint architecture and may have prospective internal or organic resources
                      </p>
                      <button className='explore-btn'>Explore Our Story</button>

                    
                    
                       
                    
                        
                    </Grid>
            </Grid>
        </>
    )
}

export default Header
