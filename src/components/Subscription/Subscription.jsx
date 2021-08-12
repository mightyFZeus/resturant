import React from 'react'
import {Grid, InputLabel, FormControl, OutlinedInput, InputAdornment} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from './Styles'
import './Styles.css'

const Subscription = () => {
    const classes = useStyles()
    return (
        <>
            <p className='sub'>Subscription</p>
                <p className='update'>Do you want to Get Updates?</p>
            <Grid container justifyContent='center'>
                
                <Grid item sm={12} md={6}>
                   
                    <FormControl fullWidth className={classes.text} variant="outlined">
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <OutlinedInput
                    
                        id="email"
                        endAdornment={<InputAdornment style={{ marginLeft:'3em'}}  ><ArrowForwardIcon fontSize='large' style={{color:'#06B025'}} />
                        </InputAdornment>}
                        labelWidth={60}
                    />
                    </FormControl >
            </Grid>
            </Grid>  
        </>
    )
}

export default Subscription
