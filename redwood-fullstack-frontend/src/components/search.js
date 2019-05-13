import React, { Component } from 'react'
import moment from 'moment'
import { Animated } from "react-animated-css"

class Search extends Component {
    state = {
        user: ''
    }

    getByName = (e) => {
        e.preventDefault();
        console.log(this.state.user)
        this.props.getByName(this.state.user);
    }
    
    findThis = (e) => {
        let myUser = e.target.value;
        let arr = myUser.split(' ');
        let filteredUser = arr.splice(1, 0, '%20');
        filteredUser = arr.join('');
        this.setState({
            user: filteredUser
        })
    }

    render() {

        return (
            <Animated animationIn="bounceInUp" animationOut="hinge" isVisible={true}>
                <div>
                    <h1 className="hero-header">Search Clients</h1>
                    <div id="searchBar" className="row">
                        <form onSubmit={(e) => this.getByName(e)} className="form-inline">

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    onChange={(e) => this.findThis(e)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Search</button>

                        </form>
                    </div>

                    <div className="">
                        {this.props.searchResult &&
                                <table className="table table-hover">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Vehicle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.props.searchResult.name}</td>
                                            <td>{this.props.searchResult.email}</td>
                                            <td>{this.props.searchResult.vehicle}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        }
                    </div>

                    <div className="">
                        {this.props.searchResult &&
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="thead-light">
                                        <tr>
                                            <th><span></span></th>
                                            <th>Brake Pad</th>
                                            <th>Oil Change</th>
                                            <th>Tire Rotation</th>
                                            <th>Wheel Alignment</th>
                                            <th>Coolant Flush</th>
                                            <th>Engine Tune Up</th>
                                            <th>Air Filter</th>
                                            <th>Cabin Filter</th>
                                            <th>Drive Belt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Last Service:</th>
                                            <td>{moment(this.props.searchResult.brakePad).calendar()}</td>
                                            <td>{moment(this.props.searchResult.oilChange).calendar()}</td>
                                            <td>{moment(this.props.searchResult.tireRotation).calendar()}</td>
                                            <td>{moment(this.props.searchResult.wheelAlign).calendar()}</td>
                                            <td>{moment(this.props.searchResult.coolant).calendar()}</td>
                                            <td>{moment(this.props.searchResult.engine).calendar()}</td>
                                            <td>{moment(this.props.searchResult.airFilter).calendar()}</td>
                                            <td>{moment(this.props.searchResult.cabinFilter).calendar()}</td>
                                            <td>{moment(this.props.searchResult.driveBelt).calendar()}</td>
                                        </tr>
                                        <tr>
                                            <th>Next Service:</th>
                                            <td>{moment(this.props.searchResult.brakePad).add(2, 'years').calendar()}</td>
                                            <td>{moment(this.props.searchResult.oilChange).add(3, 'months').calendar()}</td>
                                            <td>{moment(this.props.searchResult.tireRotation).add(1, 'year').calendar()}</td>
                                            <td>{moment(this.props.searchResult.wheelAlign).add(1, 'year').calendar()}</td>
                                            <td>{moment(this.props.searchResult.coolant).add(1, 'year').calendar()}</td>
                                            <td>{moment(this.props.searchResult.engine).add(1, 'year').calendar()}</td>
                                            <td>{moment(this.props.searchResult.airFilter).add(6, 'months').calendar()}</td>
                                            <td>{moment(this.props.searchResult.cabinFilter).add(6, 'months').calendar()}</td>
                                            <td>{moment(this.props.searchResult.driveBelt).add(1, 'year').calendar()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </Animated>
        )
    }
}

export default Search;