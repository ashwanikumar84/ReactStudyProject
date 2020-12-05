import React from 'react'

const List =(props) => {
const repos =  props.response

console.log("response = "+repos)
    if(!repos || repos.length === 0)
    return  <p>No Repos, Sorry</p>
    return(
        <React.Fragment>
            <ul>
                <h2>Available Public Repositories</h2>
                {repos.map((item) => 
                    <li> 
                        <span>{item.name}</span>   
                    </li>
                )}
            </ul>
        </React.Fragment>
    )
}

export default List