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
import Subscription from '../Subscription/Subscription'
import Footer from '../Footer/Footer'


const Header = () => {
    const classes = useStyles()
    return (
        <>
        <div
         
        >
        <div className={classes.toolbar}/>
             <Grid className={classes.main}  container   spacing={2}>
                    <Grid  item xs={12} sm={12}  md={6} >
                      <p className='header-text'>Food With Figo, All in Good Tatse</p >
                      <p >
                          Quickly predominate standard complaint architecture and may have prospective internal or organic resources
                      </p>    
                          <Link to='/menu'>
                          <button className='header-btn'>View Menu </button>
                          </Link>  
                          
                    </Grid>
                    <Grid item xs={12} sm={12}  md={6} >    
                        <img className='pizza' src={pizzza}  alt='Road to knowledge' />          
                    </Grid>
            </Grid>
            <Welcome />
            <Reason />
            <History />
            <News />
            <Rice />
            <Subscription />
            <Footer />
        </div>
        </>
    )
}

export default Header
