import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './Header';
import BaseComponent from './Base/BaseComponent';
import Person from './Entity/Person'
import StateHook from './Entity/StateHook';
import {connect } from 'react-redux'

class AppMainContent extends BaseComponent {

  state = {
    counter: 0
  }
  headerObject = new AppHeader()
  personObject = new Person()

  myFunction = params1 => 'Hello 11 '+ params1
 
  render() {
    // {console.log(this.personObject.getAddress)}
    return (
      <div style={{width: `80%`, height : `70vh`, border: '1px solid blue'}} > {/* onClick={()=>{alert('result = '+ this.myFunction(3))}} */}
      
        Main Content
        <br/>
        {this.personObject.getAllUser()}
        <br/><br/>
        <StateHook/>
        
        State counter from Redux : {this.props.ctr}<br/>
        <button onClick = {this.props.onIncrementCounter}>Increment Counter</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    ctr : state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onIncrementCounter: () => dispatch({type: 'INCREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMainContent);
