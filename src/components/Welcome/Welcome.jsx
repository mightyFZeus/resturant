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
             <Grid className={classes.main} container   spacing={2}>
                    <Grid md={6}  className={classes.grid1}>
                        
                                <img className='road-to' src={chef1}  alt='Road to knowledge' />
                           
                </Grid>
                <Grid className={classes.grids2}  item xs={12}  md={6} order={{ md: 1, lg: 2 }} >
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
