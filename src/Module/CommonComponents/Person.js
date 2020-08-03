import React, {useEffect} from 'react'

const Person = (props) => {
    
    // gets called after component is re-rendered
    useEffect(() => {
        // callback to parent that set props
        // alert('useEffect called')
    })

    return(
        <div style={{width: 'auto', marginTop:'10px'}}>
            <li>
                <span>{props.name} </span>
                <button onClick={props.eventDelete} style={{float: 'right'}}>x</button> 
                <input onChange={props.eventChange} style={{float: 'right', width:'100px'}}></input>
               
            </li>
        </div>
        
    )
}

export default Person