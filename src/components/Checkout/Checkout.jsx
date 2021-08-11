import React, {useContext} from 'react'
import useStyles from './Styles'
import './Styles.css'
import cartContext from '../../Context/CartContext'

const Checkout = () => {
    const classes = useStyles()
    const {cart, sumTotal} = useContext(cartContext)
    return (
        <>
        <div className={classes.toolbar} />
        <div className='main-container'>
        <div className='container1'>
            <p className="bold-text">PRODUCT</p>
            <p className="bold-text">SUBTOTAl</p>
            
        </div>
        <hr />
            {cart.map((item)=>(
                <div className='sub-container'>
                    <p>{item.content.childNodes[1].innerHTML}</p>
                    <p className="bold-text">{item.content.nextSibling.innerText }</p>
                </div>
            ))}
            <hr />
            <div className='sub-container-2'>
                <p className="bold-text">Total</p>
                <p className="bold-text">₦{sumTotal}</p>
            </div>
        </div>
        </>
    )
}

export default Checkout
