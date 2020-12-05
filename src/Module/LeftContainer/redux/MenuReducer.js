const initialState = {
    name: "Default"
}

 const MenuReducer = (state = initialState, action) => {
    const newState = {...state}
        

    switch(action.type){
        case "ADD_MENU":
             newState.name = action.payload
             return newState
            // return {...state, name: action.payload}
        case "REMOVE_MENU":
            return {...state, name: action.payload}
        default:
            return state         
    }
};

export default MenuReducer