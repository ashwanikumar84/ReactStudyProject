import React from 'react'
import StylesWrapper from '../HOC/StylesWrapper'

const CustomButton = (props) =>{
    // let _styles = {...styles.default}
    // if(props.disable){
    //     _styles = {... , ...styles.disable};
    // }
    return(
        <div>
            <button onClick={props.clickEvent} style={props.styles1}>{props.children}</button>
        </div>
    )
}
export default StylesWrapper(CustomButton)