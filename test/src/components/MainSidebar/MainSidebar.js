import React from 'react';
import style from './MainSidebar.module.css';
import logo from './images/org.flat_.logo_.400_0.jpg';
import home from './images/home_house_icon-icons.com_49851.png';
import settings from './images/settings.svg'


const MainSidebar = (props) => {
  return (
      <div className={style.c_sidebar}>
         <div className={style.labelBlock}>
             <div className={style.logoToDoBlock}>
                 <img className={style.logoToDoImg} src={logo} alt="logo"/>
             </div>
             <div className={style.labelToDo}>
                 ToDo
             </div>
         </div>
          <div className={style.homeBlock}>
              <div className={style.logoHomeBlock}>
                  <img className={style.homeImg} src={home} alt="home"/>
              </div>
              <div className={style.labelHome}>
                  Home
              </div>
          </div>
          <div className={style.settingsBlock}>
              <div className={style.logoSettingsBlock}>
                  <img className={style.settingsImg} src={settings} alt="settings"/>
              </div>
              <div className={style.labelSettings}>
                  Settings
              </div>
          </div>
      </div>
  )
};

export default MainSidebar;