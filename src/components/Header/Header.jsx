import React from 'react'
import {Grid, } from '@material-ui/core'
import pizzza from '../../assets/images/pizzza.jpg'
import './Styles.css'
import useStyles from './Styles'

import {Link} from 'react-router-dom'
import Welcome from '../Welcome/Welcome'
import Reason from '../Reason/Reason'
import History from '../History/History'
import News from '../News/News'
import Rice from '../Explore/Breastfast/Rice'

const Header = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.toolbar}/>
             <Grid className={classes.main}  container   spacing={2}>
                    <Grid  item xs={12} sm={6}  md={6} >
                      <p className='header'>All in Good Taste  Food with Figo</p >
                      <p >
                          Quickly predominate standard complaint architecture and may have prospective internal or organic resources
                      </p>

                      <form>
                          <input type="email" placeholder='Enter Your Address' />
                          <Link to='/menu'>
                          <span><button className='header-btn'>View Menu </button></span>
                          </Link>
                          
                      </form>
                    
                       
                    
                        
                    </Grid>
                    <Grid item xs={12} sm={6}  md={6} >    
                        <img className='pizza' src={pizzza}  alt='Road to knowledge' />          
                    </Grid>
            </Grid>
            <Welcome />
            <Reason />
            <History />
            <News />
            <Rice />
        </>
    )
}

export default Header
