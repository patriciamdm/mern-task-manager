import React from 'react'
import NewProject from '../projects/New-project'
import ProjectsList from '../projects/Projects-list'


const Sidebar = () => {
    return (
        <aside style={{padding: '3rem'}}>
            <h1>MERN<span>Tasks</span></h1>

            <NewProject />

            <div style={{marginTop: '10rem'}}>
                <h2>Your projects</h2>
                <ProjectsList />
            </div>
        </aside>
    )
}

export default Sidebar