import React from 'react'

class SuperPowers extends React.Component {
    render() {
        return (
            <div className="superpowers">
                <h2>The superpowers of our mattresses</h2>
                <div className="superpowersCards">
                    <div>
                        <img alt="" src="../../../icon_stress.svg" />
                        <p>Reduces stress levels</p>
                    </div>
                    <div>
                        {/* <img alt="" src="../../../icon_pain.svg" /> */}
                        <p>Prevents back pain</p>
                    </div>
                    <div>
                        {/* <img alt="" src="../../../icon_snore.svg" /> */}
                        <p>Lessens snoring and tossing</p>
                    </div>
                    <div>
                        {/* <img alt="" src="../../../icon_allergy.svg" /> */}
                        <p>Reduces allegry symptoms</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuperPowers;