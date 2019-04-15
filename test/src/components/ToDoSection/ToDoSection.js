import React from 'react';
import style from './ToDoSection.module.css';
import menuIcon from "./images/Menu_Icon.svg";


const ToDoSection = (props) => {
    return (
        <div className={style.toDoSection}>
            <div className={style.toDoContainer}>
                <label className={style.toDoLabel}>
                    Tasks (5)
                </label>
                <div className={style.taskListBlock}>
                    {props.taskList.map((task) => {
                        return (
                            <div className={style.toDoItemContainer}>
                                <div className={style.toDoPriorityBlock}>

                                </div>
                                <div className={style.toDoTitle}>
                                    Title
                                </div>
                                <div className={style.toDoText}>
                                    {task.taskText}
                                </div>
                                <div className={style.toDoMenuImgBlock}>
                                    <img className={style.toDoMenuImg} src={menuIcon} align="menu"/>
                                </div>
                                <div className={style.toDoTimeBlock}>
                                    12121
                                </div>

                                <div className={style.toDoMenuBlock}>
                                    <span className={style.listMenu}>
                                        Edit
                                    </span>
                                    <span className={style.listMenu}>
                                        Completed
                                    </span>
                                    <span className={style.listMenu}>
                                            Delete
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={style.completedContainer}>
                <label className={style.completedLabel}>
                    Completed (2)
                </label>
            </div>
        </div>
    )
};


export default ToDoSection;