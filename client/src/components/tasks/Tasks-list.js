import React, { useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import projectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'

import Task from './Task'


const TasksList = () => {

    const projectsContext = useContext(projectContext)
    const { selproject, deleteProject } = projectsContext

    const tasksContext = useContext(TaskContext)
    const { projecttasks } = tasksContext

    if (!selproject) return <h2>Select a project</h2>

    const [currentProject] = selproject //destructuring, comes as an array

    return (
        <>
            <h2>Project: {currentProject.name} </h2>
            <ul style={{maxWidth: '600px', margin: '0 auto'}} >
                {projecttasks.length === 0
                    ?
                    <li className="task"><p>No tasks</p></li>
                    :
                    <TransitionGroup>
                        {projecttasks.map(elm => <CSSTransition key={elm._id} timeout={200} classNames="task" ><Task task={elm} /></CSSTransition>)}
                    </TransitionGroup>
                    }
            </ul>
            <button type="button" className="btn btn-delete" onClick={() => deleteProject(currentProject._id)} >Delete project &times;</button>
        </>
    )
}

export default TasksList
