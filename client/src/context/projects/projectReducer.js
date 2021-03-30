import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_PROJECT, SELECTED_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from '../../types'
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case PROJECT_FORM:
            return { ...state, form: true }
        case GET_PROJECTS:
            return { ...state, projects: action.payload }
        case ADD_PROJECT:
            return { ...state, projects: [...state.projects, action.payload], form: false, projecterror: false }
        case VALIDATE_PROJECT:
            return { ...state, projecterror: true }
        case SELECTED_PROJECT:
            return { ...state, selproject: state.projects.filter(elm => elm._id === action.payload) }
        case DELETE_PROJECT:
            return { ...state, projects: state.projects.filter(elm => elm._id !== action.payload), selproject: null }
        case PROJECT_ERROR:
            return {...state, alertmsg: action.payload}
        default:
            return state
    }
}