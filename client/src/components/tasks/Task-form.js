import React, { useContext, useState } from 'react'
import projectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'


const TaskForm = () => {

    const projectsContext = useContext(projectContext)
    const { selproject } = projectsContext

    const tasksContext = useContext(TaskContext)
    const { taskerror, getTasks, addTask, showError } = tasksContext
    
    const [newtask, setNewTask] = useState({
        name: ''
    })
    
    if (!selproject) return null

    const [currentProject] = selproject  // destructuring, comes as an array

    const handleChange = e => setNewTask({...newtask, [e.target.name]: e.target.value, projectId: currentProject.id })

    const handleSubmit = e => {
        e.preventDefault()

        if (newtask.name.trim() === '') {
            showError()
            return
        }

        addTask(newtask)
        getTasks(currentProject.id)
        setNewTask({ name: '' })
    }

    return (
        <section className="task-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Task Name" name="name" value={newtask.name} onChange={handleChange} />
                </div>

                <div>
                    <input type="submit" value="Add Task" className="btn btn-primary btn-block btn-submit" />
                </div>            
            </form>
            {taskerror && <p className="message error">The task name is required</p>}
        </section>
    )
}

export default TaskForm
