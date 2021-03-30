const jwt = require('jsonwebtoken')

module.exports = {
    
    userIsLogged: (req, res, next) => {
        const token = req.header('x-auth-token')
        
        if (!token) {
            return res.status(401).json({ msg: 'No Token, invalid permit' });
        }

        try {
            const verifiedToken = jwt.verify(token, process.env.TOKEN);
            req.user = verifiedToken.user;
            next();

        } catch (err) {
            console.error('Error with Token:', err);
            res.status(401).json({ msg: 'Invalid Token' });
        }
    }

}