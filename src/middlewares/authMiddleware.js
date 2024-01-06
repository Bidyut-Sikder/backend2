const { Decode } = require("../utility/tokenHandler")


exports.authMiddleWare = async (req, res, next) => {
    try {

        const token = req.headers.token

        if (!token) {
            token = req.cookies['token']
        }

        const decoded = Decode(token)
        const { email, userId } = decoded
        req.headers.userId = userId;
        req.headers.email = email
        next()

    } catch (error) {
        return res.status(401).json({ status: 'fail', message: 'Unauthorized' })
    }

}

































