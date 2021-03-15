import React, { useState } from 'react'


const NewProject = () => {

    const [project, setProject] = useState({
        name: ''
    })

    const handleChange = e => setProject({ ...project, [e.target.name]: e.target.value})

    return (
        <>
            <button type="button" className="btn btn-block btn-primary">New Project</button>

            <form className="new-project">
                <input type="text" placeholder="Project name" name="name" value="" onChange={handleChange} className="input-text" />
                <input type="submit" value="Add project" className="btn btn-block btn-primary" />
            </form>
        </>
    )
}

export default NewProject