import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

// create token function
const createToken = (_id) => {
	return jwt.sign({_id}, process.env.SECRET, { expiresIn: '4d' })
}
// login user
export const loginUser = async (req, res) => {
	const { username, password } = req.body
	try {
		const user = await User.login(username, password)
		// create token
		const token = createToken(user._id)

		res.status(200).json({username, token})

	} catch (error) {
		res.status(400).json({error: error.message})

	}
}
// register user
export const registerUser = async (req, res) => {

	const { type, fullname, username, email, password } = req.body
	try {
		const user = await User.register(type, fullname, username, email, password)
		// create token
		const token = createToken(user._id)

		res.status(200).json({email, user, token})

	} catch (error) {
		res.status(400).json({error: error.message})

	}
}


