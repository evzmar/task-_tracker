import React from 'react';
import style from './MainHeader.module.css';
import avatar from './images/avatarka-prikolnaya.jpg';
import menu from './images/menu.svg'
import generateGuid from "../../utils/guid";


const MainHeader = (props) => {
    return (
        <div className={style.mainHeaderContainer}>
            <div className={style.menuIconBlock}>
                <img src={menu} className={style.menuIcon} alt='menu'/>
            </div>
            <div className={style.addToDoBlock}>
                <input className={style.addToDoInput}
                       value={props.enteringTask}
                       onChange={(e) =>
                           props.onEnteringTaskChanged(e.target.value)}/>
                <button className={style.addToDoButton}
                        onClick={(e) => props.onCreatingTaskFinishCommitted(generateGuid())}>
                    Add
                </button>
            </div>
            <div className={style.avatarBlock}>
                <img src={avatar} className={style.avatarImg} alt="avatar"/>
            </div>
        </div>
    )
};

export default MainHeader;