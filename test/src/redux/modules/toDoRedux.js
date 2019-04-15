export const types = {
    SET_ENTERING_TASK:            'APP/TODO_REDUX/SET_ENTERING_TASK',
    ADD_TASK:                     'APP/TODO_REDUX/ADD_TASK'
};

//----
const initialState = {
    taskList: [],

    enteringTask: ''
};

//---- actionCreators--------//
export const actions = {
    setEnteringTask:        (text) => ({type: types.SET_ENTERING_TASK, text}),
    addTask:                (guid) => ({type: types.ADD_TASK, guid})
};

//----
export const reducer = (state = initialState, action) => {
    //----
    const newState = {
        ...state,
        taskList: state.taskList.map(taskObj => ({...taskObj}))
    };
    switch (action.type) {

        case types.SET_ENTERING_TASK:
        {
            newState.enteringTask = action.text;
            return newState
        }

        case types.ADD_TASK:
        {
          newState.taskList = [...newState.taskList,
                                                  {   taskId:    action.guid,
                                                      taskText:  state.enteringTask,
                                                      // time:      action.time
                                                  }];
            return newState;
        }

        default:
            return state;
    }
};