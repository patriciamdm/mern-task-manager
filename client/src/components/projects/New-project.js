import React, { useState, useContext } from 'react'
import projectContext from '../../context/projects/projectContext'


const NewProject = () => {

    const projectsContext = useContext(projectContext)
    const { form, projecterror, showForm, addProject, showError } = projectsContext
    
    const [project, setProject] = useState({
        name: ''
    })

    const handleChange = e => setProject({ ...project, [e.target.name]: e.target.value })
    
    const handleSubmit = e => {
        e.preventDefault()

        if (project.name === '') {
            showError()
            return
        }

        addProject(project)
        setProject({ name: ''})
    }

    return (
        <>
            <button type="button" className="btn btn-block btn-primary" onClick={() => showForm()}>New Project</button>

            {form &&
                <form className="new-project" onSubmit={handleSubmit} >
                    <input type="text" name="name" value={project.name} placeholder="Project name" onChange={handleChange} />
                    <input type="submit" value="Add Project" className="btn btn-block btn-primary" />
                </form>
            }
            {projecterror  && <p className="error message">The project name is required</p>}
        </>
    )
}

export default NewProject