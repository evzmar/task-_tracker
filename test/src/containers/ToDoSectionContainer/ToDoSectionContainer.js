import React from 'react';
import ToDoSection from "../../components/ToDoSection/ToDoSection";
import connect from "react-redux/es/connect/connect";




const ToDoSectionContainer = (props) => {
  return <ToDoSection {...props} />
};

//---
const mapStateToProps = (state) => {
    return {
        taskList: state.toDoPage.taskList,
        taskText: state.toDoPage.enteringTask
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoSectionContainer);
