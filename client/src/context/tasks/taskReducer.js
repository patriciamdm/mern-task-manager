import { PROJECT_TASKS, ADD_TASK, TASK_ERROR, DELETE_TASK, COMPLETED_TASK } from '../../types'

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
            return {...state, tasks: state.projecttasks.map(elm => elm.id === action.payload.id ? action.payload : elm)}
        default:
            return state
    }
}