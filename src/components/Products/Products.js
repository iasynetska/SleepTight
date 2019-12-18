import React from 'react';
import Product from './Product';
import axios from 'axios';

class Products extends React.Component {

    state = { products: [] }

    componentDidMount() {
        // const productsData = await axios.get('http://...');
        const productsData = [
            { name: "Łóżko", price: 15 },
            { name: "Coś jeszcze", price: 40 },
            { name: "LALAL", price: 85 },
        ]

        this.setState({products: productsData.map((product, index) => {
            return <Product 
                name={product.name}
                price={product.price}
                key={index} 
            />
        })})
    }

    render () {
        return (
            <div className="products">{this.state.products}</div>
        )
    }
}

export default Products;