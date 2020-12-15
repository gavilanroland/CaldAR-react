import React, { Component} from 'react';
//import {Form, Input, Label} from 'reactstrap'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      name: "",
      age: "",
      email: "",
      phone: "",
      address: "",
      contact: "",
      category: ""
    
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange (e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]:value,
    });

  }
  handleClick (e) {
   
  }
  handleSubmit (e) {
   
  }
  render (){
    return (
      <div id="content" name="content">
        <div id="category" name="category">
          <h2 >Technicians</h2>
        </div>
        <div >
          <form id="form" name="form" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.onChange}></input>
            <label>Age</label>
            <input type="number" name="age" value={this.state.age} onChange={this.onChange}></input>
            <label>email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.onChange}></input>
            <label>Phone</label>
            <input type="Number" name="phone" value={this.state.phone} onChange={this.onChange}></input>
            <label>Address</label>
            <input type="text" name="address" value={this.state.address} onChange={this.onChange}></input>
            <label>Contact</label>
            <input type="text" name="contact" value={this.state.contact} onChange={this.onChange}></input>
            <label>Category</label>
            <input type="text" name="category" value={this.state.category} onChange={this.onChange}></input>
          </form>
          <button id="button" name="button"  onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
