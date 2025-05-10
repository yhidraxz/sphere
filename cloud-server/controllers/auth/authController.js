import User from "../../db/schemas/User.js"

const login = async (req, res) => {
    console.log('im on')
    const { loginKey } = req.body;

    console.log(loginKey)

    const user = await User.findOne({ loginKey })

    if (!user) {
        return res.status(401).json({error: 'invalid login key'})
    }

    res.json({success:  true, userId: user._id})
}

export { login };