import React from 'react'

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div>
                    <h1>Having trouble sleeping?</h1>
                    <p>A good, custom fitted mattress can be your solution. See for yourself</p>
                    <button>choose your product</button>
                </div>
                <div className="image">
                    Image
                </div>
            </div>
        )
    }
}

export default Jumbotron;