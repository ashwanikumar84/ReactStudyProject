import React ,{useRef, useState} from 'react';
import Person from '../../CommonComponents/Person'
import CustomButton from '../../../Wedgits/CustomButton'
// import UniqueId from 'react-html-id'


const AppRightSideBar = (props) => {

    const userName = useRef()
    // UniqueId.enableUniqueIds(this)


    const [state, setState] = useState({
       mystate:["Current State 1","Current State 2","Current State 3" ]
    })
    
    const updateMenus = () => {
      setState({
        mystate:["Updated State 1","Updated State 2","Updated State 3" ]
     })
    }

    const [personsState, setPersonsState] = useState({
      persons:[
        {id:"id1",name:"Ashwani", age:"35"},
        {id:"id2",name:"Vishal", age:"36"},
        {id:"id3",name:"Ashish", age:"33"}, 
      ]
   })

    const deletePerson = (index) => {
      const persons = Object.assign([],personsState.persons)
      persons.splice(index)
      setPersonsState({persons})

    }

    const addPerson = (name) => {
      const persons = Object.assign([],personsState.persons)
      // persons.concat({id:"id4",name:"alex",age:"25"})
      persons.push({id:"id5", name:userName.current.value ,age:"25"})
      setPersonsState({persons})
      console.log(persons)
    }


    const nameInputType = (event) =>{
      // setNameState({
      //     name : event.target.value   
      // })   
    }

    const updatePerson = (id, event) => {
      
      const index = personsState.persons.findIndex((person) => {
          return person.id === id
      })  
       console.log(index) 
      const person = Object.assign({},personsState.persons[index])
      person.name = event.target.value
      const persons = Object.assign([],personsState.persons)
      persons[index] = person
      setPersonsState({persons})

    }
    return (
      
      <div style={{textAlign: "left", width: `100%`, height : `auto`, padding: '10px', border: '1px solid blue'}}>
        Right Side Bar<br/>
        <br/>
        Custom Wedgit : <CustomButton disable clickEvent={updateMenus.bind(this)}>Update Menu</CustomButton>

        {props.menuList.map((menu, i) => 
           <h2><li key={i+""}>{menu.name} --- {i}</li></h2>
        )}

        <h3>{state.mystate[0]}</h3>
        <h3>{state.mystate[1]}</h3>
        <h3>{state.mystate[2]}</h3>
      
        {personsState.persons.map((person,index) =>
          <Person eventDelete={deletePerson.bind(this,index)} eventChange={updatePerson.bind(this,person.id)} name={person.name} age={person.age}/>
        )}    
        <div style={{marginTop:'10px'}}>
            <input type="text" ref={userName}  placeholder='menu name' />
            <button style={{marginTop:'10px'}} onClick={addPerson.bind(this)}>Add Person</button>
        </div>
      </div>
    );
}

export default AppRightSideBar;
