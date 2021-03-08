import React, {useEffect, useState} from 'react'
import {useSelctor, useDispatch} from 'react-redux';
import { getUsers } from '../redux/FetchUserAction'
import List from '../../CommonComponents/List'
import respository  from '../../Network/Repository'
import {getAllUser, getAllUsers} from '../../Network/Repository';

console.log('respository....', respository)
const AllUserComponent = () =>{

    const dispatch = useDispatch()
    // const repoState = useSelector(state => state.fetchUserReducer)
    const[repoState, setRepoState] = useState({
        message: "",
        isLoading : false,
        users: []
    }) 
//For on componenent mount use hook "useEffect"
    // useEffect(() => {  
          
    //     getMyRepositories()
    //     // setRepoState({
    //     //     isLoading : false 
    //     // })
    // },[setRepoState]);
    
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos'

    // const apiUrl = 'http://jsonplaceholder.typicode.com/users'
    const getAllUsers =() =>{
        setRepoState({
            isLoading : true,
            message : "Loading..."
  
        })

        respository.getAllUser().then((res) =>{
            console.log('aaaaaa',res)
        })
    }

// Using Redux Hooks
    // const getMyRepositories = () => {
    //     dispatch(getUsers(true))
    // }

    return(
        <div>
            <div className='container'>
                <h1>Using Fetch API</h1>
            </div>

            <div className='container'>
                {(repoState.isLoading) ? 
                    <h1>{repoState.message}</h1> 
                : 
                    <div>
                        <List response={repoState.users}/>
                        <h2>{repoState.message}</h2>
                    </div> 
                }

                {/* <button onClick={getMyRepositories.bind(this)}>Get Repositories</button> */}
                <button onClick={getAllUsers.bind(this)}>Get All Users</button>
            
            </div>
        </div>
    )
}

export default AllUserComponent