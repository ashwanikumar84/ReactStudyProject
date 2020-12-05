import React from 'react';
// import AppHeader from './Header';
import Person from '../../../Entity/Person'
import StateHook from '../../../Entity/StateHook'
// import personObject from '../../../Entity/Person'
import User from '../../CommonComponents/User'
import ReduxStyle2Component from '../../CommonComponents/ReduxStyle2Component'
import BindingExample from '../../CommonComponents/BindingExample'
import ComponentLifeCycle from '../../../ComponentSamples/LifeCycle/ComponentLifeCycle'

{/*}
state = {
  counter: 0
}

personObject = new Person()
*/}
// class AppMainContent extends BaseComponent {

const AppMainContent = (props) => {

  // headerObject = new AppHeader()
 

  // myFunction = params1 => 'Hello 11 '+ params1
 
  // render() {
    // {console.log(this.personObject.getAddress)}
    return (
      <div style={{width: '70vw', height : `auto`, border: '1px solid blue'}} > {/* onClick={()=>{alert('result = '+ this.myFunction(3))}} */}
      
        Main Content
        <br/>
        {/* {personObject.getAllUser()} */}
        <br/>
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex', padding:"10px", width: `20vw`, height : `40vh`, border: '1px solid blue'}}>
              <StateHook/>
              </div>
            <div style={{display:'flex', padding:"10px", direction:'row', width: `40vw`, height : `40vh`, border: '1px solid blue'}}>
              <BindingExample/>
            </div>
            <div style={{textAlign: "left", padding:"10px", direction:'row', width: `20vw`, height : `40vh`, border: '1px solid blue'}}>
              <User profile={0}>Ashwani</User>
              <User profile={"Android"}>Vishal</User>
              <User profile={"BE"}></User>
            </div>
        </div>

        <div style={{display: 'flex'}}>
          <div style={{display: 'flex', padding:"10px", width: `20vw`, height : `40vh`, border: '1px solid blue'}}>
            <ReduxStyle2Component/>
          </div>
          <div style={{display: 'flex', padding:"10px", width: `20vw`, height : `40vh`, border: '1px solid blue'}}>
            <ComponentLifeCycle/>
          </div>
        </div>

        {/* State counter from Redux : {this.props.ctr}<br/>
        <button onClick = {this.props.onIncrementCounter}>Increment Counter</button> */}
      </div>
    );
  // }
}

// const mapStateToProps = state => {
//   return{
//     ctr : state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return{
//     onIncrementCounter: () => dispatch({type: 'INCREMENT'})
//   }
// }

export default AppMainContent;
// export default connect(mapStateToProps, mapDispatchToProps)(AppMainContent);

