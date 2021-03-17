import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    }) 

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <section className="login">
            <div className="login-form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={user.username} onChange={handleChange} />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={user.password} onChange={handleChange} />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="confirm">Confirm password</label>
                        <input type="password" id="confirm" name="confirm" value={user.confirm} onChange={handleChange} />
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