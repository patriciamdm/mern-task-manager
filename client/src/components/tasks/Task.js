import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'

const Task = ({ task }) => {

    const projectsContext = useContext(projectContext)
    const { selproject } = projectsContext
    
    const tasksContext = useContext(TaskContext)
    const { deleteTask, getTasks, taskState, selectTask } = tasksContext

    const [currentProject] = selproject  // destructuring, comes as an array

    const deleteOneTask = taskId => {
        deleteTask(taskId, currentProject._id)
        getTasks(currentProject._id)
    }

    const changeState = data => {
        data.completed ? data.completed = false : data.completed = true
        taskState(data)
    }

    return (
        <li className="task shadow">
            
            <p>{task.name}</p>

            <div className="state">
                {task.completed
                    ?
                    <button type="button" className="complete" onClick={() => changeState(task)}>Complete</button>
                    :
                    <button type="button" className="incomplete" onClick={() => changeState(task)}>Incomplete</button>
                }
            </div>

            <div className="actions">
                <button type="button" className="btn btn-primary" onClick={() => selectTask(task)}>Edit</button>
                <button type="button" className="btn btn-secondary" onClick={() => deleteOneTask(task._id)} >Delete</button>
            </div>
        </li>
    )
}

export default Task
