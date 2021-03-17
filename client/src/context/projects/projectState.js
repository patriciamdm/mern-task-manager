import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import projectContext from './projectContext'
import projectReducer from './projectReducer'

import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, PROJECT_ERROR, SELECTED_PROJECT, DELETE_PROJECT } from '../../types'


const ProjectState = props => {

    const initialState = {
        projects: [],
        form: false,
        projecterror: false,
        selproject: null
    }
    
    const projectsArr = [
        { id: 1, name: 'tienda' },
        { id: 2, name: 'web' },
        { id: 3, name: 'design' },
        { id: 4, name: 'hosting' }
    ]


    const [state, dispatch] = useReducer(projectReducer, initialState)

    const showForm = () => dispatch({ type: PROJECT_FORM })

    const getProjects = () => dispatch({ type: GET_PROJECTS, payload: projectsArr })
    
    const addProject = info => {
        info.id = uuidv4()
        dispatch({type: ADD_PROJECT, payload: info})
    }

    const showError = () => dispatch({ type: PROJECT_ERROR })
    
    const selectProject = id => dispatch({ type: SELECTED_PROJECT, payload: id })
    
    const deleteProject = id => dispatch({ type: DELETE_PROJECT, payload: id})


    return (
        <projectContext.Provider value={{
            projects: state.projects, form: state.form, projecterror: state.projecterror, selproject: state.selproject,
            showForm, getProjects, addProject, showError, selectProject, deleteProject
        }} >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState