import React from 'react';
import Product from './Product';
import Filter from './Filter';

import { getMattress } from '../../services/mattressService';

class Products extends React.Component {
    clickedButton = {index: -1};

    constructor(props) {
        super(props);
        this.state = { products: [] };
        this.selectMattress = this.selectMattress.bind(this);
    }

    componentDidMount() {
        this.selectMattress();
    }

    selectMattress(category) {
        getMattress(category).then(res => this.setState({
            products: res.map((product, index) => {
                return <Product
                    name={product.name}
                    price={product.price}
                    img={product.image}
                    rating={product.rating}
                    category={product.category}
                    key={index}
                />
            })
        }))
    }

    render () {
        let buttons = [
            { value:'Spring', category: 'spring' },
            { value:'Foam', category: 'foam' },
            { value:'Medical', category: 'medical' },
            { value:'Children\'s', category: 'children\'s' },
            { value:'Toppers', category: 'toppers' },
            { value:'Frames', category: 'frames' }
        ];

        return (
            <div className="products">
                <div className="products-title">What are you looking for?</div>
                    <Filter clickedButton={ this.clickedButton } buttons={ buttons } selectMattress={this.selectMattress} />
                <div className="products-container">{this.state.products}</div>
            </div>
        )
    }
}

export default Products;