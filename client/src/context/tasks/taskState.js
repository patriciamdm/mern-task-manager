import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import taskContext from './taskContext'
import taskReducer from './taskReducer'

import { PROJECT_TASKS, ADD_TASK, TASK_ERROR, DELETE_TASK } from '../../types'


const TaskState = props => {

    const initialState = {
        tasks: [
            { id: 1, name: 'web', completed: true, projectId: 1 },
            { id: 2, name: 'site', completed: false, projectId: 2 },
            { id: 3, name: 'home', completed: false, projectId: 3 },
            { id: 4, name: 'cart', completed: true, projectId: 4 },
            { id: 5, name: 'web', completed: true, projectId: 4 },
            { id: 6, name: 'site', completed: false, projectId: 1 },
            { id: 7, name: 'home', completed: false, projectId: 2 },
            { id: 8, name: 'cart', completed: true, projectId: 3 }
        ],
        projecttasks: null,
        taskerror: false
    }

    const [state, dispatch] = useReducer(taskReducer, initialState)

    const getTasks = projectId => dispatch({ type: PROJECT_TASKS, payload: projectId })

    const addTask = info => {
        info.id = uuidv4()
        info.completed = false
        dispatch({ type: ADD_TASK, payload: info })
    }
    
    const showError = () => dispatch({ type: TASK_ERROR })
    
    const deleteTask = id => dispatch({type: DELETE_TASK, payload: id})
    


    return (
        <taskContext.Provider value={{
            tasks: state.tasks, projecttasks: state.projecttasks, taskerror: state.taskerror,
            getTasks, addTask, showError, deleteTask
        }} >
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState