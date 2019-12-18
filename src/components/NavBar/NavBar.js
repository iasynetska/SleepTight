import React from 'react';
import Products from '../Products/Products';
import MainPage from '../MainPage/MainPage';
import Basket from '../Basket/Basket';
import About from '../About';
import Contact from '../Contact';
import FindFit from '../FindFit';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class NavBar extends React.Component {

    render() {
        return (
                <Router>
                    <div>
                        <div className="navbar">
                            <h1><Link to="/">Sleep Tight</Link></h1>
                            <ul>
                                <li><Link to="/products">PRODUCTS</Link></li>
                                <li><Link to="/find-your-fit">FIND YOUR FIT</Link></li>
                                <li><Link to="/about-us">ABOUT US</Link></li>
                                <li><Link to="/contact">CONTACT</Link></li>
                            </ul>   
                           <span className="basketIcon"><Link to="/basket">Koszyk</Link></span>
                       </div>

                        <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/find-your-fit">
                            <FindFit />
                        </Route>
                        <Route path="/about-us">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/basket">
                            <Basket />
                        </Route>
                        </Switch>
                    </div>
                    </Router>    
           )
    }
    
};

export default NavBar;