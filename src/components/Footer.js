import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faYoutube,
    faFacebookF
    } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        let productsLinksGroup = this.props.productsLinks.map((link, index) => {
            let linkBuilder = <Link to={ link.path } className="footer-item__link">{ link.value }</Link>

            return (
                <li key={index}>
                    { linkBuilder }
                </li>
            );
        });

        let informationLinksGroup = this.props.informationLinks.map((link, index) => {
            let linkBuilder = <Link to={ link.path } className="footer-item__link">{ link.value }</Link>

            return (
                <li key={index}>
                    { linkBuilder }
                </li>
            );
        });

        return (
            <Router>
                <div className="footer">
                    <div className="footer-block">
                        <div className="footer-item">
                            <div className="footer-item__title">Products</div>
                            <ul>
                                { productsLinksGroup }
                            </ul>
                        </div>
                        <div className="footer-item">
                            <div className="footer-item__title">Some additional information</div>
                            <ul>
                                { informationLinksGroup }
                            </ul>
                        </div>
                        <div className="footer-item">
                            <div className="footer-item__title">Ways to contact us</div>
                            <div className="footer-item__mail footer-contact">info@sleeptight.com</div>
                            <div className="footer-item__phone footer-contact">+34 999 999 999</div>
                            <div className="footer-item__networks">
                                <span><FontAwesomeIcon icon={faInstagram} /></span>
                                <span><FontAwesomeIcon icon={faYoutube} /></span>
                                <span><FontAwesomeIcon icon={faFacebookF} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        Copyright &copy; 2002 - 2019 Sleep Tight Ltd. All rights reserved.
                    </div>
                </div>
            </Router>
        )
    }
}

export default Footer;