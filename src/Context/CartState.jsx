import React, {useReducer} from 'react'
import cartContext from './CartContext'
import Reducer from './Reducer'
import {ADD_TO_CART, DELETE_FROM_CART, CLEAR} from './CartTypes'
import toast from 'react-hot-toast';
import Test from './Test2'

const CartState = (props) => {

    const notify = () => toast('Item Deleted',{
        duration: 2000,
  position: 'top-center',
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
   
    

    //add to cart
        const addToCart = (item) =>{
            dispatch({
                type:ADD_TO_CART,
                payload:item
            })
        }
    // delete from cart
        const deleteFromCart =(itemID) =>{
            notify();
            dispatch({
                type:DELETE_FROM_CART,
                payload:itemID
            })
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
            clearCart
        }}>
            <Test style={{display:'none'}} />
            {props.children}
        </cartContext.Provider>

    )
}

export default CartState
