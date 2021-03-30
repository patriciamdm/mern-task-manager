import React, { useContext, useState, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'


const TaskForm = () => {

    const projectsContext = useContext(projectContext)
    const { selproject } = projectsContext

    const tasksContext = useContext(TaskContext)
    const { taskerror, getTasks, addTask, showError, selectedtask, updateTask } = tasksContext

    
    const [newtask, setNewTask] = useState({
        name: ''
    })

    useEffect(() => {
        selectedtask !== null ? setNewTask(selectedtask) : setNewTask({ name: '' })
    }, [selectedtask])
    
    if (!selproject) return null

    const [currentProject] = selproject  // destructuring, comes as an array

    const handleChange = e => setNewTask({...newtask, [e.target.name]: e.target.value, project: currentProject._id })

    const handleSubmit = e => {
        e.preventDefault()

        if (newtask.name.trim() === '') {
            showError()
            return
        }

        selectedtask === null ? addTask(newtask) : updateTask(newtask)

        getTasks(currentProject._id)
        setNewTask({ name: '' })
    }

    return (
        <section className="task-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Task Name" name="name" value={newtask.name} onChange={handleChange} />
                </div>

                <div>
                    <input type="submit" className="btn btn-primary btn-block btn-submit" value={selectedtask ? 'Edit task' : 'Add task'}/>
                </div>            
            </form>
            {taskerror && <p className="message error">The task name is required</p>}
        </section>
    )
}

export default TaskForm
