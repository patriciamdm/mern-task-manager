module.exports = app => {

    // const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('index', { loginErrorMessage: 'Please, log in or sign up to access' })

    // Base URLS
    app.use('/api/users', require('./users.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))


}