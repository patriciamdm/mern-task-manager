import React, { useContext, useEffect } from 'react'

import AuthContext from '../../context/auth/authContext'


const Navbar = () => {

    const authContext = useContext(AuthContext)
    const { user, getUserLogged, logOut } = authContext

    useEffect(() => {
        getUserLogged()
        // eslint-disable-next-line
    }, [])

    return (
        <header>
            {user ? <p>Hola <span style={{ fontWeight: '900' }}>{user.username}</span> </p> : null}
            
            <nav>
                <button className="btn btn-blank logout" onClick={() => logOut()} >Log out</button>
            </nav>
        </header>
    )
}

export default Navbar
