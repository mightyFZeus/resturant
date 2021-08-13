import React  from 'react'
import {Grid,  } from '@material-ui/core'

import image1 from '../../assets/new/image1.jpg'
import image2 from '../../assets/new/image2.jpg'
import image3 from '../../assets/new/image3.jpg'
import image4 from '../../assets/new/image4.jpg'
import image5 from '../../assets/new/image5.jpg'
import image6 from '../../assets/new/image6.jpg'
import image7 from '../../assets/new/image7.jpg'
import image8 from '../../assets/new/image8.jpg'
import useStyles from './Styles'
import './Styles.css'
import Test from './Test'



import MenuItem from './MenuItem'


const menuItems = [
    {
        id: 1,
        name:'HotDog',
        description:'This is the description of Sandwich',
        price:'3000',
        image: image1
    },
    {
        id: 2,
        name:'Pomo',
        description:'This is the description of Sandwich',
        price:'3500',
        image: image2
    },
    {
        id: 3,
        name:'Sandwich',
        description:'This is the description of Sandwich',
        price:'2000',
        image: image3
    },
    {
        id: 4,
        name:'Pizza',
        description:'This is the description of Sandwich',
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
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'2500',
        image:image5
    },
    {
        id:7,
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'1350',
        image:image7
    },
    {
        id:8,
        name:'Hotdog',
        description:'This is the description of Hotdog ',
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
