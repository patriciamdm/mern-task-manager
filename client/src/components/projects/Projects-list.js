import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Project from './Project'
import projectContext from '../../context/projects/projectContext'


const ProjectsList = () => {

    const projectsContext = useContext(projectContext)
    const { projects, getProjects } = projectsContext
    
    useEffect(() => {
        getProjects()
        // eslint-disable-next-line
    }, [])

    if (projects.length === 0) return <p>There are no projects, start by creating one</p>

    return (
        <ul className="project-list" >
            <TransitionGroup>
                {projects.map(elm => <CSSTransition key={elm.id} timeout={200} classNames="project"><Project project={elm} /></CSSTransition>)}
            </TransitionGroup>
        </ul>
    )
}

export default ProjectsList
