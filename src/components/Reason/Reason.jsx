import React from 'react'
import {Grid, Card, CardContent} from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

import './Styles.css'
import useStyles from './Styles'

const Reason = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.toolbar}/>

        <h4 className='reason-head'>Reason</h4>
        <h3 className='why-head'>Why Choose Us</h3>
             <Grid container   md={12}  spacing={2}>
                    <Grid item  md={4} sm={4}    >
                        
                              <Card className={classes.test}>
                                  <CardContent>
                                      <MenuBookIcon  style={{color:'#06B025', fontSize:'80px'}}/>
                                  <h4  >Various Menu</h4>
                               <p>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                maximus scelerisque ipsum nec commodo
                                </p>
                                  </CardContent>
                              </Card>
                           
                        
                    </Grid>
                    <Grid  item md={4} sm={4}   >
                        
                              <Card className={classes.test}>
                                  <CardContent>
                                  <DirectionsBikeIcon  style={{color:'#06B025', fontSize:'80px'}}/>
                                  <h4>Pocket Friendly Delivery</h4>
                               <p>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                maximus scelerisque ipsum nec commodo
                                </p>
                                  </CardContent>
                              </Card>
                            
                        
                    </Grid>
                    
                    
                    <Grid  md={4}  sm={4} item  >
                        
                              <Card className={classes.test}>
                                  <CardContent>
                                  <MonetizationOnOutlinedIcon  style={{color:'#06B025', fontSize:'80px', }}/>
                                  <h4>Best Offers</h4>
                               <p>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                maximus scelerisque ipsum nec commodo
                                </p>
                                  </CardContent>
                              </Card>
                          
                        
                    </Grid> 
            </Grid>
        </>
    )
}

export default Reason
