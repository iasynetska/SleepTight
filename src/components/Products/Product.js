import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Product extends React.Component {
    render() {
        return (
            <div className="products-block">
                <div className="products-block__background">
                    <img className="products-block__img" alt="" src={this.props.img} />
                </div>
                <div className="products-block__title">{this.props.name}</div>
                <div className="products-block__desc">{this.props.category}</div>
                <div className="products-block__icons">
                    <StarRatingComponent
                        name={"rating"}
                        editing={false}
                        starColor={"#09B7BE"}
                        emptyStarColor={"#49496E"}
                        renderStarIcon={() => <span className="products-block__heart"><FontAwesomeIcon icon={faHeart} /></span>}
                        starCount={5}
                        value={this.props.rating}
                    />
                </div>
                <div className="products-block__price">from {this.props.price} PLN</div>
            </div>
        )
    }
}

export default Product;