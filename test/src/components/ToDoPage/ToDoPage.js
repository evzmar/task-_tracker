import React from 'react';
import style from './ToDoPage.module.css';
import MainSidebar from "../MainSidebar/MainSidebar";
import MainHeaderContainer from "../../containers/MainHeaderContainer/MainHeaderContainer";
import ToDoSectionContainer from "../../containers/ToDoSectionContainer/ToDoSectionContainer";




const ToDoPage = (props) => {

    return (
        <div className={style.toDoPageContainer}>
            <div className={style.headerContainer}>
                <MainHeaderContainer/>
            </div>
            <div className={style.sidebarContainer}>
                <MainSidebar/>
            </div>
            <div className={style.toDoSectionContainer}>
                <ToDoSectionContainer/>
            </div>

        </div>
    )
};

export  default ToDoPage;