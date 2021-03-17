import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    }) 

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <section className="login">
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