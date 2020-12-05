import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseComponent from './Base/BaseComponent';


// const  header = (props) =>{

// };



class AppHeader extends BaseComponent {

  name = "Ashwani"
  // currentDate = new Date.toString
  myFunction1 = (params) => {
    alert('params value =  '+ params)
  }

  render() {
    return (
      <div  style={{width: `100vw`, height : `15vh`, border: '1px solid red'}} onClick={() =>{
        this.myFunction1('click on header')
      
      }}>
        <h1>{this.props.title}</h1>
          <p>{this.props.children}</p>
          {/* currentDate */}
      </div>
    );
  }
}
export const baseValue = 'Base Header Text'

export default AppHeader;
