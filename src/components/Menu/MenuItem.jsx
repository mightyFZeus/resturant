import React, {useEffect, useContext, useRef} from 'react'
import {Grid, Card, CardContent, } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Styles.css'
import cartContext from '../../Context/CartContext'
import uuid from 'react-uuid'

const MenuItem = ({image, price, desc, name}) => {
    const {addToCart} = useContext(cartContext)

    const myContainer = useRef([])

    useEffect(()=>{
        console.log('myContainer...', myContainer.current)
    })


    const onClickHandler =() =>{
        const newItem={
            id:uuid(),
            content:myContainer.current

        }

        addToCart(newItem)
        console.log(newItem)
        alert('Item Added to Cart Succesfully')
    }
    return (
        <div>
            
                        <Card >
                            <CardContent >
                               <div ref={myContainer}>
                               <img  id='test' className='menu-item-image' src={image} />
                                <p className='image-name' >{name}</p>
                                <p className='item-desc'>{desc}</p>
                               </div>
                             <div  className='price-cart'>
                             <p>{price}</p>
                                <AddShoppingCartIcon onClick={onClickHandler}  />
                             </div>

                            </CardContent>
                        </Card>
                   
        </div>
    )
}

export default MenuItem
