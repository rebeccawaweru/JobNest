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

		res.status(200).json({user, token})

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

// get all users
export const getAllUsers = async (req, res) => {
  try {
	const users = await User.find();
	if (!users) {
	  res.status(400).json({error: 'No users found'});

	}
	res.status(200).json({ message: 'The users were fetched successfully', users});
  } catch(error) {
	res.status(400).json({error: error.message});
  }
}
// get user by id
export const getUserById = async (req, res) => {
	try {
	  const { id } = req.params;
	  const user = await User.findById(id);
	  if (!user) {
		return res.status(400).json({error: "No user found by that id"});
	  }
	  res.status(200).json({ message: 'The user was fetched successfully', user });
	} catch(error) {
	  res.status(400).json({error: error.message});
	}
  }
// update user by id
export const updateUserById = async (req, res) => {
	try {
	  const { id } = req.params;
	  const user = await User.findByIdAndUpdate(id, req.body, { new: true })
	  if (!user) {
		return res.status(400).json({error: "No user can be updated by that id"});
	  }
	  res.status(203).json({ message: 'User updated successfully', user});
	} catch(error) {
	  res.status(400).json({error: error.message});
	}
  }

// delete user by id
export const deleteUserById = async (req, res) => {
	try {
	  const { id } = req.params;
	  const user = await User.findByIdAndDelete(id)
	  if (!user) {
		return res.status(400).json({error: "No user can be deleted by that id"});
	  }
	  res.status(203).json({ message: 'User deleted successfully', user});
	} catch(error) {
	  res.status(400).json({error: error.message});
	}
  }

