import connect from "react-redux/es/connect/connect";
import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import {actions as actionsToDoPage} from "../../redux/modules/toDoRedux";



const MainHeaderContainer = (props) => {
    return <MainHeader {...props} />
};

//---

const mapStateToProps = (state) => {
    return {
        enteringTask: state.toDoPage.enteringTask
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEnteringTaskChanged: (text) => {
          dispatch(actionsToDoPage.setEnteringTask(text))
        },
        onCreatingTaskFinishCommitted: (guid) => {
            dispatch(actionsToDoPage.addTask(guid));
            dispatch(actionsToDoPage.setEnteringTask(''))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer);
