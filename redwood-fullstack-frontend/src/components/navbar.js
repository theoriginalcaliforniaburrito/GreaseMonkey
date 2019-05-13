import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <div id="navbar" className="container row">
                <div className="col-md-2">
                    <Link to="/">
                        <h3>Clients</h3>
                    </Link>
                </div>
                <div className="col-md-2">
                    <Link to="/edit">
                        <h3>Edit</h3>
                    </Link>
                </div>
                <div className="col-md-2">
                    <Link to="/search">
                        <h3>Search</h3>
                    </Link>
                </div>
                <div className="col-md-2">
                    <Link to="/easteregg">
                        <img id="monkey" src="https://image.flaticon.com/icons/svg/1621/1621803.svg" />
                    </Link>
                </div>
                <div className="col-md-2">
                    <Link to="/contact">
                        <h3>Contact</h3>
                    </Link>
                </div>
                <div className="col-md-2">
                    <Link to="/codes">
                        <h3>Codes</h3>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;