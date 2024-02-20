// contains email and password field

import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
	type: String,
	required: true,
	unique: true
  },
  password: {
	type: String,
	required: true
  }

})

// register static method
userSchema.statics.register = async function (email, password) {
	// validate the email and password strength
	if (!email || !password) {
		throw new Error('All fields must be filled to proceed')
	}
	if (!validator.isEmail(email)) {
		throw new Error('The email is not valid')
	}
	if (!validator.isStrongPassword(password)) {
		throw new Error('Please use a stronger password')
	}
	// if email exists throw new error else create user
	const exists = await this.findOne({ email })
	if (exists) {
		throw new Error("Email is already in use")
	}

	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(password, salt)
	const user = await this.create({ email, password: hash })

	return user
}

// static login method

userSchema.statics.login = async function(email, password) {
	if (!email || !password) {
		throw new Error('All fields must be filled to proceed')
	}

	const user = await this.findOne({ email })
	// if no user email exists throw new error
	if (!user) {
		throw new Error('Incorrect email, try again')
	}

	const passwordMatch = await bcrypt.compare(password, user.password)
	if (!passwordMatch) {
		throw new Error('Incorrect password, try again')
	}

	return user
}
const User = mongoose.model('User', userSchema)
export default User

