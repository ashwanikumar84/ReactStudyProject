import React, {useState} from 'react';

const StateHook = props => {

    const [mainContentState, setMainContentState] = useState({
        content:'Main Content'
    })

    const [otherState, setOtherState ] = useState({
      otherState:'Other Content state'
    })

    console.log(mainContentState,otherState)

    const updateMenus = () => {
      setMainContentState({
        content:'Main content state is updated using StateHook'
        
        // otherState: mainContentState.otherState 
        // 'This is manual way to update another object os previous state, Instead use useState multiple time'
     })
     setOtherState({
      otherState:'Other content state is updated',
     }) 
    }

    const resetState = () => {
      // mainContentState = 
      // const newState = {...state}
      setMainContentState({
        content:'Main Content'
        
        // otherState: mainContentState.otherState 
        // 'This is manual way to update another object os previous state, Instead use useState multiple time'
     })
     setOtherState({
      otherState:'Other Content state'
     }) 
    }
    
    return (
    <div>
        Using StateHook<br/><br/>
        <button onClick={updateMenus}>Update Main Content</button> <button onClick={resetState}>Reset</button>

        <h3><p>{mainContentState.content}</p></h3> 
        <p>{otherState.otherState}</p>
    </div>
    );
  }
  
  export default StateHook;
  