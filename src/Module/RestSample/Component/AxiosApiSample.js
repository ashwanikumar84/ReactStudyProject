import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../redux/FetchUserAction'
import List from '../../CommonComponents/List'
import { getRepositories } from '../../Network/Repository'
import axios from 'axios';


const AxiosApiTestComponent = () =>{

    const dispatch = useDispatch()
    // const repoState = useSelector(state => state.fetchUserReducer)
    const[repoState1, setRepoState1] = useState({
        message: "",
        isLoading : false,
        users: []
    }) 

    const[repoState2, setRepoState2] = useState({
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
    
    // const apiUrl1 = 'http://jsonplaceholder.typicode.com/user'
    const apiUrl2 = 'https://api.github.com/users/hacktivist123/repos'
    const apiUrl1 = 'https://restcountries.eu/rest/v2/all'
    

    const getMyRepositories =() =>{
        setRepoState1({
            message: "Loading...",
            isLoading : true,
  
        })
        
        // dispatch(getUsers())

        // axios.all([axios.get(apiUrl1),
        //     axios.get(apiUrl2)]).then(response => {
        //             console.log('Date created:1 ', response[0].data);

        //             setRepoState1({
        //                 isLoading : false,
        //                 message : "Completed",
        //                 users: response[0].data
        //             })
        //             console.log('This is your data', repoState1.users)    

        //             console.log('Date created:2 ', response[1]);
        //             setRepoState2({
        //                 isLoading : false,
        //                 message : "Completed",
        //                 users: response[1].data
        //             })
        //             console.log('This is your data', repoState2.users)
        //         }).catch((err) => {
        //             throw err
        //         })

        axios.get(apiUrl1).then((response) => {
            const payload = response.data
            
            setRepoState1({
                        isLoading : false,
                        message : "Completed",
                        users: payload
                    })
                    console.log('This is your data', repoState1.users)
        })
    }
// Using Redux Hooks
    // const getMyRepositories = () => {
    //     dispatch(getUsers(true))
    // }

    return(
        <div>
            <div className='container'>
                <h1>Using Axios API</h1>
            </div>

            <div className='container'>
                {(repoState1.isLoading) ? 
                    <h1>{repoState1.message}</h1> 
                : 
                    <div>
                        <List response={'repoState1.users'}/>
                        {/* <List response={repoState2.users}/> */}
                        <h2>{repoState1.message}</h2>
                    </div> 
                }

                <button onClick={getMyRepositories.bind(this)}>Get All Users</button>
            </div>
        </div>
    )
}

export default AxiosApiTestComponent