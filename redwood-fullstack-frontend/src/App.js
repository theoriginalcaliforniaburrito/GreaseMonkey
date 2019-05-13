import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Edit from './components/edit';
import Home from './components/home';
import Search from './components/search';
import Navbar from './components/navbar';
import Contact from './components/contact';
import Easteregg from './components/easteregg';
import Codes from './components/codes';

class App extends Component {
  state = {
    users: [],
    searchResult: {}
  }

  componentWillMount() {
    this.getUsers()
  }

  getUsers= () => {
    console.log('hello')
    axios.get('http://localhost:5000/users')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
  }

  getByName= (user) => {
    axios.get(`http://localhost:5000/users/name/${user}`)
      .then(res =>{
        console.log(res);
        this.setState({
          searchResult: res.data
        })
      })
  }

  addUser = (user) => {
    console.log('trying to post')
    axios.post('http://localhost:5000/users', user)
      .then(res => {
        console.log(res);
      })
  }

  update = (user, id) => {
    axios.put(`http://localhost:5000/users/${id}`, user)
      .then(res =>{
        console.log(res);
      })
  }

  delete = (user) => {
    axios.delete(`http://localhost:5000/users/${user}`)
      .then(res =>{
        console.log(res);
      })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />

          <Switch>
            <Route exact path='/' render={() => <Home users={this.state.users}/>}></Route>
            <Route exact path='/edit' render={() => <Edit users={this.state.users} addUser={this.addUser} update={this.update} delete={this.delete}/>}></Route>
            <Route exact path='/search' render={() => <Search getByName={this.getByName} searchResult={this.state.searchResult}/>}></Route>
            <Route exact path='/contact' render={() => <Contact />}></Route>
            <Route exact path='/easteregg' render={() => <Easteregg />}></Route>
            <Route exact path='/codes' render={() => <Codes />}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
