import React from 'react';
import Product from './Product';
import axios from 'axios';

class Products extends React.Component {

    state = { products: [] }

    componentDidMount() {
        // const productsData = await axios.get('http://...');
        const productsData = [
            { name: "hilding salsa", price: 1119, imgUrl: "../../../mat.png", review: 4, category: "thermoelastic foam" },
            { name: "hilding salsa", price: 1119, imgUrl: "../../../mat.png", review: 4, category: "thermoelastic foam" },
            { name: "hilding salsa", price: 1119, imgUrl: "../../../mat.png", review: 4, category: "thermoelastic foam" },
            { name: "hilding salsa", price: 1119, imgUrl: "../../../mat.png", review: 4, category: "thermoelastic foam" },
            { name: "hilding salsa", price: 1119, imgUrl: "../../../mat.png", review: 4, category: "thermoelastic foam" },
            { name: "hilding salsa", price: 1119, imgUrl: "../../../mat.png", review: 4, category: "thermoelastic foam" },
            { name: "hilding salsa", price: 1119, imgUrl: "../../../mat.png", review: 4, category: "thermoelastic foam" }
        ]

        this.setState({products: productsData.map((product, index) => {
            return <Product 
                name={product.name}
                price={product.price}
                imgUrl={product.imgUrl}
                review={product.review}
                category={product.category}
                key={index} 
            />
        })})
    }

    render () {
        return (
            <div className="productsDiv">
                <h1>What are you looking for?</h1>
                <ul>
                    <li>spring</li>
                    <li>foam</li>
                    <li>medical</li>
                    <li>children's</li>
                    <li>toppers</li>
                    <li>frames</li>
                </ul>
                <div className="products">{this.state.products}</div>
            </div>
        )
    }
}

export default Products;