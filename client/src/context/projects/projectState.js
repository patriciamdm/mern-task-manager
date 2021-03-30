import React, { useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'

import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, PROJECT_ERROR, SELECTED_PROJECT, DELETE_PROJECT } from '../../types'

import apiHandler from '../../services/api.service'


const ProjectState = props => {

    const initialState = {
        projects: [],
        form: false,
        projecterror: false,
        selproject: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    const showForm = () => dispatch({ type: PROJECT_FORM })

    const getProjects = async () => {
        try {
            const response = await apiHandler.get('/api/projects')
            dispatch({ type: GET_PROJECTS, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }
    
    const addProject = async info => {
        try {
            const response = await apiHandler.post('/api/projects', info)
            dispatch({type: ADD_PROJECT, payload: response.data})
        } catch (err) {
            console.log(err)
        }
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