import React, {useState}from 'react'
import Header from '../Header';
// import Footer from '../Footer';
import Main from '../Module/MainContent/component/Main';
import LeftSideBar from '../Module/LeftContainer/component/leftSideBar';
import RightSideBar from '../Module/RightContainer/component/RightSideBar';
import StateHook from '../Entity/StateHook';

const Container = () => {

    const [menuState] = useState({
        menus:[
            {name: "Menu 1"},
            {name: "Menu 2"},
            {name: "Menu 3"},
          ],
          title: "A Leading Testing Company"
    })
    return(
        <div style={{width: '100%', height: 'auto',direction:'row', justifyContent : 'space-between'}}>
            <div>
            <Header title="QA-Infotech"> {menuState.title}</Header>
            </div>
            
            <div style={{width: '100%', height: '100%',display:'flex', direction:'col', justifyContent : 'space-between'}}>

                <div style={{width: '20%', height: 'auto', display:'flex', justifyContent : 'space-between'}}>
                    <LeftSideBar menu1={menuState.menus[0].name} menu2={menuState.menus[1].name} menu3={menuState.menus[2].name}> Left Side Bar </LeftSideBar>
                </div>
                <div style={{width: '60%', height: 'auto', display:'flex', justifyContent : 'space-between'}}>
                    <Main/>
                </div>
                <div style={{width: '60%', height: 'auto', display:'none',justifyContent : 'space-between'}}>
                    <StateHook />
                </div>  
                <div style={{width: '20%', height: 'auto', display:'flex', justifyContent : 'space-between'}}>
                    <RightSideBar menuList={menuState.menus}/> 
                </div>

            </div>
        </div>
    )
}

export default Container