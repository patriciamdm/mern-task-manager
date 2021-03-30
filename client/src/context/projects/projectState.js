import React, { useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'

import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_PROJECT, SELECTED_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from '../../types'

import apiHandler from '../../services/api.service'


const ProjectState = props => {

    const initialState = {
        projects: [],
        form: false,
        projecterror: false,
        selproject: null,
        alertmsg: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    const showForm = () => dispatch({ type: PROJECT_FORM })

    const getProjects = async () => {
        try {
            const response = await apiHandler.get('/api/projects')
            dispatch({ type: GET_PROJECTS, payload: response.data })
        } catch (err) {
            const alert = { msg: err.response.data.msg, category: 'alert-error'}
            dispatch({ type: PROJECT_ERROR, payload: alert })
        }
    }
    
    const addProject = async info => {
        try {
            const response = await apiHandler.post('/api/projects', info)
            dispatch({type: ADD_PROJECT, payload: response.data})
        } catch (err) {
            const alert = { msg: err.response.data.msg, category: 'alert-error'}
            dispatch({ type: PROJECT_ERROR, payload: alert })
        }
    }

    const showError = () => dispatch({ type: VALIDATE_PROJECT })
    
    const selectProject = id => dispatch({ type: SELECTED_PROJECT, payload: id })
    
    const deleteProject = async id => {
        try {
            await apiHandler.delete(`/api/projects/${id}`)
            dispatch({ type: DELETE_PROJECT, payload: id})
        } catch (err) {
            const alert = { msg: err.response.data.msg, category: 'alert-error'}
            dispatch({type: PROJECT_ERROR, payload: alert})
        }
    }


    return (
        <projectContext.Provider value={{
            projects: state.projects, form: state.form, projecterror: state.projecterror, selproject: state.selproject, alertmsg: state.alertmsg,
            showForm, getProjects, addProject, showError, selectProject, deleteProject
        }} >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState