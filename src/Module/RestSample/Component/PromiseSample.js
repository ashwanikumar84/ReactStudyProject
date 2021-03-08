import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../redux/FetchUserAction'
import List from '../../CommonComponents/List'
import { getRepositories } from '../../Network/Repository'
import axios from 'axios';

const PromiseSample = () =>{

    const[repoState, setRepoState] = useState({
        message: "",
        isLoading : false,
        users: []
    }) 

    // const apiUrl = 'https://api.github.com/users/hacktivist123/repos'

    const apiUrl = 'http://jsonplaceholder.typicode.com/users'
    const getMyRepositories =() =>{
        setRepoState({
            isLoading : false,
            message : "Loading..."
  
        })

        const respone = new Promise((resolve, reject) => {
            let condition;  
            axios.request(apiUrl).then((response) => {
                console.log('This is your data', response.status)
                if(response.status == 200) {    
                    resolve(response.data);  
                    return
                } else {    
                    reject('Promise is rejected');  
                }
            })
            
        }).then((response) =>{
            setRepoState({
                isLoading : false,
                message : "Completed",
                users: response
            })
            console.log('This is your response : ', response)
        })
 
    }

    return(
        <div>
            <div className='container'>
                <h1>Using Promise API</h1>
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

                <button onClick={getMyRepositories.bind(this)}>Get Repositories</button>
            </div>
        </div>
    )
}

export default PromiseSample