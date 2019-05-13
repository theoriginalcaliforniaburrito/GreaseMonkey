import React, { Component } from 'react'
import { Animated } from "react-animated-css"

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        sentEmail: false
    }

    openWindow = (e, u) => {
        window.open(`mailto:${u.email}?subject=${u.name}&body=${u.message}`)
    }

    sendMessage = (e) => {
        e.preventDefault();
        this.openWindow(e, this.state);
        this.setState({
            sentEmail: true
        })
    }

    heresJohnny = () => {
        if (this.sentEmail) {
            return <img src="https://media.giphy.com/media/S3Ot3hZ5bcy8o/giphy.gif" alt="here's johnny"/>
        }
    }

    render() {
        return(
            <Animated animationIn="bounceInUp" animationOut="hinge" isVisible={true}>
                <h1 className="hero-header">Contact Business</h1>
                <div className="container row">
                    <form id="contact-form" action="" onSubmit={(e) => this.sendMessage(e)} className="form col-md-5">

                        <div className="form-group">
                            <label htmlFor=""><span role="img" aria-label="senpai">📛</span>Business Name:</label>
                            <input
                                type="text" 
                                className="form-control"
                                placeholder="Manny's Mechanics"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor=""><span role="img" aria-label="senpai">📭</span>Email:</label>
                            <input
                                type="text" 
                                className="form-control"
                                placeholder="Manny@youchube.mx"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor=""><span role="img" aria-label="senpai">📧</span>Message:</label>
                            <textarea
                                type="text" 
                                className="form-control form-control-lg"
                                placeholder="Email body here"
                                value={this.state.message}
                                onChange={(e) => this.setState({ message: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>

                    <div className="col-md-5">
                        {
                            this.state.sentEmail && <img src="https://media.giphy.com/media/S3Ot3hZ5bcy8o/giphy.gif" alt="here's johnny" />
                        }
                    </div>
                </div>
            </Animated>
        )
    }
}

export default Contact;