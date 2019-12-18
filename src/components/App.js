import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Footer />
            </React.Fragment>
            )
    }
};

export default App;