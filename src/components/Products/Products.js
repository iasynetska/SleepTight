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
            <div className="products">
                <div className="products-title">What are you looking for?</div>
                <div className="products-filter">
                    <button className="products-filter__btn">spring</button>
                    <button className="products-filter__btn">foam</button>
                    <button className="products-filter__btn">medical</button>
                    <button className="products-filter__btn">children's</button>
                    <button className="products-filter__btn">toppers</button>
                    <button className="products-filter__btn">frames</button>
                </div>
                <div className="products-container">{this.state.products}</div>
            </div>
        )
    }
}

export default Products;