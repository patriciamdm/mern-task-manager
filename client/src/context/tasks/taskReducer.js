import { PROJECT_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK, SELECTED_TASK, UPDATE_TASK, TASK_ERROR } from '../../types'
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return { ...state, projecttasks: action.payload }
        case ADD_TASK:
            return { ...state, projecttasks: [...state.projecttasks, action.payload], taskerror: false }
        case VALIDATE_TASK:
            return { ...state, taskerror: true }
        case DELETE_TASK:
            return { ...state, projecttasks: state.projecttasks.filter(elm => elm._id !== action.payload) }
        case UPDATE_TASK:
            return { ...state, projecttasks: state.projecttasks.map(elm => elm._id === action.payload._id ? action.payload : elm), selectedtask: null }
        case SELECTED_TASK:
            return { ...state, selectedtask: action.payload }
        case TASK_ERROR:
            return {...state, alertmsg: action.payload}
        default:
            return state
    }
}