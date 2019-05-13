import React, { Component } from 'react'
import { Animated } from "react-animated-css"

class Easteregg extends Component {

    render() {
        return(
            <Animated animationIn="bounceInUp" animationOut="hinge" isVisible={true}>
                <div className="container">
                    <img src="https://media.giphy.com/media/1PMVNNKVIL8Ig/giphy.gif" alt="peanuts"/>
                </div>
            </Animated>
        )
    }
}

export default Easteregg;