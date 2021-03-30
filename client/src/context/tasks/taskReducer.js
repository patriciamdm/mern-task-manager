import { PROJECT_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK, COMPLETED_TASK, SELECTED_TASK, UPDATE_TASK } from '../../types'
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return { ...state, projecttasks: action.payload }
        case ADD_TASK:
            return { ...state, projecttasks: [action.payload, ...state.projecttasks], taskerror: false }
        case VALIDATE_TASK:
            return { ...state, taskerror: true }
        case DELETE_TASK:
            return { ...state, projecttasks: state.projecttasks.filter(elm => elm._id !== action.payload) }
        case COMPLETED_TASK:
        case UPDATE_TASK:
            return { ...state, projecttasks: state.projecttasks.map(elm => elm.id === action.payload.id ? action.payload : elm), selectedtask: null }
        case SELECTED_TASK:
            return { ...state, selectedtask: action.payload }
        default:
            return state
    }
}