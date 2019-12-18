import React from 'react'

class ContactForm extends React.Component {
    render() {
        return (
            <div className="contactForm">
                <div>
                    <h2>Having trouble finding your perfect fit? Contact us!</h2>
                    <form>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Message"></textarea>
                        <input type="submit" value="send" />
                    </form>
                </div>
                <div className="image">
                    Image
                </div>
            </div>
        )
    }
}

export default ContactForm;