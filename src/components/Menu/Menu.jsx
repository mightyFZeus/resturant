import React  from 'react'
import {Grid,  } from '@material-ui/core'

import image1 from '../../assets/new/image1.webp'
import image2 from '../../assets/new/image2.webp'
import image3 from '../../assets/new/image3.webp'
import image4 from '../../assets/new/image4.webp'
import image5 from '../../assets/new/image5_50.webp'
import image6 from '../../assets/new/image6.webp'
import image7 from '../../assets/new/image7.webp'
import image8 from '../../assets/new/image8.webp'
import useStyles from './Styles'
import './Styles.css'
import Test from './Test'



import MenuItem from './MenuItem'


const menuItems = [
    {
        id: 1,
        name:'Oreo Smoothie',
        description:'This is the description of Oreo smoothie',
        price:'3000',
        image: image1
    },
    {
        id: 2,
        name:'Green Smoothie',
        description:'This is the description of Green smoothie',
        price:'3500',
        image: image2
    },
    {
        id: 3,
        name:'Cheese Burger',
        description:'This is the description of Cheese burger',
        price:'2000',
        image: image3
    },
    {
        id: 4,
        name:'Beef Burger',
        description:'This is the description of Beef burger',
        price:'1500',
        image: image4
    },
    {
        id:5,
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'2500',
        image:image6
    },
    {
        id:6,
        name:'Creamy Burger',
        description:'This is the description of Creamy Burger ',
        price:'2500',
        image:image5
    },
    {
        id:7,
        name:'Mango Smoothie',
        description:'This is the description of Mango smoothie ',
        price:'1350',
        image:image7
    },
    {
        id:8,
        name:'Beef with Rice',
        description:'This is the description of Beef with rice ',
        price:'3200',
        image:image8
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
                   <Test />
                
          
        </>
    )
}

export default Menu
