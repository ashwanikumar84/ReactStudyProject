
const initialState ={
    age:21
}
const ReducerSample = (state= initialState, action) =>{
    const newState = {...state}

    if(action.type === "Add"){
        // const updatedState = newState.age+1
         newState.age+1
    }
    if(action.type === "Sub"){

        newState.age-1
    }
    return newState
}

export default ReducerSample