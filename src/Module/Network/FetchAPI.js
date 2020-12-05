import React from 'react'

const apiUrl = `https://api.github.com/users/hacktivist123/repos`;

export const getRepositories = (props) => {

    return(
        
        fetch(apiUrl).then((res) => res.json).then((repos) => {
            
        })
    )
} 