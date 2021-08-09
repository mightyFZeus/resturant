import {ADD_TO_CART,DELETE_FROM_CART, CLEAR} from './CartTypes'


const Reducer = (state, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cart:[...state.cart, action.payload]
            }
        case DELETE_FROM_CART:
            return{
                    ...state,
                    cart:state.cart.filter(item=>item.id !== action.payload)
            }
        case CLEAR:
            return{
                ...state,
                cart:[]
            }
            default:
                return state        
    }

}

export default Reducer