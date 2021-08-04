import React from 'react'
import {Grid, Card, CardContent, CardMedia} from '@material-ui/core';
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
        <h5 className='why-head'>Lastest News</h5>
             <div className={classes.root}>
             <Grid container  spacing={3}>
                   <Grid item xs={6} sm={3} md={3}  >
                                <Card className={classes.test}>
                                    <CardContent className={classes.card}>
                                         <CardMedia
                                           className={classes.media}
                                           image={hot}
                                           title="Contemplative Reptile"
                                       />
                                          
                                       <p className='food-name'>Spain Appetizer</p>
                                       <p className='food-text'>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                       maximus scelerisque ipsum nec commodo
                                       </p>
                                       <p className='read'>Read more</p> 
                                    </CardContent>
                                </Card>
                   </Grid>   
                   <Grid item xs={6} sm={3} md={3}  >
                                <Card className={classes.test}>
                                    <CardContent className={classes.card}>
                                         <CardMedia
                                           className={classes.media}
                                           image={pomo}
                                           title="Contemplative Reptile"
                                       />
                                          
                                       <p className='food-name'>Spain Appetizer</p>
                                       <p className='food-text'>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                       maximus scelerisque ipsum nec commodo
                                       </p>
                                       <p className='read'>Read more</p> 
                                    </CardContent>
                                </Card>
                   </Grid> 
                   <Grid item xs={6} sm={3} md={3}  >
                                <Card className={classes.test}>
                                    <CardContent className={classes.card}>
                                         <CardMedia
                                           className={classes.media}
                                           image={pomo}
                                           title="Contemplative Reptile"
                                       />
                                          
                                       <p className='food-name'>Spain Appetizer</p>
                                       <p className='food-text'>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                       maximus scelerisque ipsum nec commodo
                                       </p>
                                       <p className='read'>Read more</p> 
                                    </CardContent>
                                </Card>
                   </Grid> 
                   <Grid item xs={6} sm={3} md={3}  >
                                <Card className={classes.test}>
                                    <CardContent className={classes.card}>
                                         <CardMedia
                                           className={classes.media}
                                           image={hot}
                                           title="Contemplative Reptile"
                                       />
                                          
                                       <p className='food-name'>Spain Appetizer</p>
                                       <p className='food-text'>Etiam feugiat elefiend est, odio tempor vitaevivamus
                                       maximus scelerisque ipsum nec commodo
                                       </p>
                                       <p className='read'>Read more</p> 
                                    </CardContent>
                                </Card>
                   </Grid>  
                   
                   
           </Grid>
             </div>
        </>
    )
}

export default News
