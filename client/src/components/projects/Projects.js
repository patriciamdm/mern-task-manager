import React from 'react'
import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar'
import TaskForm from '../tasks/Task-form'
import TasksList from '../tasks/Tasks-list'


const Projects = () => {
    return (
        <main>
            <Sidebar />

            <section>
                <Navbar />
                
                <article>
                    <TaskForm />

                    <div style={{padding: '4rem'}} >
                        <TasksList />
                    </div>

                </article>
            </section>
        </main>
    )
}

export default Projects

