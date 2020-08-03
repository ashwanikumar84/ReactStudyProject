import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
// import Footer from './Footer';
import Main from './Main';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import BaseComponent from './components/BaseComponent';
// import {baseValue} from './components/Header';


class App extends BaseComponent {

  render() {
    return (
      <div className="App" style={{height:'100vh'}}>
         <Header title="QA-Infotech"> A Leading Testing Company</Header>
      <div style={{display:'flex', direction:'row', justifyContent : 'space-between'}}>
      
        <LeftSideBar/>
            <Main/>
        <RightSideBar/>      
        </div>
        {/* <Footer/>  */}
      </div>
    );
    return React.createElement()
  }
}

export default App;
