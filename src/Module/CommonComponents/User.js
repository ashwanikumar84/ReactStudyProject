import React from 'react';
import PropType from 'prop-type'
import {useSelector} from 'react-redux'; // useSelector is used to subscribe an action

const User = (props) => {
    let profile = props.profile ? props.profile: 'N/A'
    const menuName = useSelector(state => state.menuReducer) 
    if(props.children){
        return(
            <div>
                <div>
                    Name :- {props.children} | Profile : {profile}
                </div>
            </div>    
        )
    } else  {
        return (
            <div> 
                Invalid Entry
                <br/><br/>
                {menuName.name}
            </div>
        )
    }
}

// User.PropType = {
//     profile: PropType.String
// }
export default User;