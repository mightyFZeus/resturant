
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Address from './components/Address/Address'

import Menu from './components/Menu/Menu'
import {BrowserRouter as Router, Route, } from 'react-router-dom'
import Cart from './components/Cart/Cart'

import CartState from './Context/CartState';





function App() {
  
  return (
    
   
      <Router>
        <div className="App">
          <CartState>
          <NavBar  />
          <Route path='/' exact component={Header} />
          
        
              <Route path='/menu'  component={Menu} />  
              <Route path='/cart' component={Cart} />
              <Route path='/address' component={Address} />

        </CartState>    
        </div>
    </Router>
  
  );
}

export default App;
