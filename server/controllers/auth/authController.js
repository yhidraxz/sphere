import users from "../../db/schemas/users"

const login = async (req, res) => {
    const { loginKey } = req.body;

    const user = await users.findOne({ loginKey })
    if (!user) {
        return res.status(401).json({error: 'invalid login key'})
    }

    res.json({success:  true, userId: user._id})
}

export { login };