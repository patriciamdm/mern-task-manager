import React from 'react'

const Navbar = () => {
    return (
        <header>
            <p>
                Hola <span style={{ fontWeight: '900' }}>NAME</span>
            </p>
            
            <nav>
                <a href="#!">Log out</a>
            </nav>
        </header>
    )
}

export default Navbar
