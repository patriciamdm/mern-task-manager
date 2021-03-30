import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext'

const PrivateRoute = ({ component: Component, ...props  }) => {

    const authContext = useContext(AuthContext)
    const { logged, loading, getUserLogged } = authContext

    useEffect(() => {
        getUserLogged()
    }, [])

    return ( 
        <Route { ...props } render={ props => !logged && !loading ? <Redirect to="/" /> : <Component {...props} /> } />
    )
}
 
export default PrivateRoute