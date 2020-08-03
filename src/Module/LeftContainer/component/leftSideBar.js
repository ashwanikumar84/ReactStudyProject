import React, {useRef} from 'react';
import BaseComponent from '../../../Base/BaseComponent';
import Person from '../../../Entity/Person'
import {useSelector, useDispatch} from 'react-redux';
import {addMenu,removeMenu} from '../redux/MenuAction'

  
   
// class AppLeftSideBar extends BaseComponent {

  // personObject = new Person()

  // getPersonDetails = () => {
  //   state => state.Me
  //   alert('Person Name is => '+ this.personObject.getUserName() + " -- and Address is => " + this.personObject.getAddress())
  // }


  // render() {
   const AppLeftSideBar = (props) => {
    
    const menuName = useSelector(state => state.menuReducer) // this reducer name is defined in rootRedeucer under combine
    const dispatch = useDispatch()
    const userName = useRef(null)

    return (
      <div  style={{width: `30vw`, height : `auto`, border: '1px solid red'}}>
       {props.children}
        <br/><br/>
        <button onClick={() => {this.getPersonDetails()}}>
          Show  Hello
        </button>
        
        <h1>{props.menu1}</h1>
        <h1>{props.menu2}</h1> 
        <h1>{props.menu3}</h1>

        ----------------
        
        Using Redux Style 1:  <h3>{menuName.name}</h3>

        <input type='text' placeholder='menu name' ref={userName}></input>
        <br/><br/>
        <button onClick={() => dispatch(addMenu(userName.current.value))}>Add Menu</button>
  
        <br/><br/>

        <ul style={{display: 'flex'}}>
           Using Redux Style 1: <br/><br/> {menuName.name}
        </ul>
------------------------------
      </div>
    );
  // }
}

export default AppLeftSideBar;
