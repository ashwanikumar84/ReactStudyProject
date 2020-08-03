// import redux from 'redux'
const redux = require('redux') // to execute it through node - node redux-basic.js
const createStore = redux.createStore

// Initilization

const initialState = {
    counter: 0
}

// Reducer

// 1. current state is state 
// 2. action
// 3. fun has to return updated state

const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return{
            ...state,// using spread operator copy the old state
            counter: state.counter +1 // Override the property for immuatble object
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return{
            ...state,// using spread operator copy the old state
            counter: state.counter + action.value // Override the property for immuatble object
        }
    }
    return state
}

// Store

// rootReducer is required to create a store
const store = redux.createStore(rootReducer);
console.log(store.getState())

// Subscription 

store.subscribe(() => {
    console.log('After Subscription initiate = ', store.getState())
})

// Dispatcheing Action

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});


// const rootReducer = (state = initialState, action) => {
//     if(action.type === 'INC_COUNTER'){
//         // console.log('INC_COUNTER '+ state.counter)
//         return{
//             ...state,// using spread operator copy the old state
//             counter: state.counter +1 // Override the property for immuatble object
//         }
//     }
//     if(action.type === 'ADD_COUNTER'){
//         return{
//             ...state,// using spread operator copy the old state
//             counter: state.counter + action.value // Override the property for immuatble object
//         }
//     }
//     return state
// }