
import React, { useState, useContext } from "react"
import { PaystackButton } from "react-paystack"
import "./Styles.css"


import cartContext from '../../Context/CartContext';
import useStyles from './Styles'

const Address = () => {
  const publicKey = "pk_test_86f1ba3ff3fbb0cf5bfe7ae8b7a21ff7f4f877d4"
  const { sumTotal} = useContext(cartContext)
  const amount = sumTotal * 100
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState('')
  const classes = useStyles()


  const componentProps = {
    email,
    amount,
    address,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: () => {
    //   setEmail("")
    //   setName("")
    //   setPhone("")
    //   setAddress('')
    success()
    
    },
    onClose: () => alert("Wait! You need this chow, don't go!!!!"),
  }

  const success =() =>(
      <p>this is a success</p>
  )

  return (
    <div className="App">
        <div className={classes.toolbar} />
       
      <div className="container">
        <div className="item">
          <div className="overlay-effect"></div>
          
          <div className="item-details">
            <p className="item-details__title">Coconut Oil</p>
            <p className="item-details__amount">Total: {sumTotal } NGN</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              
            </div>
            <div className="checkout-field">
              <label>Address</label>
              <input
                type="text"
                id="phone"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
            
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Address
