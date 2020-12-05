import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../redux/FetchUserAction'
import List from '../../CommonComponents/List'
// import { getRepositories } from '../../Network/FetchAPI'


const Repositories = () =>{

    const dispatch = useDispatch()
    const repoState = useSelector(state => state.fetchUserReducer)
    // const[repoState, setRepoState] = useState({
    //     message: "Start Loading",
    //     isLoading : false,
    //     users: []
    // }) 

    // useEffect(() => {  
          
    //     getMyRepositories()
    //     setRepoState({
    //         isLoading : true 
    //     })
    // },[setRepoState]);
    // const apiUrl = 'https://api.github.com/users/hacktivist123/repos'

    // const apiUrl = 'http://jsonplaceholder.typicode.com/users'
    // const getMyRepositories =() =>{
    //     setRepoState({
    //         isLoading : true,
    //         message : "Loading..."
  
    //     })

    //     // dispatch(getUsers())

    //     fetch(apiUrl).then((res) => res.json()).then(payload => {
            
    //         setRepoState({
    //             isLoading : false,
    //             message : "Completed",
    //             reponse: payload
    //         })
    //     });   
    // }

    const getMyRepositories = () => {
        dispatch(getUsers(true))
    }

    return(
        <div>
            <div className='container'>
                <h1>My Repositories {repoState.message}</h1>
            </div>

            <div className='container'>
                {(repoState.isLoading) ? 
                    <h1>{repoState.message}</h1> 
                : 
                    <div>
                        <List response={repoState.reponse}/>
                        <h1>{repoState.message}</h1>
                    </div> 
                }

                {/* <button onClick={getMyRepositories.bind(this)}>Get Repositories</button> */}
                <button onClick={getMyRepositories.bind(this)}>Get Repositories</button>
            
            </div>
        </div>
    )
}

export default Repositories