import React from 'react'

const initialState = {
    message: "Start Loading",
    isLoading : false,
    users: []
}

export const FetchUserReducer = (state = initialState, action) => {
    const newState = {...state}
        
    console.log("message = "+ action)
    newState.users = action
    newState.message = "Loading Completed"
    newState.message = false
    return newState
};
