import React from 'react'
import {Grid} from '@material-ui/core'
import pizzza from '../../assets/images/pizzza.jpg'
import './Styles.css'
import useStyles from './Styles'

const Header = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.toolbar}/>
             <Grid className={classes.main}  container  justify="center" md={12} spacing={2}>
                    <Grid  item xs={12}  md={6} >
                      <h2>All in Good Taste <br /> Food with Figo</h2>
                      <p >
                          Quickly predominate standard complaint architecture and may have prospective internal or organic resources
                      </p>

                      <form>
                          <input type="email" placeholder='Enter Your Address' />
                          <span><button>Get Started</button></span>
                      </form>
                    
                       
                    
                        
                    </Grid>
                    <Grid md={6}>
                        <Grid container  justify="space-evenly" md={12} spacing={1}>
                
                            <Grid  item xs={12} lg={2}   md={12} >
                                <img className='road-to' src={pizzza}  alt='Road to knowledge' />
                            </Grid> 
                        </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Header
