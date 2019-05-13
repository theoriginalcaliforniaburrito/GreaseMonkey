import React, { Component } from 'react'
import Notifications, { notify } from '../notifications/index'

const openWindow = (e, user) => {
    window.open(`mailto:${user.email}?subject=Service%20Reminder%20for%20${user.name}&body=Good%20Afternoon%20${user.name}.%20Your%20${user.vehicle}%20is%20due%20in.`)
  }
  
class Home extends Component {

    render() {
        return(
            <div className="">
                <div className="row hero-header">
                    <h1 className="col-md-4">All Clients</h1>
                    <button id="invisible-button" className="btn btn-primary" onClick={() => notify('this is a notification')}>click this invisible button </button>
                </div>
                <Notifications />
                <div className="">
                    <table id="customer-table" className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Vehicle</th>
                                <th scope="col">Email</th>
                                <th scope="col">Send Reminder</th>
                            </tr>
                        </thead>
                            {
                                this.props.users.map((user, i) =>
                                <tbody key={i}>
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.vehicle}</td>
                                        <td>{user.email}</td>
                                        <td><button onClick={(e) => openWindow(e, user)}className="btn btn-primary">Contact</button></td>
                                    </tr>
                                </tbody>
                                )
                            }
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;