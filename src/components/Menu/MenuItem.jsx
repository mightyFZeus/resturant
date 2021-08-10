import React, {useEffect, useContext, useRef} from 'react'
import { Card, CardContent, } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Styles.css'
import cartContext from '../../Context/CartContext'
import uuid from 'react-uuid'
import useStyles from './Styles'
import toast from 'react-hot-toast';




const MenuItem = ({image, price, desc, name}) => {
    const classes = useStyles()
    const {addToCart} = useContext(cartContext)

    const myContainer = useRef([])

    useEffect(()=>{
        console.log('myContainer...', myContainer.current)
    })

    const notify = () => toast('Item added to cart Sucessfully',{
        duration: 2000,
  position: 'bottom-center',
  style: {
   backgroundColor:'#06B025',
    padding: '16px',
    color: 'white',
  },
  
  icon: '👏',
    });

   
      
    const onClickHandler =() =>{
        const newItem={
            id:uuid(),
            content:myContainer.current

        }

        addToCart(newItem)
        console.log(newItem)
        notify()
       
       
        
    }
    return (
        <div>
            
                        <Card >
                            <CardContent >
                               <div ref={myContainer}>
                               <img  id='test' alt={name} className='menu-item-image' src={image} />
                                <p className='image-name' >{name}</p>
                                <p className='item-desc'>{desc}</p>
                               </div>
                             <div  className='price-cart'>
                             <p>₦{price}</p>
                                <AddShoppingCartIcon className={classes.addIcon} onClick={onClickHandler}  />
                             </div>

                            </CardContent>
                        </Card>
                   
        </div>
    )
}

export default MenuItem
