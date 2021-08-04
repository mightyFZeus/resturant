import React from 'react'
import Rice from './Breastfast/Rice'
import Lunch from './Lunch/Lunch'
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'

const Explore = () => {
    return (
        <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to ='/rice'>Breaskfast</Link>
                    </li>
                    <li ><Link to='/lunch'>Lunch</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path='/rice' component={Rice} />
                <Route exact path='/lunch' component={Lunch} />
            </Switch>
        </div>
        </Router>
    )
}

export default Explore
