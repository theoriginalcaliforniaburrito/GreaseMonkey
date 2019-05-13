import React, { Component } from 'react'
import YouTubePlayer from 'react-player/lib/players/YouTube';
import { Animated } from "react-animated-css"

class Codes extends Component {
    state = {
        codes: [
            {
                id: 420,
                descripton: "OBD-II Code P0420 is defined as a Catalyst System Efficiency Below Threshold",
                possibleCauses: "1: Inefficient Catalytic Converter(s), 2: Defective Front or Rear Oxygen Sensor(s), 3: Misfiring engines ",
                technotes: "As the code descripton implies the p0420 code mens that the vechicle's control module has dected that the three-way catalytic converter is not working propely. Replcing he (02) sensors may somtimes fix the code, but in most cases, the catalytic converter needs to be replaced to fix the problem.",
                link: "https://www.autocodes.com/p0420.html",
                videoURL: "https://www.youtube.com/watch?v=9VZ5K8n5jj0",
            },
            {
                id: 171,
                descripton: "OBD-II Code 0171 means sytem is too lean bank 1",
                possibleCauses: "1: Intake air leaks 2: Lack of fuel 3: Faulty MAF sensor ",
                technotes: "If the P0171 is combined with p0174 code, it's very likely that the problem is caused by an air intake leak. If not leaks, the next step is to replace the air filter and clean the air flow meter.",
                link: "https://www.autocodes.com/p0171.html",
                videoURL: "https://youtu.be/gCV11HGqRaI"
            },
            {
                id: 300,
                descripton: "OBD-II Code P0300 means that a cylinder(s) is misfiring or is randomly misfiring.",
                possibleCauses: "1: Faulty spark plug (s), 2: Faulty igniton coil (s), 3: Clogged or faulty fuel injector (s) ",
                technotes: "Usually when tis P0300 is present frst thing to look at is the spark plugs and check for their condition. If that is okay then check for any air leaks, intake manifold air leaks.",
                link: "https://www.autocodes.com/p0300.html",
                videoURL: "https://youtu.be/EuvpYLqmJpw"
            },
            {
                id: 11,
                descripton: "OBD-II Code P0011 is defnied as intake valve timing control performance bank 1",
                possibleCauses: "1: Low or dirty engine oil 2: Faulty valve timing control soleniod., 3: Faulty camshaft position sensor ",
                technotes: "Check for oil level and conditon. ",
                link: "https://www.autocodes.com/p0011_nissan.html",
                videoURL: "https://youtu.be/_RF4yct8J54"
            },
        ],
        search: '',
        searchedCodes: [],
    }

    getByCode = (e) => {
        e.preventDefault();

        let newCodes = this.state.codes.filter(c => c.id === parseInt(this.state.search));
        if (this.state.search === '' || newCodes.length === 0) {
            this.setState({
                searchedCodes: this.state.codes,
                search: ''
            })
        }
        else {
            this.setState({
                searchedCodes: newCodes,
                search: '',
            })
        }
    }

    render() {
        return (
            <Animated animationIn="bounceInUp" animationOut="hinge" isVisible={true}>
                <div className="container row">
                    <h1 className="hero-header">Diagnostic Trouble Codes</h1>
                    <div id="code-searchbar" className="col-md-6">
                        <form onSubmit={(e) => this.getByCode(e)} className="form-inline">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Enter Code 🔧"
                                    value={this.state.search}
                                    onChange={(e) => this.setState({ search: e.target.value })}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                    <div id="codes-container" className="col-md-12">
                        <table id="code-table" className="table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Code:</th>
                                    <th scope="col">Description:</th>
                                    <th scope="col">Possible Causes:</th>
                                    <th scope="col">Tech notes:</th>
                                    <th scope="col">Info:</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            {this.state.searchedCodes.map((c, i) =>

                                <tbody key={i}>
                                    <tr>
                                        <td>{c.id}</td>
                                        <td>{c.descripton}</td>
                                        <td>
                                            <td>{c.possibleCauses}</td>
                                        </td>
                                        <td>{c.technotes}</td>
                                        <td><a href={c.link}>Autocodes</a></td>
                                        <td>
                                            <YouTubePlayer
                                                url={c.videoURL}
                                                notplaying
                                                controls
                                                height="300px"
                                                width="300px"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </Animated>
        )
    }
}

export default Codes;