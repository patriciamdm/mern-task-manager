import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AlertContext from '../../context/alerts/alertContext'
import AuthContext from '../../context/auth/authContext'


const Login = props => {

    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext
    const authContext = useContext(AuthContext)
    const { logged, alertmsg, logIn } = authContext

    useEffect(() => {
        if (logged) {
            props.history.push('/projects')
            return
        }
        if (alertmsg) showAlert(alertmsg.msg, alertmsg.category)
    }, [alertmsg, logged, props.history])

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()

        if (email.trim() === '' || password.trim() === '') {
            showAlert('Both fields are required', 'alert-error')
            return
        }

        logIn({email, password})
    }

    return (
        <section className="login">
            {alert && <div className={`alert ${alert.category}`}> {alert.msg} </div> }
            <div className="login-form">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={user.password} onChange={handleChange} />
                    </div>
                    
                    <div className="form-field">
                        <input type="submit" className="btn btn-primary btn-block" value="Log In" />
                    </div>

                </form>
                <Link to={'/signup'} style={{ display: 'block', marginTop: '2rem', opacity: '.7', textAlign: 'center' }}>
                    Don't have an account? Sign up.
                </Link>
            </div>
        </section>

    )
}

export default Login