import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'


const Project = ({ project }) => {
    
    const projectsContext = useContext(projectContext)
    const { selectProject } = projectsContext
    
    const tasksContext = useContext(TaskContext)
    const { getTasks } = tasksContext

    const defineProject = id => {
        selectProject(id)
        getTasks(id)
    }


    return (
        <li>
            <button type="button" className="btn btn-blank" onClick={() => defineProject(project._id)}>
                {project.name}
            </button>
        </li>
    )
}

export default Project
