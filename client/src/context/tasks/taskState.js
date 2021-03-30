import React, { useReducer } from 'react'

import taskContext from './taskContext'
import taskReducer from './taskReducer'

import { PROJECT_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK, SELECTED_TASK, UPDATE_TASK, TASK_ERROR } from '../../types'

import apiHandler from '../../services/api.service'


const TaskState = props => {

    const initialState = {
        projecttasks: [],
        taskerror: false,
        selectedtask: null,
        alertmsg: null
    }

    const [state, dispatch] = useReducer(taskReducer, initialState)

    const getTasks = async project => {
        try {
            const response = await apiHandler.get('/api/tasks', { params: { project } })
            dispatch({ type: PROJECT_TASKS, payload: response.data.tasks })
        } catch (err) {
            console.log(err)
            const alert = { msg: `Error ${err.response.status}: ${err.response.statusText}`, category: 'alert-error'}
            dispatch({ type: TASK_ERROR, payload: alert })
        }
    }

    const addTask = async info => {
        try {
            const response = await apiHandler.post('/api/tasks', info)
            dispatch({ type: ADD_TASK, payload: response.data })
        } catch (err) {
            console.log(err)
            const alert = { msg: `Error ${err.response.status}: ${err.response.statusText}`, category: 'alert-error'}
            dispatch({ type: TASK_ERROR, payload: alert })
        }
    }
    
    const showError = () => dispatch({ type: VALIDATE_TASK })
    
    const deleteTask = async (taskId, projectId) => {
        try {
            await apiHandler.delete(`/api/tasks/${taskId}`, { params: { project: projectId } })
            dispatch({ type: DELETE_TASK, payload: taskId })
        } catch (err) {
            console.log(err)
            const alert = { msg: `Error ${err.response.status}: ${err.response.statusText}`, category: 'alert-error'}
            dispatch({ type: TASK_ERROR, payload: alert })
        }
    }
    
    const selectTask = info => dispatch({ type: SELECTED_TASK, payload: info })
    
    const updateTask = async info => {
        try {
            const response = await apiHandler.put(`/api/tasks/${info._id}`, info)
            dispatch({type: UPDATE_TASK, payload: response.data.task})
        } catch (err) {
            console.log(err)
            const alert = { msg: `Error ${err.response.status}: ${err.response.statusText}`, category: 'alert-error'}
            dispatch({ type: TASK_ERROR, payload: alert }) 
        }
    }


    return (
        <taskContext.Provider value={{
            projecttasks: state.projecttasks, taskerror: state.taskerror, selectedtask: state.selectedtask, alertmsg: state.alertmsg,
            getTasks, addTask, showError, deleteTask, selectTask, updateTask
        }} >
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState