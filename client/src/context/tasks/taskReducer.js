import { PROJECT_TASKS, ADD_TASK, TASK_ERROR, DELETE_TASK, COMPLETED_TASK, SELECTED_TASK, UPDATE_TASK } from '../../types'
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return { ...state, projecttasks: state.tasks.filter(elm => elm.projectId === action.payload) }
        case ADD_TASK:
            return { ...state, tasks: [action.payload, ...state.tasks], taskerror: false }
        case TASK_ERROR:
            return { ...state, taskerror: true }
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(elm => elm.id !== action.payload) }
        case COMPLETED_TASK:
        case UPDATE_TASK:
            return { ...state, tasks: state.tasks.map(elm => elm.id === action.payload.id ? action.payload : elm), selectedtask: null }
        case SELECTED_TASK:
            return { ...state, selectedtask: action.payload }
        default:
            return state
    }
}