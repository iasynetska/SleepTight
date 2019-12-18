import React from 'react'

class Footer extends React.Component {
    render() {
        return (
        <React.Fragment>
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
        <div className="footer">
            Footer
        </div>
        </React.Fragment>
        )
    }
}

export default Footer;