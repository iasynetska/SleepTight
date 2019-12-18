import React from 'react'
import Jumbotron from './Jumbotron';
import SuperPowers from './SuperPowers';
import CheckAwareness from './CheckAwareness';
import CustomersTest from './CustomersTest';

class MainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron />
                <SuperPowers />
                <CheckAwareness />
                <CustomersTest />
            </React.Fragment>
        )
    }
}

export default MainPage;