import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import AlertContext from '../../context/alerts/alertContext'
import AuthContext from '../../context/auth/authContext'


const Signup = () => {

    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext
    const authContext = useContext(AuthContext)
    const { signUp } = authContext

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    })

    const { username, email, password, confirm } = user

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()

        if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
            showAlert('All fields are required', 'alert-error')
            return
        }

        if (password.trim().length < 6) {
            showAlert('Password must have at least 6 characters', 'alert-error')
            return
        }

        if (password !== confirm) {
            showAlert('Passwords must be the same', 'alert-error')
            return
        }

        signUp({ username, email, password })
    }

    return (
        <section className="login">
            {alert && <div className={`alert ${alert.category}`}> {alert.msg} </div> }
            <div className="login-form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={user.username} onChange={handleChange} placeholder="Your name" />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={user.email} onChange={handleChange} placeholder="Your email" />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={user.password} onChange={handleChange} placeholder="Your password" />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="confirm">Confirm password</label>
                        <input type="password" id="confirm" name="confirm" value={user.confirm} onChange={handleChange} placeholder="Repeat your password" />
                    </div>
                    
                    <div className="form-field">
                        <input type="submit" className="btn btn-primary btn-block" value="Sign Up" />
                    </div>

                </form>
                <Link to={'/'} style={{ display: 'block', marginTop: '2rem', opacity: '.7', textAlign: 'center' }}>
                    Already signed up? Log in.
                </Link>
            </div>
        </section>

    )
}

export default Signup