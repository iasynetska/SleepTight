import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selected: null }
    }

    render() {
        return (
            <div className="products-block">
                <div className="products-block__background">
                    <img className="products-block__img" alt="" src={this.props.imgUrl} />
                </div>
                <div className="products-block__title">{this.props.name}</div>
                <div className="products-block__desc">{this.props.category}</div>
                <div className="products-block__icons">
                    <span className="products-block__heart"><FontAwesomeIcon icon={faHeart} /></span>
                    <span className="products-block__heart"><FontAwesomeIcon icon={faHeart} /></span>
                    <span className="products-block__heart"><FontAwesomeIcon icon={faHeart} /></span>
                    <span className="products-block__heart"><FontAwesomeIcon icon={faHeart} /></span>
                    <span className="products-block__heart"><FontAwesomeIcon icon={faHeart} /></span>
                </div>
                <div className="products-block__price">from {this.props.price},00 PLN</div>
            </div>
        )
    }
};

export default Product;