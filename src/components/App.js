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

        return (
            <React.Fragment>
                <NavBar links={ links } />
                <Footer />
            </React.Fragment>
        )
    }
};

export default App;