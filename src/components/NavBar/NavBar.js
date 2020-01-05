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

    constructor(props) {
        super(props);
        this.state = {clicked_index: 0};
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(selectedIndex){
        this.setState({clicked_index: selectedIndex});
        this.props.links.forEach( (link, index) => {
            if (index === selectedIndex) {
                link.active = true;
            } else {
                link.active = false;
            }
        });
    }

    render() {
        let linksGroup = this.props.links.map((link, index) => {
            let linkBuilder = link.active ? (
                <Link to={ link.path } className="navbar-menu__link link_active" onClick={()=>this.clickHandler(index)}>{ link.value }</Link>
            ) : (
                <Link to={ link.path } className="navbar-menu__link" onClick={()=>this.clickHandler(index)}>{ link.value }</Link>
            );

            return (
                <li key={index}>
                    { linkBuilder }
                </li>
            );
        });

        return (
            <Router>
                <div>
                    <div className="navbar">
                        <h1><Link to="/" className="navbar-title">Sleep Tight</Link></h1>
                        <ul className="navbar-menu">
                            { linksGroup }
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