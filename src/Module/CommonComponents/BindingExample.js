import React ,{useState} from 'react'


const BindingExample = () => {

    const [changeName, setNameState] = useState({
        name : 'Initial Value'
    })

    const reset = (event) =>{
        setNameState({
            name : "Initial Value"
        })   
    }
    const changeMyName = (name) =>{
        setNameState({
            name : name
        })   
    }

    const changeMyNameFromInput = (event) =>{
        setNameState({
            name : event.target.value   
        })   
    }

    return(
        <div style={{padding :"10px"}}>
            Two way binding <input type="text" onChange={changeMyNameFromInput} ></input><br/><br/>
            Type into intput and state will be change
            User name state : <h3>{changeName.name}</h3>
            <button onClick={()=> changeMyName('Ashwani :(')}> Change Name using anon function </button> <br/><br/>
            <button onClick={changeMyName.bind(this, 'Ashwani :)')}>Change Name using bind function</button>  <br/><br/>
            {/* <button onClick={changeMyNameFromInput.bind(this, 'Ashwani :)')}>Change Name using bind function</button>  <br/><br/> */}
            
            &nbsp; <button onClick={reset}> Reset Name</button>
        </div>
    )
}

export default BindingExample