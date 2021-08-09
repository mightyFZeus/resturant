import React  from 'react'
import {Grid,  } from '@material-ui/core'

import uuid from 'react-uuid'
import sandwich from '../../assets/images/sandwich.jpg'
import pomo from '../../assets/images/pomo.jpg'
import hot from '../../assets/images/hot.jpg'
import pizzza from '../../assets/images/pizzza.jpg'
import useStyles from './Styles'
import './Styles.css'

import MenuItem from './MenuItem'


const menuItems = [
    {
        id: 1,
        name:'HotDog',
        description:'This is the description of Sandwich',
        price:'10$',
        image: hot
    },
    {
        id: 2,
        name:'Pomo',
        description:'This is the description of Sandwich',
        price:'10$',
        image: pomo
    },
    {
        id: 3,
        name:'Sandwich',
        description:'This is the description of Sandwich',
        price:'10$',
        image: sandwich
    },
    {
        id: 4,
        name:'Pizza',
        description:'This is the description of Sandwich',
        price:'10$',
        image: pizzza
    },
    {
        id:5,
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'15$',
        image:hot
    },
    {
        id:6,
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'15$',
        image:hot
    },
    {
        id:7,
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'15$',
        image:hot
    },
    {
        id:8,
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'15$',
        image:hot
    }
]



const Menu = () => {
    const classes= useStyles()
    
    

    return (
        <>  
        <div className={classes.toolbar} />                 
                   <Grid container spacing={3}>
                   {menuItems.map((item)=>(
                             <Grid key={item.id} item xs={6} sm={3} md={3}>
                                 <MenuItem price={item.price} desc={item.description} name={item.name} image={item.image} />
                             </Grid>
                             ))}
                   </Grid>
              
        </>
    )
}

export default Menu
