import React, {useRef, useState, createRef, forwardRef} from 'react';
import BaseComponent from '../../../Base/BaseComponent';
import Person from '../../../Entity/Person'
import {useSelector, useDispatch} from 'react-redux';
import {addMenu,removeMenu} from '../redux/MenuAction'
import { NavLink } from "react-router-dom";
  
   
// class AppLeftSideBar extends BaseComponent {

  // personObject = new Person()

  // getPersonDetails = () => {
  //   state => state.Me
  //   alert('Person Name is => '+ this.personObject.getUserName() + " -- and Address is => " + this.personObject.getAddress())
  // }


  // render() {
   const AppLeftSideBar = (props) => {

    const defaultUserName = "Ashwani Kumar"
    const menuName = useSelector(state => state.menuReducer) // this reducer name is defined in rootRedeucer under combine
    const dispatch = useDispatch()
    const userNameFromUseRef = useRef(defaultUserName)
    const userNameFromCreateRef = createRef()
    const currentDate = new Date().toLocaleDateString()
    const currentTime = new Date().toLocaleTimeString()
    const personObject = new Person()
    const marray = new Array('a','b','c','d','e','f')
    

    const [myName, setNameState] = useState({
      name : defaultUserName
    })

    const reverseUserName = () =>{
      
      var uname = defaultUserName.split("").reverse().join("")
      setNameState({
          name : uname
      })   
    }

    const handleClick = () =>{
      dispatch(addMenu(userNameFromUseRef.current.value))
      
    }
    
    const redirect = () =>{
     alert('Hello')      
    }

    if (!userNameFromUseRef.current) {
      userNameFromCreateRef.current = defaultUserName;
    }

    if (!userNameFromCreateRef.current) {
      userNameFromCreateRef.current = defaultUserName;
    }
    

    return (
      <div  style={{width: '100%', height : "auto",padding: '10px', border: '1px solid red'}}>
       {props.children}
     
        <br/><br/>
        {currentDate}<br/>
        {currentTime}<br/>
        <br/>
        {/* {marray} */}
        <br/>
        {myName.name}
        <br/><br/>

        <button onClick={()=> reverseUserName()}> Reverse Name </button> <br/><br/>
     
        {/* "Need to ask a question : how I can access object direclty" */}
        <button onClick={() => personObject.getUserName()}>
          Show  Hello
        </button>
        
        <h1 contentEditable='true'>{props.menu1}</h1>
        <h1 draggable='true'>{props.menu2}</h1> 
        <h1>{props.menu3}</h1>
        
        {/* Template Example using back tick */}
        {`Using Redux Style 1: ${menuName.name}`}

        <input type='text' placeholder='menu name' ref={userNameFromUseRef}></input>
        <br/><br/>
        <button onClick={() => handleClick()}>Add Menu</button>
  
        <br/><br/>

        <NavLink
          to={"#axios"} onClick={() => redirect()}>
            redirect
        </NavLink>

        <ul style={{display: 'flex'}}>
           Using Redux Style 1: <br/><br/> {menuName.name}
        </ul>
        <br/><br/>

        <ul style={{display: 'flex'}}>
           Using Redux Style 1: <br/><br/> {menuName.name}
        </ul>
        <br/><br/>

        <ul style={{display: 'flex'}}>
           Using Redux Style 1: <br/><br/> {menuName.name}
        </ul>
        <br/><br/>

        <ul style={{display: 'flex'}}>
           Using Redux Style 1: <br/><br/> {menuName.name}
        </ul>
        <br/><br/>

        <ul style={{display: 'flex'}}>
           Using Redux Style 1: <br/><br/> {menuName.name}
        </ul>
        <br/><br/>

        <ul style={{display: 'flex'}}>
           Using Redux Style 1: <br/><br/> {menuName.name}
        </ul>
        <br/><br/>

        <ul style={{display: 'flex'}}>
           Using Redux Style 1: <br/><br/> {menuName.name}
        </ul>
        <br/><br/>

        <ul style={{display: 'flex'}}>
           Using Redux Style 1: <br/><br/> {menuName.name}
        </ul><br/><br/>

      <ul style={{display: 'flex'}}>
         Using Redux Style 1: <br/><br/> {menuName.name}
      </ul>

      </div>
    );
  // }
}

export default AppLeftSideBar;
