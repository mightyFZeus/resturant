import React from 'react'
import {Grid} from '@material-ui/core'
import sandwich from '../../assets/images/sandwich.jpg'
import './Styles.css'
import useStyles from './Styles'

const History = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.toolbar}/>
             <Grid className={classes.main}  container   md={12} spacing={2}>
                    <Grid  item xs={12} sm={6}  md={6} >
                        <p className='history-head'>History of Figo</p>
                      <p className='history-cook'>We cook Tradition & Family Recipes</p>
                      <p >
                          Quickly predominate standard complaint architecture and may have prospective internal or organic resources
                      </p>
                      <p >
                          Quickly predominate standard complaint architecture and may have prospective internal or organic resources
                      </p>
                      <button className='explore-btn'>Explore Our Story</button>

                    </Grid>
                    
                    <Grid item  sm={6}    md={6} >
                        <img className='history-img' src={sandwich}  alt='Road to knowledge' /> 
                    </Grid>
            </Grid>
        </>
    )
}

export default History
