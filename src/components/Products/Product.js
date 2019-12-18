import React from 'react';

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selected: null }
    }

    render() {
        return (
                <div className="product">
                    <h2>{this.props.name}</h2>
                    <span>{this.props.price}</span>
                </div>
            )
    }
};

export default Product;