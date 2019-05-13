import React, { Component } from 'react'
import { Animated } from 'react-animated-css'

class Edit extends Component {
    state = {
        users: {
            name: '',
            email: '',
            vehicle: '',
            tireRotation: '',
            oilChange: '',
            wheelAlign: '',
            brakePad: '',
            coolant: '',
            engine: '',
            airFilter: '',
            cabinFilter: '',
            driveBelt: ''
        },
        isEditing: '',
        editingId: ''
    }

    componentDidMount() {
        this.setState({
            isEditing: false
        })
    }

    updateForm = (user, id) => {
        console.log(id)
        this.setState({
            users: {
                name: user.name,
                email: user.email,
                vehicle: user.vehicle,
                tireRotation: user.tireRotation,
                oilChange: user.oilChange,
                wheelAlign: user.wheelAlign,
                brakePad: user.brakePad,
                coolant: user.coolant,
                engine: user.engine,
                airFilter: user.airFilter,
                cabinFilter: user.cabinFilter,
                driveBelt: user.driveBelt
            },
            isEditing: true,
            editingId: id
        })
    }

    delete = (e, id) => {
        console.log(id)
        this.props.delete(id);
        window.location.reload();
    }

    editOrAdd = (e, user) => {
        if (this.state.isEditing === true) {
            this.props.update(user, this.state.editingId)
        } else {
            this.props.addUser(user)
        }
    }

    render() {

        return (
            <Animated animationIn="bounceInUp" animationOut="hinge" isVisible={true}>
                <div>
                    <h1 className="hero-header">Register and Edit Clients</h1>
                    <div className="container row">
                        <div className="col-md-6">
                            <form onSubmit={(e) => this.editOrAdd(e, this.state.users)}>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.users.name}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, name: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.users.email}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, email: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Vehicle</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.users.vehicle}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, vehicle: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Tire Rotation</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={this.state.users.tireRotation}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, tireRotation: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Oil Change</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={this.state.users.oilChange}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, oilChange: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Wheel Alignment</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={this.state.users.wheelAlign}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, wheelAlign: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Brake Pad</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={this.state.users.brakePad}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, brakePad: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Coolant</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={this.state.users.coolant}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, coolant: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Engine Tune Up</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={this.state.users.engine}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, engine: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Air Filter Replacement</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={this.state.users.airFilter}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, airFilter: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Cabin Filter Replacement</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={this.state.users.cabinFilter}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, cabinFilter: e.target.value } })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Drive Belt Replacement</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={this.state.users.driveBelt}
                                        onChange={(e) => this.setState({ users: { ...this.state.users, driveBelt: e.target.value } })}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>

                            </form>
                        </div>
                        <div className="col-md-6">
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Vehicle</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                {
                                    this.props.users.map((user, i) =>
                                        <tbody key={i}>
                                            <tr>
                                                <td>{user.name}</td>
                                                <td>{user.vehicle}</td>
                                                <td>{user.email}</td>
                                                <td className="row">
                                                    <button value="Refresh Page" className="btn btn-sm btn-danger" onClick={(e) => this.delete(e, user._id)}>X</button>
                                                    <button className="btn btn-sm btn-primary" onClick={(e) => this.updateForm(user, user._id)}>↺</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </Animated>
        )
    }
}

export default Edit;



