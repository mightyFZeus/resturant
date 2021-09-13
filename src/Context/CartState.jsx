import React, {useReducer, useState} from 'react'
import cartContext from './CartContext'
import Reducer from './Reducer'
import {ADD_TO_CART, DELETE_FROM_CART, CLEAR} from './CartTypes'
import toast from 'react-hot-toast';
import Test from './Test2'

const CartState = (props) => {

   

    const notify = () => toast('Item Deleted',{
        duration: 2000,
  position: 'bottom-center',
  style: {
   backgroundColor:'red',
    padding: '16px',
    color: 'white',
  },
  
  icon: '👏',
    });

 


    const initialState = {
        cart:[] // {id:123, price: 'price', image:'image'}
    }
    const [state, dispatch] = useReducer(Reducer, initialState)
  

       

    console.log(state.cart)


    const sumOfPrice = state.cart.map((item)=>(
        item.content.nextElementSibling.innerText
  
      ))
  
      const turnedToNmuber = sumOfPrice.map((item)=>(
          item.slice(1,5)
      ))
  
      console.log(turnedToNmuber)
  
      let sumOfPriceNumber = turnedToNmuber.map(i=>Number(i));
      console.log(sumOfPriceNumber);
  
     
      
          let sumTotal = 0;
  
          for (let i = 0; i < sumOfPriceNumber.length; i++) {
              sumTotal += sumOfPriceNumber[i]
          }
  
          console.log(sumTotal)



 
   
    

    //add to cart
        const addToCart = (item) =>{
            dispatch({
                type:ADD_TO_CART,
                payload:item
            })
        }
    // delete from cart
    
        const deleteFromCart =(itemID) =>{
            const confirmBox =  window.confirm('Do are you sure you want to delete this product')
           if(confirmBox === true){
            notify()
            dispatch({
                type:DELETE_FROM_CART,
                payload:itemID
            })
           }
            
        }
    //clear cart
    const clearCart = () =>{
        dispatch({
            type:CLEAR
        })
    }
    return (
        <cartContext.Provider value={{
            cart: state.cart,
            addToCart,
            deleteFromCart,
            clearCart,
            sumTotal,
           
            
        }}>
            <Test style={{display:'none'}} />
            {props.children}
        </cartContext.Provider>

    )
}

export default CartState
