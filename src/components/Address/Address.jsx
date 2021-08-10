import React, {useState, useContext} from 'react'
import useStyles from './Styles'
import './Styles.css'
import cartContext from '../../Context/CartContext';
import {Grid, Button, TextField, Box} from '@material-ui/core'

const initialValues = {
    name: "",
    address: "",
    number: "",
    email: ""
  };

const Address = () => {
    const classes =  useStyles()
    const { sumTotal} = useContext(cartContext)
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        //const name = e.target.name
        //const value = e.target.value
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value
        });
      };




    return (
        <>
           <Grid container className={classes.about} justify="center" md={12} spacing={2}>
                
                   
                <Grid md={6}>
                    <Grid container  justify="space-evenly" md={12} spacing={1}>
             
                        <Grid   item xs={12} lg={2}   md={12} >
                            <Box className={classes.box}>
                                <div className={classes.toolbar} />

                                <div className={classes.formDiv}>
                                <form className="contact-form" >
                                    <TextField
                                    className={classes.fieldText}
                                    label="Your Name"
                                    variant="outlined"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    />
                                    <br />
                                    <TextField
                                    className={classes.fieldText}
                                    label="Your Email"
                                    type="email"
                                    variant="outlined"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    />
                                    <br />
                                    <TextField
                                    className={classes.fieldText}
                                    label="Your Address"
                                    
                                    variant="outlined"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    />
                                    <br />
                                    <TextField
                                    className={classes.fieldText}
                                    label="Phone Numner"
                                    variant="outlined"
                                    
                                    type='number'
                                    name="number"
                                    value={values.number}
                                    onChange={handleChange}
                                    />
                                    <Button type="submit" className={classes.button}>
                                    Send
                                    </Button>
                                </form>
                                </div>
                            </Box>
                        </Grid> 
                    </Grid>
            </Grid>
          </Grid>
        </>
    )
}

export default Address
