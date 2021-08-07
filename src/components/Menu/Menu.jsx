import React from 'react'
import {Grid, Card, CardContent, } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import uuid from 'react-uuid'
import sandwich from '../../assets/images/sandwich.jpg'
import hot from '../../assets/images/hot.jpg'
import useStyles from './Styles'
import './Styles.css'

const menuItems = [
    {
        id: uuid(),
        name:'Sandwich',
        description:'This is the description of Sandwich',
        price:'10$',
        image: sandwich
    },
    {
        id: uuid(),
        name:'Sandwich',
        description:'This is the description of Sandwich',
        price:'10$',
        image: sandwich
    },
    {
        id: uuid(),
        name:'Sandwich',
        description:'This is the description of Sandwich',
        price:'10$',
        image: sandwich
    },
    {
        id: uuid(),
        name:'Sandwich',
        description:'This is the description of Sandwich',
        price:'10$',
        image: sandwich
    },
]

const menuItems2 = [
    {
        id:uuid(),
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'15$',
        image:hot
    },
    {
        id:uuid(),
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'15$',
        image:hot
    },
    {
        id:uuid(),
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'15$',
        image:hot
    },
    {
        id:uuid(),
        name:'Hotdog',
        description:'This is the description of Hotdog ',
        price:'15$',
        image:hot
    }
]

const Menu = () => {
    const classes = useStyles()
    return (
        <>
           <Grid container  spacing={3}>
                {menuItems.map((item)=>(
                    <Grid item xs={6} sm={3} md={3} >
                        <Card className={classes.card}>
                            <CardContent>
                               <img alt={item.name} className='menu-item-image' src={item.image} />
                                <p className='image-name'>{item.name}</p>
                                <p className='item-desc'>{item.description}</p>
                             <div  className='price-cart'>
                             <p>{item.price}</p>
                                <AddShoppingCartIcon />
                             </div>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}   
            </Grid> 
            <Grid container  spacing={3}>
                {menuItems2.map((item)=>(
                    <Grid item xs={6} sm={3} md={3} >
                        <Card className={classes.card}>
                            <CardContent>
                               <img alt={item.name} className='menu-item-image' src={item.image} />
                                <p className='image-name'>{item.name}</p>
                                <p className='item-desc'>{item.description}</p>
                                <div className='price-cart'>
                             <p>{item.price}</p>
                                <AddShoppingCartIcon />
                             </div>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}   
            </Grid>
        </>
    )
}

export default Menu
