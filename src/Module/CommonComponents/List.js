import React from 'react'
import propTypes from "prop-types";

const List =(props) => {
const repos =  props.response

console.log("response = "+repos)
    if(!repos || repos.length === 0)
    return  <p>No Users, Sorry</p>
    return(
        <React.Fragment>
            <ul style={{listStyle:'none'}}>
                <h2>Available Public Repositories</h2>
                {/* {repos.map((item) => 
                    <li> 
                        <span>{Object.values(item.languages[0].name)}</span>   
                    </li>
                )} */}
            </ul>
        </React.Fragment>
    )
}
List.propTypes = {
    response: propTypes.object.isRequired
    
}
export default List