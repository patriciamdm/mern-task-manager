import React from 'react'
import NewProject from '../projects/New-project'


const Sidebar = () => {
    return (
        <aside style={{padding: '3rem'}}>
            <h1>MERN<span>Tasks</span></h1>

            <NewProject />

            <div style={{marginTop: '10rem'}}>
                <h2>Your projects</h2>
            </div>
        </aside>
    )
}

export default Sidebar