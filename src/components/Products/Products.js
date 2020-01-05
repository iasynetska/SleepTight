import React from 'react';
import Product from './Product';
import Filter from './Filter';
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
        let buttons = [
            { value:'Spring' },
            { value:'Foam' },
            { value:'Medical' },
            { value:'Children\'s' },
            { value:'Toppers' },
            { value:'Frames' }
        ];

        return (
            <div className="products">
                <div className="products-title">What are you looking for?</div>
                    <Filter buttons={ buttons } />
                <div className="products-container">{this.state.products}</div>
            </div>
        )
    }
}

export default Products;