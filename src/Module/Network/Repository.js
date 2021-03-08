import React from 'react'
import axios from 'axios';

const apiUrl = `https://api.github.com/users/hacktivist123/repos`;

// export const getRepositories = (props) => {

    // return(
        
    //     fetch(apiUrl).then((res) => res.json).then((repos) => {
            
    //     })
    // )

    // fetch(apiUrl).then((res) => res.json()).then(payload => {
            
    //     setRepoState({
    //         isLoading : false,
    //         message : "Completed",
    //         users: payload
    //     })
    //     // console.log('This is your data', payload)
    // });  
// },


    function getAllUser(){
        console.log('Feching')
        // fetch(apiUrl).then((res) => res.json()).then(payload => {
                
        //     // setRepoState({
        //     //     isLoading : false,
        //     //     message : "Completed",
        //     //     users: payload
        //     // })
        //     console.log('This is your data', payload)
        // });

        return new Promise((resolve, reject) => {
            let condition;  
            axios.request(apiUrl).then((response) => {
                console.log('This is your data', response.status)
                if(response.status == 200) {    
                    resolve(response.data);
                      
                } else {    
                    reject('Promise is rejected');  
                }
            })
        })
        
        // .then((response) =>{
        //     // setRepoState({
        //     //     isLoading : false,
        //     //     message : "Completed",
        //     //     users: response
        //     // })
        //     console.log('This is your response : ', response)
        // })
    }

    function getAllUser1() {
        axios.get(apiUrl).then((response) => {
            const payload = response.data
            
            // setRepoState1({
            //             isLoading : false,
            //             message : "Completed",
            //             users: payload
            //         })
            console.log('This is your data', payload.data)
        })
    }
    
const Respository = {getAllUser, getAllUser1}
export default Respository