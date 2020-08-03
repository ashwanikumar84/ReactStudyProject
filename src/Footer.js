import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseComponent from './BaseComponent';

class AppFooter extends BaseComponent {

  render() {
    return (
      <div style={{width: `100vw`, height : '15vh', border: '1px solid blue'}}>
        Footer
      </div>
    );
  }
}

export default AppFooter;
