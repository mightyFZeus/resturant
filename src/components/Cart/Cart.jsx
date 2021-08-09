import React,{useContext} from 'react'
import cartContext from '../../Context/CartContext';
import {Grid, Card, CardContent} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import './Styles.css'
import {Link} from 'react-router-dom'
import useStyles from './Styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import face from '../../assets/images/face.png'





const Cart = () => {
    const {cart, deleteFromCart, clearCart} = useContext(cartContext)
    const classes =  useStyles()
    console.log(cart)

   
   
    const sumOfPrice = cart.map((item)=>(
      item.content.nextElementSibling.innerText

    ))

    const turnedToNmuber = sumOfPrice.map((item)=>(
        item.slice(1,3)
    ))

    console.log(turnedToNmuber)

    let sumOfPriceNumber = turnedToNmuber.map(i=>Number(i));
    console.log(sumOfPriceNumber);

   
    
        let sumTotal = 0;

        for (let i = 0; i < sumOfPriceNumber.length; i++) {
            sumTotal += sumOfPriceNumber[i]
        }

        console.log(sumTotal)
       

    return (
        
        <>
        <div className={classes.toolbar} />
        {cart.length !==0 ?
        
            <div>
                <h1>Your Orders</h1>
                <hr />
                {cart.length > 0? <p className='cart-length'>You have {cart.length} items left in your Cart</p>:'null'}
                <Grid container spacing={3}>
               
               {cart.map((item)=>(
                   
                   <Grid item xs={6} sm={3} md={3}>
                       <Card>
                           <CardContent>
                           
                   <div >
                     
                      <img className='cart-image' alt='item-name' src={item.content.children[0].currentSrc} />
                      <div className='cart-name-price-div'>
                       <p className='name'>{item.content.childNodes[1].innerHTML}</p>
                       <p>{item.content.nextSibling.innerText}</p>
                      </div>
                      <DeleteIcon onClick={()=> deleteFromCart(item.id)    } />
                     
                   </div>
               
                           </CardContent>
                       </Card>
                       
                   </Grid>
                   ))}
                    
               </Grid>
               <p className='total'>Total:${sumTotal}</p>
            </div>
            
                :
                <div>
                    <p className='empty-cart-text'>Your cart is empty</p>
                    <img alt='dissapointed-face' src={face}/>
                <Link className='cart-link' to='/menu'>
                
                <button className='empty-cart'>Go to shop Now<span><ArrowBackIcon /></span></button>
                </Link>
                </div>
                
                }
                {cart.length !== 0  && <button className='clear-cart-btn' onClick={() =>clearCart()}>Clear cart</button>  }
            
            
           
        </>
    )
}

export default Cart
