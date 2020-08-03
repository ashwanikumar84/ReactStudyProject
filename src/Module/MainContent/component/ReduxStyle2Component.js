import React, {useState} from 'react'
import connect from 'react-redux'
import { withRouter } from 'react-router-dom'


const ReduxSample = (props) =>{

    /*const [state, setState] = useState({
        age:21
    })

    const increment = () =>{
        setState({
            age:state.age+1    
        })
    }

    const decrement = () =>{
        setState({
            age:state.age-1
        })
    }*/

    return(
        <div>
             Using Redux Style 2: {props.age}<br/><br/>
             {/* <span> {state.age} </span><br/><br/> */}
            {/* <button onClick={increment}>Add</button>  <button onClick={decrement}>Subtract</button> */}
        </div>
    )

}

//Subscripe or map state to props

const mapStateToProps = (state) => {
    return{
        age:state.age
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        increment:() => dispatch({type:'ADD'}),
        decrement:() => dispatch({type:'SUB'})
    }
}
// connect return an Higer Order Component
// export default withRouter(connect(mapStateToProps,mapDispatchToProps)) (ReduxSample)
export default ReduxSample