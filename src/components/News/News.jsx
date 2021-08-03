import React from 'react'
import {Grid, Card, CardContent} from '@material-ui/core';
import hot from '../../assets/images/hot.jpg'
import pomo from '../../assets/images/pomo.jpg'


import './Styles.css'
import useStyles from './Styles'

const News = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.toolbar}/>

        <h4 className='reason-head'>News</h4>
        <h3 className='why-head'>Lastest News</h3>
             <Grid container  justify="center" md={12}  spacing={2}>
                   
                    <Grid  md={4}    >
                        <Grid container  justify="space-evenly" md={12} spacing={2}>
                
                            <Grid className={classes.test} item xs={12}     md={12} >
                              
                                  <img className='image' src={hot} />
                                  <p className='food-name'>Spain Appetizer</p>
                               <p>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                maximus scelerisque ipsum nec commodo
                                </p>
                                <p className='read'>Read more</p>
                                  
                            </Grid> 
                        </Grid>
                        
                    </Grid>
                    
                    <Grid  md={4}    >
                        <Grid container  justify="space-evenly" md={12} spacing={2}>
                
                            <Grid className={classes.test} item xs={12}     md={12} >
                              
                                  <img className='image' src={pomo} />
                                  <p className='food-name'>Wine and Cheese</p>
                               <p>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                maximus scelerisque ipsum nec commodo
                                </p>
                                <p className='read'>Read more</p>
                                  
                            </Grid> 
                        </Grid>
                        
                    </Grid>
                    
                    <Grid  md={4}    >
                        <Grid container  justify="space-evenly" md={12} spacing={2}>
                
                            <Grid className={classes.test} item xs={12}     md={12} >
                              
                                  <img className='image' src={pomo} />
                                  <p className='food-name'>Cup of Coffee</p>
                               <p>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                maximus scelerisque ipsum nec commodo
                                </p>
                                <p className='read'>Read more</p>
                                  
                            </Grid> 
                        </Grid>
                        
                    </Grid>
                    
                    
                    
            </Grid>
        </>
    )
}

export default News
