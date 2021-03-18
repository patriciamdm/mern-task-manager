import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, PROJECT_ERROR, SELECTED_PROJECT, DELETE_PROJECT } from '../../types'
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case PROJECT_FORM:
            return { ...state, form: true }
        case GET_PROJECTS:
            return { ...state, projects: action.payload }
        case ADD_PROJECT:
            return { ...state, projects: [...state.projects, action.payload], form: false, projecterror: false }
        case PROJECT_ERROR:
            return { ...state, projecterror: true }
        case SELECTED_PROJECT:
            return { ...state, selproject: state.projects.filter(elm => elm.id === action.payload) }
        case DELETE_PROJECT:
            return { ...state, projects: state.projects.filter(elm => elm.id !== action.payload), selproject: null }
        default:
            return state
    }
}