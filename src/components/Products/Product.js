import React from 'react';

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selected: null }
    }

    render() {
        return (
                <div className="product">
                    <img alt="" src={this.props.imgUrl} />
                    <h2>{this.props.name}</h2>
                    <h4>{this.props.category}</h4>
                    <span>OOOOO</span>
                    <p className="price">from {this.props.price},00 PLN</p>
                </div>
            )
    }
};

export default Product;