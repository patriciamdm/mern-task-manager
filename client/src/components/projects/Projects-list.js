import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Project from './Project'
import projectContext from '../../context/projects/projectContext'
import AlertContext from '../../context/alerts/alertContext'


const ProjectsList = () => {

    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext
    const projectsContext = useContext(projectContext)
    const { projects, alertmsg, getProjects } = projectsContext
    
    useEffect(() => {
        if (alertmsg) showAlert(alertmsg.msg, alertmsg.category)
        getProjects()
        // eslint-disable-next-line
    }, [alertmsg])

    if (projects.length === 0) return <p>There are no projects, start by creating one</p>

    return (
        <ul className="project-list" >
            {alert && <div className={`alert ${alert.category}`}> {alert.msg} </div> }
            <TransitionGroup>
                {projects.map(elm => <CSSTransition key={elm._id} timeout={200} classNames="project"><Project project={elm} /></CSSTransition>)}
            </TransitionGroup>
        </ul>
    )
}

export default ProjectsList
