import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import './App.css';
import Header from './Header';
import Main from './Module/MainContent/component/Main';
import LeftSideBar from './Module/LeftContainer/component/leftSideBar';
import RightSideBar from './Module/RightContainer/component/RightSideBar';
import BaseComponent from './Base/BaseComponent';
import StateHook from './Entity/StateHook';
import RootContainer from './Base/Container' 

class App extends BaseComponent {

  state = {
    menus:[
      {name: "Menu 1"},
      {name: "Menu 2"},
      {name: "Menu 3"},
    ],
    title: "A Leading Testing Company"
  }

  render() {
    return (
      
      <Router>  
        <div className="App" style={{height:'100vh'}}>
        {/* {this.state.title} */}
          <Route path="/" exact render={
              () => {
                return ( 
                  <RootContainer/>
                )
              }
            }/>

          {/* <Route path="/admin" component={RootContainer}/> */}
          <Route path="/about/" exact render={
              () => {
                return ( <h1>Welcome About Page</h1>)
              }
            }/>

          <Route path="/setting/" exact strict render={
            () => {
              return ( 
                <div>
                <h1>Welcome Setting Page</h1>
                    <h3>Exact path = localhost:port/setting/</h3>
                
              </div>
              )
            }
          }/>

          <Route path="/settings" exact render={
          () => {
            return ( 
            <div>
              <h1>Welcome Setting Page</h1>
                  <h3>Basic path = localhost:port/settings</h3>
              
            </div>
            )
          }
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
