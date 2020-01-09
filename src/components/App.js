import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer';

class App extends React.Component {

    render() {
        let links = [
            { value:'Products', path:'/products' },
            { value:'Find your fit', path:'/find-your-fit' },
            { value:'About us', path:'/about-us' },
            { value:'Contact', path:'/contact' }
        ];

        let footerProductsLinks = [
            { value:'Category A', path:'#' },
            { value:'Category B', path:'#' },
            { value:'Category C', path:'#' },
            { value:'Category D', path:'#' }
        ];

        let footerInformationLinks = [
            { value:'Terms of use', path:'#' },
            { value:'Privacy & Policies', path:'#' },
            { value:'Cookies information', path:'#' },
            { value:'Delivery', path:'#' },
            { value:'FAQ', path:'#' }
        ];

        return (
            <React.Fragment>
                <NavBar links={ links } />
                <Footer productsLinks={ footerProductsLinks } informationLinks={ footerInformationLinks } />
            </React.Fragment>
        )
    }
}

export default App;