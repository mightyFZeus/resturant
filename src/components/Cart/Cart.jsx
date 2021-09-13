import React,{useContext} from 'react'
import cartContext from '../../Context/CartContext';
import {Grid, Card, CardContent} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import './Styles.css'
import {Link } from 'react-router-dom'
import useStyles from './Styles'

import face from '../../assets/images/face.png'






const Cart = () => {
    const {cart, deleteFromCart, sumTotal, clearCart, } = useContext(cartContext)
    const classes =  useStyles()
    
    
    
   
       

    return (
        
        <>
        <div className={classes.toolbar} />
        {cart.length !==0 ?
        
            <div>
                
                <h1>Your Orders</h1>
                <hr />
                {cart.length > 0? <p className='cart-length'>You have {cart.length} items left in your Cart</p>:'null'}
                <Grid justifyContent="center" container spacing={3}>
               
               {cart.map((item)=>(
                   
                   <Grid item xs={6} sm={3} md={3}>
                       <Card>
                           <CardContent>
                           
                   <div >
                     
                      <img className='cart-image' alt='item-name' src={item.content.children[0].currentSrc} />
                      <div className='cart-name-price-div'>
                       <p className='name'>{item.content.childNodes[1].innerHTML}</p>
                       <p>{item.content.nextSibling.innerText }</p>
                      </div>
                      

                      <DeleteIcon onClick={()=> deleteFromCart(item.id)    } />
                      {/* <DeleteIcon onClick={  handleToggleModal  } /> */}
                     
                   </div>
               
                           </CardContent>
                       </Card>
                       
                   </Grid>
                   ))}
                    
               </Grid>
               <p className='total'>Total:₦{sumTotal}</p>
               
            </div>
            
                :
                <div>
                    <p className='empty-cart-text'>Your cart is empty</p>
                    <img alt='dissapointed-face' src={face}/>
                <Link className='cart-link' to='/menu'>
                
                <button className='empty-cart'>Go to shop Now</button>
                </Link>
                </div>
                
                }
                <div className='checkout-div'>
                {cart.length !== 0  && <button className='clear-cart-btn' onClick={() =>clearCart()}>Clear cart</button>  }
            
              <Link to='/address'>
              <button style={{display: cart.length ===0 ? 'none' : 'null'}} className='checkout-btn'>CheckOut</button>
              </Link>
              </div>

         
                
            
           
        </>
    )
}

export default Cart
