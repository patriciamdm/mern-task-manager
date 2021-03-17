import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'

const Task = ({ task }) => {

    const projectsContext = useContext(projectContext)
    const { selproject } = projectsContext
    
    const tasksContext = useContext(TaskContext)
    const { deleteTask, getTasks } = tasksContext

    const [currentProject] = selproject  // destructuring, comes as an array

    const deleteOneTask = taskId => {
        deleteTask(taskId)
        getTasks(currentProject.id)
    }

    return (
        <li className="task shadow">
            
            <p>{task.name}</p>

            <div className="state">
                {task.completed
                    ?
                    <button type="button" className="complete">Complete</button>
                    :
                    <button type="button" className="incomplete">Incomplete</button>
                }
            </div>

            <div className="actions">
                <button type="button" className="btn btn-primary" >Edit</button>
                <button type="button" className="btn btn-secondary" onClick={() => deleteOneTask(task.id)} >Delete</button>
            </div>
        </li>
    )
}

export default Task
