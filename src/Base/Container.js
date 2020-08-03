import React, {useState}from 'react'
import Header from '../Header';
// import Footer from '../Footer';
import Main from '../Module/MainContent/component/Main';
import LeftSideBar from '../Module/LeftContainer/component/leftSideBar';
import RightSideBar from '../Module/RightContainer/component/RightSideBar';
import StateHook from '../Entity/StateHook';

const Container = () => {

    const [menuState, setMenuState] = useState({
        menus:[
            {name: "Menu 1"},
            {name: "Menu 2"},
            {name: "Menu 3"},
          ],
          title: "A Leading Testing Company"
    })
    return(
        <div>
            
            <Header title="QA-Infotech"> {menuState.title}</Header>
            <div style={{display:'flex', direction:'col', justifyContent : 'space-between'}}>
           
            <LeftSideBar menu1={menuState.menus[0].name} menu2={menuState.menus[1].name} menu3={menuState.menus[2].name}> Left Side Bar </LeftSideBar>
            <Main></Main> 
            <RightSideBar menuList={menuState.menus}/> 
            </div>
        
        </div>
    )
}

export default Container