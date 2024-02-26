import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import Token from '../models/tokenModel.js'
import { sendEmail } from '../utils/sendEmail.js'
import crypto from 'crypto'

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
		const userToken = createToken(user._id)

		if (!user.verified) {
			let token = await Token.findOne({ userId: user._id })
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString('hex')
				}).save();
				const url = `${process.env.BASE_URL}server/users/${user._id}/verify/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);
			}
			res.status(200).send({message: "Another email has been sent to your account please verify"})

		} else {
			res.status(200).json({user, userToken})
		}

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

		// send email verfication Token
		const emailToken = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString('hex')
		}).save();
		const url = `${process.env.BASE_URL}server/users/${user._id}/verify/${emailToken.token}`;
		await sendEmail(user.email, "Verify Email", url);
		res.status(201).send({ message: "An email has been sent to your account please verify", email, user, token});

	} catch (error) {
		return res.status(400).json({error: error.message})

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

// send verification token
export const sendVerificationToken = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({_id: id});
	if (!user) {
		return res.status(400).send({ message: "Invalid link" });
	}
	const token = await Token.findOne({
		userId: user._id,
		token: req.params.token
	});
	if (!token) {
		return res.status(400).send({ message: "Invalid token" });
	}
	await User.updateOne(
		{_id: user._id},
		{$set: {verified: true}}
		);
	await Token.deleteOne({_id: token._id});
	res.status(200).send({ message: "Email verified successfully" });

  } catch (error) {
	res.status(400).send({ message: "This email can't be verified", error: error.message });

  }
}
