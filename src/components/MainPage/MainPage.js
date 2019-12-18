import React from 'react'
import Jumbotron from './Jumbotron';
import SuperPowers from './SuperPowers';
import CheckAwareness from './CheckAwareness';
import CustomersTest from './CustomersTest';
import ContactForm from './ContactForm';

class MainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron />
                <SuperPowers />
                <CheckAwareness />
                <CustomersTest />
                <ContactForm />
            </React.Fragment>
        )
    }
}

export default MainPage;